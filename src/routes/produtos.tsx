import { createFileRoute } from "@tanstack/react-router";
import { ProductCatalogMega } from "@/components/site/product-catalog-mega";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site-data";

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
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: "Produtos | Cabos elétricos Eletrocobre" },
      {
        name: "twitter:description",
        content: "Filtros inteligentes e seleção guiada para pedir orçamento mais rápido.",
      },
      { name: "twitter:image", content: OG_IMAGE_URL },
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
            Filtre por categoria — flexíveis, solares, controle, PP — ou busque pelo nome ou bitola para localizar o produto certo e solicitar cotação direto pelo WhatsApp.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container">
          <ProductCatalogMega />
        </div>
      </section>
    </div>
  );
}
