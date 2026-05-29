import { useMemo, useState } from "react";
import { type FilterGroup, ProductFilters } from "@/components/site/product-filters";
import { ProductGrid } from "@/components/site/product-grid";
import { ProductSearch } from "@/components/site/product-search";
import { products } from "@/data/products";

const GAUGE_ORDER = ["0,75mm", "1mm", "1,5mm", "2,5mm", "4mm", "6mm", "10mm", "16mm", "25mm+"];
const VOLTAGE_ORDER = ["300V", "500V", "750V", "1kV", "1,8kV"];

function matchesFilters(
  p: (typeof products)[number],
  category: string | null,
  brand: string | null,
  voltage: string | null,
  gauge: string | null,
  term: string,
): boolean {
  if (category && p.category !== category) return false;
  if (brand && p.brand !== brand) return false;
  if (voltage && p.voltage !== voltage) return false;
  if (gauge && p.gauge !== gauge) return false;
  if (term && ![p.name, p.category, p.sku ?? "", p.brand ?? ""].join(" ").toLowerCase().includes(term)) return false;
  return true;
}

function countOptions<K extends keyof (typeof products)[number]>(
  key: K,
  baseProducts: (typeof products)[number][],
): Record<string, number> {
  const map: Record<string, number> = {};
  for (const p of baseProducts) {
    const v = p[key] as string | undefined;
    if (v) map[v] = (map[v] ?? 0) + 1;
  }
  return map;
}

export function ProductCatalogMega() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [voltage, setVoltage] = useState<string | null>(null);
  const [gauge, setGauge] = useState<string | null>(null);

  const term = search.trim().toLowerCase();

  const filtered = useMemo(
    () => products.filter((p) => matchesFilters(p, category, brand, voltage, gauge, term)),
    [category, brand, voltage, gauge, term],
  );

  // Contextual counts: each dimension is counted against all other active filters
  const withoutCategory = useMemo(
    () => products.filter((p) => matchesFilters(p, null, brand, voltage, gauge, term)),
    [brand, voltage, gauge, term],
  );
  const withoutBrand = useMemo(
    () => products.filter((p) => matchesFilters(p, category, null, voltage, gauge, term)),
    [category, voltage, gauge, term],
  );
  const withoutVoltage = useMemo(
    () => products.filter((p) => matchesFilters(p, category, brand, null, gauge, term)),
    [category, brand, gauge, term],
  );
  const withoutGauge = useMemo(
    () => products.filter((p) => matchesFilters(p, category, brand, voltage, null, term)),
    [category, brand, voltage, term],
  );

  const categoryCounts = useMemo(() => countOptions("category", withoutCategory), [withoutCategory]);
  const brandCounts = useMemo(() => countOptions("brand", withoutBrand), [withoutBrand]);
  const voltageCounts = useMemo(() => countOptions("voltage", withoutVoltage), [withoutVoltage]);
  const gaugeCounts = useMemo(() => countOptions("gauge", withoutGauge), [withoutGauge]);

  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [],
  );
  const allBrands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand).filter(Boolean) as string[])).sort(),
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
      key: "brand",
      label: "Marca",
      active: brand,
      onChange: setBrand,
      options: allBrands.map((v) => ({ value: v, label: v, count: brandCounts[v] ?? 0 })),
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
    setBrand(null);
    setVoltage(null);
    setGauge(null);
    setSearch("");
  };

  return (
    <div className="space-y-6">
      <div className="premium-card space-y-4 p-5 md:p-6">
        <ProductSearch value={search} onChange={setSearch} />
        <ProductFilters
          groups={filterGroups}
          totalCount={products.length}
          filteredCount={filtered.length}
          onClear={handleClear}
        />
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
