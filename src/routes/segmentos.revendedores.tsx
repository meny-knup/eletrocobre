import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/segmentos/revendedores")({
  head: () => ({
    meta: [
      { title: "Revendedores | Eletrocobre" },
      {
        name: "description",
        content:
          "Mix de cabos e fios para revendas com negociação sob medida, giro e resposta comercial rápida.",
      },
      { property: "og:title", content: "Revendedores | Eletrocobre" },
      {
        property: "og:description",
        content: "Ganhe agilidade comercial e apoio para compor mix de produtos mais competitivo para revenda.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Revendedores | Eletrocobre" },
      { name: "twitter:description", content: "Cabos e fios para revenda com negociação consultiva." },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/segmentos/revendedores` }],
  }),
  component: ResellersPage,
});

function ResellersPage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Revendedores</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Mais giro e mais clareza para compor um mix de cabos competitivo.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A Eletrocobre atende revendas com apoio comercial, negociação sob medida e curadoria de portfólio para demanda recorrente.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Dores de revenda</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>• Ruptura de estoque e perda de venda</li>
              <li>• Pressão por margem e preço competitivo</li>
              <li>• Variedade de aplicações no balcão</li>
            </ul>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Apoio Eletrocobre</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>• Mix estratégico para maior aderência comercial</li>
              <li>• Condições sob medida para volume e recorrência</li>
              <li>• Atendimento ágil para reposição e novas demandas</li>
            </ul>
          </div>
        </div>
        <div className="site-container mt-6">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Peça uma proposta comercial para sua revenda.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Compartilhe o perfil da sua demanda e receba um orçamento alinhado ao seu mix.</p>
            </div>
            <Button asChild>
              <Link to="/orcamento">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
