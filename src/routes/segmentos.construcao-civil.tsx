import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/segmentos/construcao-civil")({
  head: () => ({
    meta: [
      { title: "Construção civil | Eletrocobre" },
      {
        name: "description",
        content:
          "Soluções em cabos e fios para obras com cronograma apertado, padronização e resposta comercial rápida.",
      },
      { property: "og:title", content: "Construção civil | Eletrocobre" },
      {
        property: "og:description",
        content: "Reduza atraso de obra com atendimento consultivo e cabos adequados à instalação predial.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Construção civil | Eletrocobre" },
      { name: "twitter:description", content: "Cabos e fios para obras com suporte consultivo." },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/segmentos/construcao-civil` }],
  }),
  component: ConstructionPage,
});

function ConstructionPage() {
  return (
    <SegmentTemplate
      eyebrow="Construção civil"
      title="Cabos e fios para obras que não podem parar."
      description="A Eletrocobre ajuda construtoras, instaladores e compras de obra a especificar materiais com mais confiança e agilidade comercial."
      painPoints={["Cronograma pressionado e risco de atraso na entrega", "Dúvida sobre bitola e aplicação correta", "Retrabalho por compra inadequada"]}
      solutions={["Linhas para instalações prediais e infraestruturas elétricas", "Apoio consultivo para compra mais segura", "Orçamento rápido para obras em diferentes fases"]}
    />
  );
}

function SegmentTemplate({
  eyebrow,
  title,
  description,
  painPoints,
  solutions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  painPoints: string[];
  solutions: string[];
}) {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Principais dores</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {painPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Como a Eletrocobre ajuda</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {solutions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="site-container mt-6">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Solicite um orçamento alinhado ao seu cronograma.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Compartilhe o tipo de obra e a necessidade de cabos. A equipe orienta a melhor opção com rapidez.
              </p>
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
