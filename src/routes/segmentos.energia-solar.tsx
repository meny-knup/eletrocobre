import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/segmentos/energia-solar")({
  head: () => ({
    meta: [
      { title: "Energia solar | Eletrocobre" },
      {
        name: "description",
        content:
          "Cabos para energia solar com resistência, durabilidade e suporte rápido para integradores e instaladores.",
      },
      { property: "og:title", content: "Energia solar | Eletrocobre" },
      {
        property: "og:description",
        content: "Soluções para projetos fotovoltaicos com orçamento ágil e atendimento consultivo.",
      },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: "Energia solar | Eletrocobre" },
      { name: "twitter:description", content: "Cabos solares com atendimento consultivo." },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/segmentos/energia-solar` }],
  }),
  component: SolarPage,
});

function SolarPage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Energia solar</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Cabos preparados para projetos solares que exigem confiança em campo.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Atendemos integradores, instaladores e compradores de sistemas fotovoltaicos com soluções resistentes e resposta comercial rápida.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Desafios do segmento</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>• Exposição do material ao tempo e à radiação</li>
              <li>• Necessidade de cumprir prazos de implantação</li>
              <li>• Dúvida técnica na seleção do cabo ideal</li>
            </ul>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Como ajudamos</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>• Portfólio direcionado para aplicações fotovoltaicas</li>
              <li>• Atendimento comercial ágil e consultivo</li>
              <li>• Orçamento conforme escala e contexto do projeto</li>
            </ul>
          </div>
        </div>
        <div className="site-container mt-6">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Agilize sua implantação com uma cotação alinhada ao projeto.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Fale com a equipe e receba suporte para escolher o material adequado.</p>
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
