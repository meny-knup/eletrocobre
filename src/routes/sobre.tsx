import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Eletrocobre" },
      {
        name: "description",
        content:
          "Conheça o posicionamento da Eletrocobre em cabos e fios com foco em qualidade, agilidade e atendimento consultivo.",
      },
      { property: "og:title", content: "Sobre a Eletrocobre" },
      {
        property: "og:description",
        content: "Qualidade, confiabilidade comercial e suporte para projetos em todo o Brasil.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Sobre a Eletrocobre" },
      { name: "twitter:description", content: "Conheça o posicionamento da Eletrocobre." },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sobre` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Sobre</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Uma operação comercial focada em compra segura e resposta rápida.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A Eletrocobre atende clientes que precisam de cabos e fios com agilidade, confiança técnica e negociação alinhada ao contexto real de cada projeto.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-3">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">Posicionamento</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A proposta da Eletrocobre é unir clareza comercial, qualidade e atendimento consultivo para tornar a escolha e a compra mais simples.
            </p>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">Qualidade</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              O portfólio é pensado para aplicações residenciais, industriais, solares e especiais, com foco em confiança e aderência à necessidade do cliente.
            </p>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">Agilidade</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Atendimento rápido, negociação sob medida e apoio comercial contínuo para compradores em todo o Brasil.
            </p>
          </div>
        </div>
        <div className="site-container mt-6">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Quer avançar para uma cotação?</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Fale com a equipe e receba uma proposta adequada ao seu projeto.</p>
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
