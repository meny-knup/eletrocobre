import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterValue = string | null;

export type FilterGroup = {
  key: string;
  label: string;
  options: { value: string; label: string; count: number }[];
  active: FilterValue;
  onChange: (value: FilterValue) => void;
};

type Props = {
  groups: FilterGroup[];
  totalCount: number;
  filteredCount: number;
  onClear: () => void;
};

export function ProductFilters({ groups, totalCount, filteredCount, onClear }: Props) {
  const hasActive = groups.some((g) => g.active !== null);

  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <div key={group.key} className="flex flex-wrap items-center gap-2">
          <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {group.label}
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => group.onChange(null)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                group.active === null
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border/60 bg-card/50 text-muted-foreground hover:border-border hover:text-foreground",
              )}
            >
              Todos
            </button>
            {group.options.map((opt) => {
              const isActive = group.active === opt.value;
              const isEmpty = opt.count === 0;
              return (
                <button
                  key={opt.value}
                  type="button"
                  disabled={isEmpty}
                  onClick={() => group.onChange(isActive ? null : opt.value)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    isActive
                      ? "border-primary bg-primary/15 text-foreground"
                      : isEmpty
                        ? "cursor-not-allowed border-border/40 bg-card/30 text-muted-foreground/40"
                        : "border-border/60 bg-card/50 text-muted-foreground hover:border-border hover:text-foreground",
                  )}
                >
                  {opt.label}
                  {!isEmpty && (
                    <span className="ml-1 opacity-55">({opt.count})</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between pt-1">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{filteredCount}</span>
          {" "}
          {filteredCount === 1 ? "produto encontrado" : "produtos encontrados"}
          {filteredCount < totalCount && (
            <span className="text-muted-foreground/60"> de {totalCount}</span>
          )}
        </p>
        {hasActive && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <X className="size-3" />
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}
