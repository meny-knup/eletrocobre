import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { type FilterGroup, ProductFiltersMobile, ProductFiltersSidebar } from "@/components/site/product-filters";
import { ProductGrid } from "@/components/site/product-grid";
import { ProductSearch } from "@/components/site/product-search";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const PAGE_SIZE = 20;
const GAUGE_ORDER = ["0,75mm", "1mm", "1,5mm", "2,5mm", "4mm", "6mm", "10mm", "16mm", "25mm+"];
const VOLTAGE_ORDER = ["300V", "500V", "750V", "1kV", "1,8kV"];

function matchesFilters(
  p: (typeof products)[number],
  category: string | null,
  voltage: string | null,
  gauge: string | null,
  term: string,
): boolean {
  if (category && p.category !== category) return false;
  if (voltage && p.voltage !== voltage) return false;
  if (gauge && p.gauge !== gauge) return false;
  if (term && ![p.name, p.category, p.sku ?? ""].join(" ").toLowerCase().includes(term)) return false;
  return true;
}

function countOptions<K extends keyof (typeof products)[number]>(
  key: K,
  base: (typeof products)[number][],
): Record<string, number> {
  const map: Record<string, number> = {};
  for (const p of base) {
    const v = p[key] as string | undefined;
    if (v) map[v] = (map[v] ?? 0) + 1;
  }
  return map;
}

export function ProductCatalogMega() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [voltage, setVoltage] = useState<string | null>(null);
  const [gauge, setGauge] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const term = search.trim().toLowerCase();
  const hasActive = category !== null || voltage !== null || gauge !== null || term !== "";
  const activeCount = [category, voltage, gauge, term].filter(Boolean).length;

  // Reset pagination when filters change
  useEffect(() => { setShowAll(false); }, [category, voltage, gauge, term]);

  const filtered = useMemo(
    () => products.filter((p) => matchesFilters(p, category, voltage, gauge, term)),
    [category, voltage, gauge, term],
  );

  const displayed = showAll ? filtered : filtered.slice(0, PAGE_SIZE);

  // Contextual counts (exclude the dimension being counted)
  const withoutCategory = useMemo(
    () => products.filter((p) => matchesFilters(p, null, voltage, gauge, term)),
    [voltage, gauge, term],
  );
  const withoutVoltage = useMemo(
    () => products.filter((p) => matchesFilters(p, category, null, gauge, term)),
    [category, gauge, term],
  );
  const withoutGauge = useMemo(
    () => products.filter((p) => matchesFilters(p, category, voltage, null, term)),
    [category, voltage, term],
  );

  const categoryCounts = useMemo(() => countOptions("category", withoutCategory), [withoutCategory]);
  const voltageCounts = useMemo(() => countOptions("voltage", withoutVoltage), [withoutVoltage]);
  const gaugeCounts = useMemo(() => countOptions("gauge", withoutGauge), [withoutGauge]);

  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [],
  );
  const allVoltages = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.voltage).filter(Boolean) as string[])).sort(
        (a, b) => VOLTAGE_ORDER.indexOf(a) - VOLTAGE_ORDER.indexOf(b),
      ),
    [],
  );
  const allGauges = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.gauge).filter(Boolean) as string[])).sort(
        (a, b) => GAUGE_ORDER.indexOf(a) - GAUGE_ORDER.indexOf(b),
      ),
    [],
  );

  const filterGroups: FilterGroup[] = [
    {
      key: "category",
      label: "Categoria",
      active: category,
      onChange: setCategory,
      options: allCategories.map((v) => ({ value: v, label: v, count: categoryCounts[v] ?? 0 })),
    },
    {
      key: "voltage",
      label: "Tensão",
      active: voltage,
      onChange: setVoltage,
      options: allVoltages.map((v) => ({ value: v, label: v, count: voltageCounts[v] ?? 0 })),
    },
    {
      key: "gauge",
      label: "Bitola",
      active: gauge,
      onChange: setGauge,
      options: allGauges.map((v) => ({ value: v, label: v, count: gaugeCounts[v] ?? 0 })),
    },
  ];

  const handleClear = () => {
    setCategory(null);
    setVoltage(null);
    setGauge(null);
    setSearch("");
    setShowAll(false);
  };

  const filterProps = {
    groups: filterGroups,
    totalCount: products.length,
    filteredCount: filtered.length,
    hasActive,
    onClear: handleClear,
  };

  return (
    <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8 xl:grid-cols-[280px_1fr]">

      {/* ── Sidebar (desktop only) ── */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 premium-card p-5">
          <ProductFiltersSidebar {...filterProps} />
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="min-w-0 space-y-5">

        {/* Search + mobile filter toggle */}
        <div className="flex gap-2">
          <div className="flex-1">
            <ProductSearch value={search} onChange={setSearch} />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex shrink-0 items-center gap-2 rounded-md border border-border/70 bg-card/80 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <SlidersHorizontal className="size-4" />
            Filtrar
            {activeCount > 0 && (
              <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                {activeCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile filter panel */}
        {mobileOpen && (
          <div className="lg:hidden premium-card p-4">
            <ProductFiltersMobile {...filterProps} />
          </div>
        )}

        {/* Product grid */}
        <ProductGrid products={displayed} sidebar />

        {/* Show all / show less */}
        {filtered.length > PAGE_SIZE && (
          <div className="flex items-center justify-center gap-4 pt-2">
            {!showAll ? (
              <Button variant="outline" onClick={() => setShowAll(true)}>
                Ver todos os {filtered.length} produtos
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowAll(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground"
              >
                Mostrar menos
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
