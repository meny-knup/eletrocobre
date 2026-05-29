import { useState } from "react";
import { Cable, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildQuoteWhatsappUrl, WHATSAPP_NUMBER, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

function buildSpecWhatsappUrl(productName: string): string {
  const message = `Olá, preciso de informações técnicas sobre: ${productName}. Poderia me ajudar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const [hover, setHover] = useState(false);
  const [imgError, setImgError] = useState(false);

  const hasImage = Boolean(product.image) && !imgError;
  const showHover = hover && product.hoverImage && !imgError;
  const quoteUrl = buildQuoteWhatsappUrl(product.name);
  const specUrl = buildSpecWhatsappUrl(product.name);

  return (
    <Card
      className="premium-card group flex flex-col overflow-hidden rounded-lg border-border/70 bg-card/80 shadow-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-background/40">
        {hasImage ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className={cn(
                "absolute inset-0 size-full object-contain transition-opacity duration-300",
                showHover ? "opacity-0" : "opacity-100",
              )}
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className={cn(
                  "absolute inset-0 size-full object-contain transition-opacity duration-300",
                  showHover ? "opacity-100" : "opacity-0",
                )}
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/30">
            <Cable className="size-10 text-primary/30" />
            <p className="text-xs text-muted-foreground/60">Imagem em breve</p>
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {product.category}
          </p>
          <h3 className="font-display text-sm font-semibold leading-snug text-foreground line-clamp-3 sm:text-base">
            {product.name}
          </h3>
          {product.sku && (
            <p className="text-xs text-muted-foreground/70">SKU: {product.sku}</p>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-1.5">
          <Button
            asChild
            className="w-full h-auto min-h-9 py-2 whitespace-normal text-xs sm:text-sm"
          >
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
              <WhatsAppIcon className="size-3.5 shrink-0" />
              Solicitar cotação
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full h-auto min-h-8 py-1.5 whitespace-normal text-xs"
          >
            <a href={specUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
              <MessageCircle className="size-3.5 shrink-0" />
              Tirar dúvidas técnicas
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
