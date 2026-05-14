import { cn } from "@/lib/utils";

type Props = {
  categories: string[];
  active: string | null;
  onChange: (category: string | null) => void;
  counts?: Record<string, number>;
  totalCount?: number;
};

export function ProductFilters({ categories, active, onChange, counts, totalCount }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={cn(
          "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
          active === null
            ? "border-primary bg-primary/15 text-foreground"
            : "border-border/70 bg-card/60 text-muted-foreground hover:text-foreground",
        )}
      >
        Todos {typeof totalCount === "number" && <span className="ml-1 text-xs opacity-70">({totalCount})</span>}
      </button>
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(isActive ? null : category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-primary bg-primary/15 text-foreground"
                : "border-border/70 bg-card/60 text-muted-foreground hover:text-foreground",
            )}
          >
            {category}
            {counts?.[category] !== undefined && (
              <span className="ml-1 text-xs opacity-70">({counts[category]})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
