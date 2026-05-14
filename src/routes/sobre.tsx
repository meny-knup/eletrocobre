import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site-data";

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
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: "Sobre a Eletrocobre" },
      { name: "twitter:description", content: "Conheça o posicionamento da Eletrocobre." },
      { name: "twitter:image", content: OG_IMAGE_URL },
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Sobre a Eletrocobre</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Uma distribuidora focada em compra segura, resposta rápida e atendimento real.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A Eletrocobre nasceu da necessidade de um fornecimento de cabos e fios mais ágil, mais consultivo e mais próximo de quem compra: construtoras, instaladores, indústrias, integradores solares e revendas de todo o Brasil.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Nossa proposta</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Clareza comercial antes de qualquer catálogo.</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                O mercado de cabos elétricos é técnico e cheio de variáveis: tensão, bitola, tipo de isolação, ambiente de uso, normas. Uma compra errada gera retrabalho, atraso e custo extra.
              </p>
              <p>
                A Eletrocobre existe para simplificar esse processo. Nosso atendimento é consultivo — antes de qualquer cotação, entendemos a aplicação real do cliente e indicamos o produto certo. Isso reduz erro, acelera a decisão e protege o projeto.
              </p>
              <p>
                Atendemos compradores de obras, equipes de manutenção industrial, instaladores de energia solar e revendas regionais que precisam de mix estratégico e negociação ágil.
              </p>
            </div>
          </div>
          <div className="grid gap-4 content-start">
            <div className="premium-card p-5">
              <h3 className="font-display text-xl font-semibold text-foreground">Atendimento para todo o Brasil</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Cotamos e entregamos para obras, indústrias e instaladores em qualquer região do país, com foco em agilidade de resposta e previsibilidade de prazo.</p>
            </div>
            <div className="premium-card p-5">
              <h3 className="font-display text-xl font-semibold text-foreground">Portfólio industrial e residencial</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Cabos flexíveis, PP, HEPR, solares e especiais. Um mix curado para cobrir as principais aplicações do mercado sem complexidade desnecessária.</p>
            </div>
            <div className="premium-card p-5">
              <h3 className="font-display text-xl font-semibold text-foreground">Negociação por volume e recorrência</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Para revendas, construtoras e indústrias com demanda recorrente, oferecemos condições comerciais ajustadas ao contexto de cada operação.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section border-y border-border/70 bg-card/40">
        <div className="site-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Estrutura e localização</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Base em Guarulhos, distribuição para todo o Brasil.</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Localizada em Guarulhos (SP), a Eletrocobre opera em posição logística estratégica — próxima às principais rodovias do eixo São Paulo–interior e ao maior aeroporto de cargas da América Latina — o que viabiliza entregas ágeis para obras e indústrias em qualquer estado.
              </p>
              <p>
                Nosso foco é exclusivamente B2B: estrutura comercial orientada a volume, recorrência e agilidade de resposta para construtoras, instaladores, indústrias, integradores solares e revendas regionais.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="premium-card flex items-start gap-4 p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display text-base font-semibold text-foreground">Endereço operacional</p>
                <address className="mt-1 not-italic text-sm leading-6 text-muted-foreground">
                  R. Barão de Penedo, 319 — Cumbica<br />
                  Guarulhos, SP · CEP 07222-015
                </address>
              </div>
            </div>
            <div className="premium-card flex items-start gap-4 p-5">
              <Building2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display text-base font-semibold text-foreground">Dados institucionais</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Fornecedor e Revenda de Materiais Elétricos Ltda<br />
                  CNPJ 65.824.251/0001-36
                </p>
              </div>
            </div>
            <div className="premium-card flex items-start gap-4 p-5">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display text-base font-semibold text-foreground">Contato comercial</p>
                <a
                  href="mailto:contato.eletrocobre@gmail.com"
                  className="mt-1 block text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                >
                  contato.eletrocobre@gmail.com
                </a>
                <p className="mt-0.5 text-xs text-muted-foreground/70">Consultas, cotações e parcerias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Quem atendemos</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Segmentos com atendimento direcionado.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Construção civil", desc: "Construtoras, empreiteiras e eletricistas que precisam de agilidade comercial e material certo no prazo." },
              { title: "Indústrias", desc: "Compras de manutenção, expansão de linha e reposição de estoque com suporte técnico consultivo." },
              { title: "Energia solar", desc: "Instaladores e integradores que precisam de cabos específicos para fotovoltaico com resistência e confiabilidade." },
              { title: "Revendedores", desc: "Mix estratégico para giro de estoque, negociação por volume e apoio comercial recorrente." },
            ].map((item) => (
              <div key={item.title} className="premium-card p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="premium-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Pronto para fazer uma cotação?</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Fale com a equipe pelo WhatsApp ou envie um email para{" "}
                <a href="mailto:contato.eletrocobre@gmail.com" className="text-primary transition-colors hover:text-primary/80">
                  contato.eletrocobre@gmail.com
                </a>{" "}
                e receba uma proposta adequada ao seu projeto.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/orcamento">Solicitar orçamento</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/produtos">Ver catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
