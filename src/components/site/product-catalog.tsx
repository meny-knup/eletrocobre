import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cable, Factory, Filter, House, Layers3, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProductImagePlaceholder } from "@/components/site/product-image-placeholder";
import {
  guidedSelectorOptions,
  products,
  type Product,
  type ProductSegment,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const icons = {
  residencial: House,
  industrial: Factory,
  solar: SunMedium,
  maquinas: Cable,
};

type FilterState = {
  voltage: string;
  application: string;
  type: string;
  gauge: string;
};

const defaultFilters: FilterState = {
  voltage: "",
  application: "",
  type: "",
  gauge: "",
};

function uniqueValues(items: Product[], key: keyof FilterState) {
  return Array.from(new Set(items.map((item) => item[key])));
}

export function ProductCatalog() {
  const [guided, setGuided] = useState<ProductSegment | null>(null);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesGuided = guided ? product.application === guided : true;
      const matchesVoltage = filters.voltage ? product.voltage === filters.voltage : true;
      const matchesApplication = filters.application ? product.application === filters.application : true;
      const matchesType = filters.type ? product.type === filters.type : true;
      const matchesGauge = filters.gauge ? product.gauge === filters.gauge : true;
      const term = search.trim().toLowerCase();
      const matchesSearch = term
        ? [product.name, product.summary, product.category, ...product.specs, ...product.benefits]
            .join(" ")
            .toLowerCase()
            .includes(term)
        : true;

      return (
        matchesGuided && matchesVoltage && matchesApplication && matchesType && matchesGauge && matchesSearch
      );
    });
  }, [filters, guided, search]);

  const filterOptions = {
    voltage: uniqueValues(products, "voltage"),
    application: uniqueValues(products, "application"),
    type: uniqueValues(products, "type"),
    gauge: uniqueValues(products, "gauge"),
  };

  return (
    <div className="space-y-8">
      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="premium-card p-6 md:p-8">
          <div className="flex items-center gap-3 text-primary">
            <Layers3 className="size-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">Seleção guiada</p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground">Para que você precisa?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Escolha o cenário de uso e veja os produtos mais recomendados para começar a cotação mais rápido.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {guidedSelectorOptions.map((option) => {
              const Icon = icons[option.value];
              const active = guided === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setGuided(active ? null : option.value)}
                  className={cn(
                    "lift-card flex min-h-32 flex-col items-start gap-3 rounded-lg border px-4 py-4 text-left transition-all",
                    active
                      ? "border-primary bg-primary/10 text-foreground shadow-[var(--shadow-copper)]"
                      : "border-border/70 bg-card/70 text-foreground",
                  )}
                >
                  <span className="flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{option.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{option.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="premium-card p-6 md:p-8">
          <div className="flex items-center gap-3 text-primary">
            <Filter className="size-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">Filtro inteligente</p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground">Refine por especificação</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Tensão
              <select
                className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground"
                value={filters.voltage}
                onChange={(event) => setFilters((prev) => ({ ...prev, voltage: event.target.value }))}
              >
                <option value="">Todas</option>
                {filterOptions.voltage.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Aplicação
              <select
                className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground"
                value={filters.application}
                onChange={(event) => setFilters((prev) => ({ ...prev, application: event.target.value }))}
              >
                <option value="">Todas</option>
                {filterOptions.application.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Tipo
              <select
                className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground"
                value={filters.type}
                onChange={(event) => setFilters((prev) => ({ ...prev, type: event.target.value }))}
              >
                <option value="">Todos</option>
                {filterOptions.type.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Bitola
              <select
                className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground"
                value={filters.gauge}
                onChange={(event) => setFilters((prev) => ({ ...prev, gauge: event.target.value }))}
              >
                <option value="">Todas</option>
                {filterOptions.gauge.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 grid gap-2">
            <label className="text-sm font-medium text-foreground" htmlFor="product-search">
              Buscar por aplicação ou benefício
            </label>
            <Input
              id="product-search"
              placeholder="Ex.: painéis, obra predial, projeto solar"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button type="button" variant="outline" onClick={() => { setFilters(defaultFilters); setGuided(null); setSearch(""); }}>
              Limpar filtros
            </Button>
            <Button asChild>
              <Link to="/orcamento">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {filtered.map((product) => (
          <Card key={product.id} className="premium-card rounded-lg border-border/70 bg-card/75 shadow-none">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <ProductImagePlaceholder application={product.application} gauge={product.gauge} />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{product.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.summary}</p>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-medium text-foreground">
                    {product.gauge}
                  </div>
                </div>

                <dl className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Tensão</dt>
                    <dd className="mt-2 text-sm font-medium text-foreground">{product.voltage}</dd>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Aplicação</dt>
                    <dd className="mt-2 text-sm font-medium capitalize text-foreground">{product.application}</dd>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Tipo</dt>
                    <dd className="mt-2 text-sm font-medium text-foreground">{product.type}</dd>
                  </div>
                </dl>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Benefícios principais</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-primary" aria-hidden />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Especificações simplificadas</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-primary" aria-hidden />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-border/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">Precisa confirmar a aplicação? A equipe ajuda na seleção.</p>
                  <Button asChild>
                    <Link to="/orcamento">Solicitar orçamento</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {filtered.length === 0 && (
        <section className="premium-card p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-foreground">Nenhum produto encontrado</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Ajuste os filtros ou fale com nossa equipe para receber uma indicação de produto conforme seu projeto.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <Link to="/orcamento">Pedir ajuda para escolher</Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
