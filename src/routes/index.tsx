import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cable,
  Factory,
  MapPin,
  MessageCircle,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FeaturedCarousel } from "@/components/site/featured-carousel";
import { QuoteCta } from "@/components/site/quote-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  OG_IMAGE_URL,
  SITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  categoryHighlights,
  differentials,
  faqItems,
  featuredBrands,
  howItWorksSteps,
  segmentSummaries,
  testimonials,
  trustPillars,
} from "@/lib/site-data";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eletrocobre | Cabos e fios elétricos — Guarulhos, SP" },
      {
        name: "description",
        content:
          "Distribuidora de cabos e fios elétricos com base em Guarulhos, SP. Atendimento consultivo, orçamento sob medida e entrega para todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Eletrocobre | Cabos e fios elétricos — Guarulhos, SP" },
      {
        property: "og:description",
        content:
          "Ganhe agilidade na compra de cabos e fios com suporte consultivo, entrega rápida e atendimento para todo o Brasil.",
      },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eletrocobre | Cabos e fios elétricos — Guarulhos, SP" },
      {
        name: "twitter:description",
        content:
          "Cabos e fios para obras, indústria, solar e revenda com foco em atendimento consultivo e resposta rápida.",
      },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: HomePage,
});

const pillarIcons = [BadgeCheck, MapPin, ShieldCheck];
const categoryIcons = [Building2, Factory, SunMedium, Cable];
const stepIcons = [Cable, MessageCircle, Zap];

function HomePage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="site-section overflow-hidden">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Distribuidora B2B · Base em Guarulhos, SP
              </p>
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

            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 text-primary" />
                {WHATSAPP_DISPLAY}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 text-primary/70" />
                Base em Guarulhos, SP
              </span>
              <Link
                to="/produtos"
                className="flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
              >
                Consultar catálogo
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              <div className="premium-card p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Atendimento</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">Consultivo</dd>
              </div>
              <div className="premium-card p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Orçamento</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">Pelo WhatsApp</dd>
              </div>
              <div className="premium-card p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Logística</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">Guarulhos, SP</dd>
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Fornecimento estratégico
                </p>
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

      {/* ── Trust pillars ── */}
      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Por que a Eletrocobre</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
              Portfólio real, localização estratégica e atendimento que entende a sua aplicação.
            </h2>
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
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="site-section">
        <div className="site-container">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Processo simples</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
              Como funciona a cotação.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Sem formulários complexos. Sem espera desnecessária. Direto no WhatsApp.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={step.step} className="premium-card space-y-4 p-6">
                  <div className="space-y-3">
                    {/* FIX: step number como eyebrow label, não número gigante opaco */}
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{step.step}</p>
                    <span className="flex size-12 items-center justify-center rounded-md bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="shadow-[var(--shadow-copper)]">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                Iniciar cotação pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Featured carousel — movido para cima (posição 4) ── */}
      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container">
          <FeaturedCarousel />
        </div>
      </section>

      {/* ── Brands strip — redesign editorial ── */}
      <section className="site-section">
        <div className="site-container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
            <p className="shrink-0 text-sm font-medium text-muted-foreground">
              Diversas marcas, como:
            </p>
            <p className="font-display text-xl font-semibold text-foreground">
              {featuredBrands.join(" · ")}
              <span className="ml-3 font-sans text-sm font-normal italic text-muted-foreground/70">
                e outras em expansão
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Category highlights ── */}
      <section className="site-section border-t border-border/70 bg-card/40">
        <div className="site-container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Entrada por produto</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Comece pela categoria que mais faz sentido para o seu projeto.
              </h2>
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
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground/70">{item.audience}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Differentials ── */}
      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Por que escolher a Eletrocobre</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
              Mais clareza comercial, menos risco de erro na compra.
            </h2>
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

      {/* ── Segments — FIX: cards simplificados, menos texto ── */}
      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Segmentos atendidos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
              Soluções pensadas para as dores de cada operação.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {segmentSummaries.map((segment) => (
              <Card key={segment.slug} className="lift-card rounded-lg border-border/70 bg-card/70 shadow-none">
                <CardContent className="flex h-full flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{segment.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{segment.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {segment.painPoints.slice(0, 2).map((pain) => (
                      <li key={pain} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {pain}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={segment.to}>Ver soluções</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="site-section">
        <div className="site-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Depoimentos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
              Quem precisa de resposta rápida valoriza parceria comercial sólida.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="premium-card rounded-lg border-border/70 bg-card/70 shadow-none">
                <CardContent className="p-6">
                  <p className="text-base leading-7 text-foreground">"{item.quote}"</p>
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

      {/* ── FAQ — FIX: accordion sem premium-card (conflito de estado) ── */}
      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dúvidas frequentes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
              Respostas antes de chamar no WhatsApp.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Não encontrou o que precisava? Nossa equipe responde com agilidade.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Falar com a equipe
                </a>
              </Button>
            </div>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-lg border border-border/70 bg-card/60 px-5 transition-colors data-[state=open]:bg-card"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground hover:no-underline [&>svg]:shrink-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pronto para cotar?</p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Fale com quem entende antes de comprar.
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Informe o produto, a bitola ou a aplicação. Se ainda houver dúvida, nossa equipe orienta a especificação e agiliza o orçamento.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-primary" />
              <span>Especificação técnica antes do orçamento</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-primary" />
              <span>Atendimento direto no WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-primary" />
              <span>Entrega de Guarulhos para qualquer estado</span>
            </div>
          </div>
          <QuoteCta title="Solicitar orçamento agora" />
        </div>
      </section>

    </div>
  );
}
