import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export function QuoteCta({
  className,
  title = "Solicitar orçamento agora",
  description = "Fale direto com nosso time pelo WhatsApp e receba uma cotação sob medida para o seu projeto, com atendimento rápido para todo o Brasil.",
}: {
  className?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className={cn("premium-card p-6 md:p-10", className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Cotação rápida
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="text-sm leading-6 text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="min-w-56 shadow-[var(--shadow-copper)]">
          <a href={whatsappLink} rel="noreferrer" target="_blank">
            <MessageCircle className="size-5" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
