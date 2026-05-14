import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/segmentos/industrias")({
  head: () => ({
    meta: [
      { title: "Indústrias | Eletrocobre" },
      {
        name: "description",
        content:
          "Cabos para painéis, máquinas e alimentação industrial com atendimento consultivo e orçamento sob medida.",
      },
      { property: "og:title", content: "Indústrias | Eletrocobre" },
      {
        property: "og:description",
        content: "Reduza risco operacional com cabos adequados para cargas industriais e resposta comercial rápida.",
      },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: "Indústrias | Eletrocobre" },
      { name: "twitter:description", content: "Cabos industriais com suporte consultivo." },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/segmentos/industrias` }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Indústrias</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Fornecimento confiável para operação contínua e menor risco de parada.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A Eletrocobre atende demandas industriais com foco em previsibilidade, especificação adequada e agilidade na negociação.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Dores comuns</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>• Parada operacional causada por material inadequado</li>
              <li>• Pressão por desempenho e durabilidade</li>
              <li>• Dificuldade em alinhar especificação e compra</li>
            </ul>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Soluções Eletrocobre</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>• Cabos para alimentação, painéis e aplicações industriais</li>
              <li>• Atendimento consultivo para reduzir erro de compra</li>
              <li>• Condições sob medida para projetos e recorrência</li>
            </ul>
          </div>
        </div>
        <div className="site-container mt-6">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Leve mais previsibilidade para o abastecimento industrial.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Peça uma cotação e converse com a equipe sobre a aplicação e o volume necessário.</p>
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
