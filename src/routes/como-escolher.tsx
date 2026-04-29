import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_URL, howToChooseTopics } from "@/lib/site-data";

export const Route = createFileRoute("/como-escolher")({
  head: () => ({
    meta: [
      { title: "Como escolher cabos elétricos | Eletrocobre" },
      {
        name: "description",
        content:
          "Aprenda a escolher cabos elétricos, entenda diferenças entre aplicações e evite erros comuns na compra.",
      },
      { property: "og:title", content: "Como escolher cabos elétricos | Eletrocobre" },
      {
        property: "og:description",
        content:
          "Conteúdo educativo para orientar sua escolha, gerar confiança e acelerar a cotação certa.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Como escolher cabos elétricos | Eletrocobre" },
      {
        name: "twitter:description",
        content: "Guia prático para escolher o cabo certo e evitar erro na compra.",
      },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/how-to-choose` }],
  }),
  component: HowToChoosePage,
});

function HowToChoosePage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Guia prático</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Como escolher cabos elétricos sem errar na compra.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Antes de decidir pelo preço ou por uma referência conhecida, vale entender aplicação, tensão, ambiente de uso e a necessidade real do projeto.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-4 lg:grid-cols-3">
          {howToChooseTopics.map((topic) => (
            <Card key={topic.title} className="premium-card rounded-lg border-border/70 bg-card/70 shadow-none">
              <CardContent className="p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">{topic.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Diferenças entre tipos mais comuns</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
              <p><strong className="text-foreground">Flexível:</strong> prático para instalações prediais e montagens que exigem melhor manuseio.</p>
              <p><strong className="text-foreground">Potência:</strong> indicado para alimentação de cargas e aplicações com maior exigência operacional.</p>
              <p><strong className="text-foreground">Solar:</strong> desenvolvido para resistir ao ambiente externo e trabalhar em sistemas fotovoltaicos.</p>
              <p><strong className="text-foreground">Controle e automação:</strong> usado em comandos, painéis, sensores e integração de máquinas.</p>
            </div>
          </div>
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Erros comuns que atrasam o projeto</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <div className="flex gap-3"><ArrowRight className="mt-1 size-4 text-primary" /><span>Escolher o produto só pelo menor preço.</span></div>
              <div className="flex gap-3"><ArrowRight className="mt-1 size-4 text-primary" /><span>Ignorar a aplicação real e o ambiente de uso.</span></div>
              <div className="flex gap-3"><ArrowRight className="mt-1 size-4 text-primary" /><span>Comprar sem validar tensão, bitola e tipo de cabo.</span></div>
              <div className="flex gap-3"><ArrowRight className="mt-1 size-4 text-primary" /><span>Deixar a decisão para a última hora e sofrer com prazo.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Ainda está em dúvida?</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Peça orientação da equipe e receba uma indicação mais segura para o seu projeto.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/quote">Solicitar orçamento</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products">Explorar produtos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
