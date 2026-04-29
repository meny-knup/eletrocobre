import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cable,
  Factory,
  MessageCircle,
  ShieldCheck,
  SunMedium,
  TimerReset,
} from "lucide-react";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { QuoteCta } from "@/components/site/quote-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SITE_URL,
  WHATSAPP_NUMBER,
  categoryHighlights,
  differentials,
  segmentSummaries,
  testimonials,
  trustPillars,
} from "@/lib/site-data";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eletrocobre | Cabos e fios para orçamento" },
      {
        name: "description",
        content:
          "Cabos e fios elétricos para construção, indústria, energia solar e revenda com orçamento sob medida e atendimento consultivo.",
      },
      { property: "og:title", content: "Eletrocobre | Cabos e fios para orçamento" },
      {
        property: "og:description",
        content:
          "Ganhe agilidade na compra de cabos e fios com suporte consultivo, entrega rápida e atendimento para todo o Brasil.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Eletrocobre | Cabos e fios para orçamento" },
      {
        name: "twitter:description",
        content:
          "Cabos e fios para obras, indústria, solar e revenda com foco em conversão e atendimento rápido.",
      },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: HomePage,
});

const pillarIcons = [ShieldCheck, TimerReset, BadgeCheck];
const categoryIcons = [Building2, Factory, SunMedium, Cable];

function HomePage() {
  return (
    <div>
      <section className="site-section overflow-hidden">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Atendimento para todo o Brasil</p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] text-foreground md:text-6xl">
                Cabos e fios elétricos com resposta rápida para quem precisa comprar certo.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                A Eletrocobre conecta obras, indústrias, projetos solares e revendas a soluções em cabos e fios com suporte consultivo, agilidade comercial e orçamento sob medida.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/orcamento">Solicitar orçamento</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={whatsappLink} rel="noreferrer" target="_blank">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              <div className="premium-card p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Atendimento</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">Consultivo</dd>
              </div>
              <div className="premium-card p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Entrega</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">Rápida</dd>
              </div>
              <div className="premium-card p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Cobertura</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">Brasil inteiro</dd>
              </div>
            </dl>
          </div>

          <div className="hero-panel relative min-h-[420px] overflow-hidden rounded-lg border border-border/70 p-4 md:min-h-[520px]">
            <img
              src={heroImage}
              alt="Cabos elétricos em composição premium com iluminação cobre"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/35 to-transparent" />
            <div className="relative flex h-full flex-col justify-end">
              <div className="premium-card max-w-md p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Fornecimento estratégico</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  Menos atraso na compra. Mais segurança na especificação.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Orçamentos sob medida para obras, indústria, instalações solares, máquinas e revenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Confiança comercial</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">A base certa para pedir orçamento com rapidez e confiança.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <Card key={pillar.title} className="premium-card rounded-lg border-border/70 bg-card/70 shadow-none">
                  <CardContent className="p-6">
                    <span className="flex size-12 items-center justify-center rounded-md bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Entrada por produto</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Comece pela categoria que mais faz sentido para o seu projeto.</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/produtos">Ver catálogo completo</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categoryHighlights.map((item, index) => {
              const Icon = categoryIcons[index];
              return (
                <Card key={item.title} className="lift-card rounded-lg border-border/70 bg-card/70 shadow-none">
                  <CardContent className="p-6">
                    <span className="flex size-12 items-center justify-center rounded-md bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <p className="mt-4 text-sm font-medium text-foreground">{item.audience}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Por que escolher a Eletrocobre</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Mais clareza comercial, menos risco de erro na compra.</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              O foco não é apenas mostrar catálogo. É ajudar você a avançar na decisão com suporte rápido, indicação prática e cotação alinhada ao contexto do projeto.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {differentials.map((item) => (
              <div key={item} className="premium-card p-5">
                <p className="text-sm leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Segmentos atendidos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Soluções pensadas para as dores de cada operação.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {segmentSummaries.map((segment) => (
              <Card key={segment.slug} className="lift-card rounded-lg border-border/70 bg-card/70 shadow-none">
                <CardContent className="flex h-full flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{segment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{segment.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Principais dores</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    {segment.painPoints.map((pain) => (
                      <li key={pain}>• {pain}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button variant="outline" asChild>
                      <Link to={segment.to}>Ver soluções</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Depoimentos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Quem precisa de resposta rápida valoriza parceria comercial sólida.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="premium-card rounded-lg border-border/70 bg-card/70 shadow-none">
                <CardContent className="p-6">
                  <p className="text-base leading-7 text-foreground">“{item.quote}”</p>
                  <div className="mt-6 border-t border-border/70 pt-4">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pronto para cotar?</p>
            <h2 className="font-display text-4xl font-semibold text-foreground">Receba um atendimento rápido para comprar com mais segurança.</h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Informe o projeto, a bitola ou o tipo de aplicação. Se ainda houver dúvida, nossa equipe ajuda a encontrar a melhor opção e agiliza o orçamento.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-primary" />
              <span>Orçamento sob medida</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-primary" />
              <span>WhatsApp como canal rápido</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-primary" />
              <span>Apoio comercial para todo o Brasil</span>
            </div>
          </div>
          <QuoteCta title="Solicitar orçamento agora" />
        </div>
      </section>
    </div>
  );
}
