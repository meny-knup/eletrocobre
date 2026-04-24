import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/eletrocobre-hero.jpg";
import { QuoteForm } from "@/components/site/quote-form";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site-data";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Solicitar orçamento | Eletrocobre" },
      {
        name: "description",
        content:
          "Solicite um orçamento de cabos e fios com atendimento consultivo, resposta rápida e suporte via WhatsApp.",
      },
      { property: "og:title", content: "Solicitar orçamento | Eletrocobre" },
      {
        property: "og:description",
        content: "Envie seu projeto e receba atendimento consultivo para cotação sob medida.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "Solicitar orçamento | Eletrocobre" },
      { name: "twitter:description", content: "Cotação rápida de cabos e fios com suporte consultivo." },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/quote` }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <div>
      <section className="site-section border-b border-border/70">
        <div className="site-container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Orçamento</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground">Solicite um orçamento rápido para o seu projeto.</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Informe a necessidade, a aplicação ou a bitola desejada. Se precisar, nossa equipe ajuda a indicar o produto certo antes de fechar a compra.
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Fale do seu jeito</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Use o formulário para já sair com a mensagem pronta no WhatsApp ou entre direto pelo canal de atendimento quando preferir agilidade imediata.
            </p>
            <div className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              <p>• Nome e telefone para retorno mais rápido</p>
              <p>• Empresa opcional para compras corporativas</p>
              <p>• Tipo de projeto para direcionar a indicação</p>
              <p>• Produto desejado ou aplicação necessária</p>
            </div>
            <a
              href={whatsappLink}
              rel="noreferrer"
              target="_blank"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Abrir WhatsApp agora
            </a>
          </div>
          <QuoteForm title="Preencha e continue no WhatsApp" />
        </div>
      </section>
    </div>
  );
}
