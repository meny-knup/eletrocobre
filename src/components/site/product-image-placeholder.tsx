import { Cable, Factory, House, SunMedium } from "lucide-react";
import type { ProductSegment } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const config: Record<ProductSegment, { Icon: typeof House; gradient: string; label: string }> = {
  residencial: {
    Icon: House,
    gradient: "from-primary/30 via-primary/10 to-background",
    label: "Residencial",
  },
  industrial: {
    Icon: Factory,
    gradient: "from-chart-1/30 via-primary/10 to-background",
    label: "Industrial",
  },
  solar: {
    Icon: SunMedium,
    gradient: "from-amber-500/25 via-primary/10 to-background",
    label: "Solar",
  },
  maquinas: {
    Icon: Cable,
    gradient: "from-primary/25 via-chart-1/15 to-background",
    label: "Máquinas",
  },
};

export function ProductImagePlaceholder({
  application,
  gauge,
  className,
}: {
  application: ProductSegment;
  gauge?: string;
  className?: string;
}) {
  const { Icon, gradient, label } = config[application];

  return (
    <div
      role="img"
      aria-label={`Imagem ilustrativa de cabo ${label}${gauge ? ` ${gauge}` : ""}`}
      className={cn(
        "relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-gradient-to-br",
        gradient,
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.18]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 14px)",
          }}
        />
      </div>

      <div
        className="absolute -left-10 top-1/2 h-3 w-[140%] -translate-y-1/2 rotate-[-10deg] rounded-full bg-gradient-to-r from-primary/80 via-primary to-primary/40 shadow-[var(--shadow-copper)]"
        aria-hidden
      />
      <div
        className="absolute -left-10 top-[60%] h-1.5 w-[140%] -translate-y-1/2 rotate-[-10deg] rounded-full bg-foreground/40"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <span className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-background/70 text-primary backdrop-blur">
          <Icon className="size-6" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
          {label}
        </p>
        {gauge && (
          <p className="font-display text-lg font-semibold text-foreground">{gauge}</p>
        )}
      </div>
    </div>
  );
}
