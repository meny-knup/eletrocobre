import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { segmentSummaries, SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/segments")({
  head: () => ({
    meta: [
      { title: "Segmentos atendidos | Eletrocobre" },
      {
        name: "description",
        content:
          "Veja como a Eletrocobre atende construção civil, indústrias, energia solar e revendedores com soluções consultivas.",
      },
      { property: "og:title", content: "Segmentos atendidos | Eletrocobre" },
      {
        property: "og:description",
        content:
          "Soluções por segmento com dores, aplicações e chamadas para orçamento rápido.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Segmentos atendidos | Eletrocobre" },
      {
        name: "twitter:description",
        content: "Conheça as soluções por segmento atendido pela Eletrocobre.",
      },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/segments` }],
  }),
  component: SegmentsPage,
});

function SegmentsPage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Segmentos</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Atendimento direcionado para cada contexto de compra.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Cada operação tem uma urgência, um risco e um tipo de especificação. Por isso, a Eletrocobre organiza o atendimento por segmento e objetivo de compra.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {segmentSummaries.map((segment) => (
            <Card key={segment.slug} className="lift-card rounded-lg border-border/70 bg-card/70 shadow-none">
              <CardContent className="flex h-full flex-col p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">{segment.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{segment.description}</p>
                <div className="mt-5 space-y-2">
                  {segment.solutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-2 text-sm text-foreground">
                      <ArrowRight className="size-4 text-primary" />
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <Button asChild>
                    <Link to={segment.to}>Ver página do segmento</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
