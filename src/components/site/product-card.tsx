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
      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {product.category}
          </p>
          <h3 className="font-display text-lg font-semibold leading-snug text-foreground line-clamp-3">
            {product.name}
          </h3>
          {product.sku && (
            <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
          )}
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <Button asChild className="w-full">
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Solicitar cotação
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full">
            <a href={specUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Tirar dúvidas técnicas
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
