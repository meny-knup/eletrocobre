import { useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { buildQuoteWhatsappUrl, products } from "@/data/products";

type Product = (typeof products)[number];

const FEATURED_IDS = ["9073", "9036", "9100", "9479", "12888", "12878", "9439", "9388"];
const featured: Product[] = FEATURED_IDS.flatMap((id) => {
  const p = products.find((p) => p.id === id);
  return p ? [p] : [];
});

function ProductSlide({ product }: { product: Product }) {
  const quoteUrl = buildQuoteWhatsappUrl(product.name);
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_12px_36px_-8px_oklch(0.35_0.06_45_/_18%)]">
      <div className="relative aspect-square overflow-hidden bg-muted/40">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{product.category}</p>
          <h3 className="font-display text-sm font-semibold leading-snug text-foreground line-clamp-2">{product.name}</h3>
        </div>
        <div className="mt-auto pt-1">
          <Button asChild size="sm" className="w-full">
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-3.5" />
              Solicitar cotação
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Produtos em destaque</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Soluções em fios e cabos prontos para cotar.</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Cabos flexíveis, multipolares e especiais para obras, indústria e aplicações técnicas.</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Produto anterior"
              className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próximo produto"
              className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link to="/produtos">Ver catálogo</Link>
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-3 flex sm:-ml-4">
          {featured.map((product) => (
            <div
              key={product.id}
              className="min-w-0 flex-[0_0_80%] pl-3 sm:flex-[0_0_46%] sm:pl-4 md:flex-[0_0_32%] lg:flex-[0_0_24%]"
            >
              <ProductSlide product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {featured.length} produtos selecionados ·{" "}
          <Link to="/produtos" className="text-primary underline-offset-2 hover:underline">
            ver catálogo completo
          </Link>
        </p>
        <Button variant="outline" size="sm" asChild className="sm:hidden">
          <Link to="/produtos">Ver catálogo</Link>
        </Button>
      </div>
    </div>
  );
}
