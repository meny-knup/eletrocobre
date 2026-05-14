import { useMemo, useState } from "react";
import { ProductFilters } from "@/components/site/product-filters";
import { ProductGrid } from "@/components/site/product-grid";
import { ProductSearch } from "@/components/site/product-search";
import { products } from "@/data/products";

export function ProductCatalogMega() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of products) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category ? p.category === category : true;
      const matchesSearch = term
        ? [p.name, p.category, p.sku ?? ""].join(" ").toLowerCase().includes(term)
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <ProductSearch value={search} onChange={setSearch} />
        <ProductFilters
          categories={categories}
          active={category}
          onChange={setCategory}
          counts={counts}
          totalCount={products.length}
        />
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </p>
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
