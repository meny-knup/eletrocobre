import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Props = { products: Product[]; sidebar?: boolean };

export function ProductGrid({ products, sidebar }: Props) {
  if (products.length === 0) {
    return (
      <div className="premium-card p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Nenhum produto encontrado
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Ajuste a busca ou os filtros para ver outros cabos disponíveis.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        sidebar
          ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
