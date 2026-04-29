import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { ProductCatalog } from "@/components/site/product-catalog";
import { SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos | Cabos elétricos Eletrocobre" },
      {
        name: "description",
        content:
          "Encontre cabos elétricos com filtros por tensão, aplicação, tipo e bitola, além de uma seleção guiada por necessidade.",
      },
      { property: "og:title", content: "Produtos | Cabos elétricos Eletrocobre" },
      {
        property: "og:description",
        content:
          "Catálogo com filtros inteligentes, produtos recomendados e CTA direto para solicitar orçamento.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Produtos | Cabos elétricos Eletrocobre" },
      {
        name: "twitter:description",
        content: "Filtros inteligentes e seleção guiada para pedir orçamento mais rápido.",
      },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/produtos` }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Catálogo inteligente</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Encontre o cabo certo com mais rapidez.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Use filtros por tensão, aplicação, tipo e bitola, ou comece pela seleção guiada para descobrir as opções mais adequadas ao seu projeto.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container">
          <ProductCatalog />
        </div>
      </section>
    </div>
  );
}
