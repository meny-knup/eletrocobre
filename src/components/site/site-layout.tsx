import { useState } from "react";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, WHATSAPP_NUMBER } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="site-container flex h-18 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-chart-1 font-display text-lg font-bold text-primary-foreground shadow-[var(--shadow-copper)]">
              E
            </span>
            <div>
              <p className="font-display text-xl font-semibold leading-none">Eletrocobre</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Cabos e fios para todo o Brasil</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" asChild>
              <a href={whatsappLink} rel="noreferrer" target="_blank">
                WhatsApp
              </a>
            </Button>
            <Button asChild>
              <Link to="/orcamento">Solicitar orçamento</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border/70 bg-card/80 text-foreground lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Abrir menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div className={cn("border-t border-border/60 bg-background/95 lg:hidden", open ? "block" : "hidden")}>
          <div className="site-container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                  location.pathname === item.to && "bg-accent text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-2">
              <Button variant="outline" asChild>
                <a href={whatsappLink} rel="noreferrer" target="_blank">
                  WhatsApp
                </a>
              </Button>
              <Button asChild>
                <Link to="/orcamento" onClick={() => setOpen(false)}>
                  Solicitar orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border/70 bg-card/50">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-chart-1 font-display text-lg font-bold text-primary-foreground shadow-[var(--shadow-copper)]">
                E
              </span>
              <div>
                <p className="font-display text-xl font-semibold">Eletrocobre</p>
                <p className="text-sm text-muted-foreground">Cabos, fios e atendimento consultivo para todo o Brasil.</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Soluções em cabos elétricos para construção civil, indústria, energia solar, máquinas e revenda, com foco em agilidade comercial e suporte técnico.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Navegação</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Contato rápido</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Atendimento comercial para todo o Brasil</li>
              <li>Orçamentos sob medida</li>
              <li>Resposta rápida via WhatsApp</li>
            </ul>
            <div className="mt-5">
              <Button asChild>
                <a href={whatsappLink} rel="noreferrer" target="_blank">
                  Falar agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        rel="noreferrer"
        target="_blank"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-copper)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
