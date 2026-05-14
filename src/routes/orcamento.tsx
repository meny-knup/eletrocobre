import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { QuoteCta } from "@/components/site/quote-cta";
import { Button } from "@/components/ui/button";
import { OG_IMAGE_URL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site-data";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Solicitar orçamento | Eletrocobre" },
      {
        name: "description",
        content:
          "Solicite um orçamento de cabos e fios direto pelo WhatsApp, com atendimento rápido para todo o Brasil.",
      },
      { property: "og:title", content: "Solicitar orçamento | Eletrocobre" },
      {
        property: "og:description",
        content: "Fale com a Eletrocobre pelo WhatsApp e receba uma cotação sob medida.",
      },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:title", content: "Solicitar orçamento | Eletrocobre" },
      { name: "twitter:description", content: "Cotação rápida de cabos e fios pelo WhatsApp." },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/orcamento` }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Orçamento</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">
            Solicite seu orçamento direto pelo WhatsApp.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Fale com nosso time comercial e receba uma cotação sob medida para a sua obra, indústria, projeto solar ou revenda. Atendimento rápido para todo o Brasil.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="min-w-56 shadow-[var(--shadow-copper)]">
              <a href={whatsappLink} rel="noreferrer" target="_blank">
                <MessageCircle className="size-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="premium-card p-6 md:p-8">
              <h2 className="font-display text-3xl font-semibold text-foreground">Como funciona</h2>
              <div className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                <p>• Clique no botão e abra a conversa no WhatsApp</p>
                <p>• Nos conte o produto, a bitola ou a aplicação desejada</p>
                <p>• Informe volume aproximado e cidade de entrega</p>
                <p>• Nosso time retorna com a cotação e o prazo</p>
              </div>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <a href={whatsappLink} rel="noreferrer" target="_blank">
                    Abrir WhatsApp agora
                  </a>
                </Button>
              </div>
            </div>
            <div className="premium-card flex items-start gap-4 p-5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary/70" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Localização</p>
                <address className="mt-1.5 not-italic text-sm leading-6 text-muted-foreground">
                  R. Barão de Penedo, 319 — Cumbica · Guarulhos, SP
                </address>
                <p className="mt-0.5 text-xs text-muted-foreground/70">
                  Fornecedor e Revenda de Materiais Elétricos Ltda · CNPJ 65.824.251/0001-36
                </p>
                <div className="mt-3 flex items-center gap-1.5 border-t border-border/50 pt-3">
                  <Mail className="size-3 shrink-0 text-primary/60" />
                  <a
                    href="mailto:contato.eletrocobre@gmail.com"
                    className="truncate text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    contato.eletrocobre@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <QuoteCta
            title="Solicitar orçamento agora"
            description="Direcione sua demanda em segundos e converse diretamente com nossa equipe comercial pelo WhatsApp."
          />
        </div>
      </section>
    </div>
  );
}
