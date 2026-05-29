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
  hasActive: boolean;
  onClear: () => void;
};

function Pill({
  label,
  count,
  isActive,
  isEmpty,
  onClick,
}: {
  label: string;
  count?: number;
  isActive: boolean;
  isEmpty: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={isEmpty}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors",
        isActive
          ? "border-primary bg-primary/15 text-foreground"
          : isEmpty
            ? "cursor-not-allowed border-border/30 bg-transparent text-muted-foreground/30"
            : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {label}
      {!isEmpty && count !== undefined && (
        <span className="ml-1 opacity-55">({count})</span>
      )}
    </button>
  );
}

/* ─── Sidebar layout (desktop) ─── */
export function ProductFiltersSidebar({ groups, totalCount, filteredCount, hasActive, onClear }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-semibold text-foreground">Filtros</h2>
        {hasActive && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <X className="size-3" />
            Limpar
          </button>
        )}
      </div>

      {groups.map((group, i) => (
        <div key={group.key}>
          {i > 0 && <div className="mb-4 h-px bg-border/50" />}
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Pill
              label="Todos"
              isActive={group.active === null}
              isEmpty={false}
              onClick={() => group.onChange(null)}
            />
            {group.options.map((opt) => (
              <Pill
                key={opt.value}
                label={opt.label}
                count={opt.count}
                isActive={group.active === opt.value}
                isEmpty={opt.count === 0}
                onClick={() => group.onChange(group.active === opt.value ? null : opt.value)}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="border-t border-border/50 pt-4">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{filteredCount}</span>
          {filteredCount < totalCount && (
            <> de {totalCount}</>
          )}{" "}
          {filteredCount === 1 ? "produto" : "produtos"}
        </p>
      </div>
    </div>
  );
}

/* ─── Inline layout (mobile panel) ─── */
export function ProductFiltersMobile({ groups, filteredCount, totalCount, hasActive, onClear }: Props) {
  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <div key={group.key} className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">
            {group.label}
          </p>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <Pill
              label="Todos"
              isActive={group.active === null}
              isEmpty={false}
              onClick={() => group.onChange(null)}
            />
            {group.options.map((opt) => (
              <Pill
                key={opt.value}
                label={opt.label}
                count={opt.count}
                isActive={group.active === opt.value}
                isEmpty={opt.count === 0}
                onClick={() => group.onChange(group.active === opt.value ? null : opt.value)}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{filteredCount}</span>
          {filteredCount < totalCount && <> de {totalCount}</>}{" "}
          {filteredCount === 1 ? "produto" : "produtos"}
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
