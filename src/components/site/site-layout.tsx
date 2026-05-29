import { useState } from "react";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";
import simbolo from "@/assets/eletrocobre-simbolo.png";
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
            <img
              src={simbolo}
              alt="Eletrocobre"
              width={40}
              height={40}
              className="size-10 rounded-md object-contain shadow-[var(--shadow-copper)]"
            />
            <div>
              <p className="font-display text-xl font-semibold leading-none">Eletrocobre</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Distribuidora de cabos · Guarulhos, SP</p>
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
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={simbolo}
                alt="Eletrocobre"
                width={40}
                height={40}
                loading="lazy"
                className="size-10 object-contain"
              />
              <div>
                <p className="font-display text-xl font-semibold">Eletrocobre</p>
                <p className="text-sm text-muted-foreground">Cabos, fios e atendimento consultivo para todo o Brasil.</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Distribuidora de cabos elétricos para construção civil, indústria, energia solar, máquinas e revenda, com foco em agilidade comercial e suporte técnico.
            </p>
            <div className="border-t border-border/50 pt-4 space-y-0.5">
              <p className="text-xs font-medium text-foreground/60 tracking-[0.06em]">
                Fornecedor e Revenda de Materiais Elétricos Ltda
              </p>
              <p className="text-xs text-muted-foreground/70">CNPJ 65.824.251/0001-36</p>
            </div>
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

          <div className="space-y-5">
            <div>
              <h2 className="font-display text-lg font-semibold">Localização</h2>
              <address className="mt-3 not-italic">
                <p className="flex items-start gap-2 text-sm text-muted-foreground leading-6">
                  <MapPin className="size-3.5 mt-0.5 shrink-0 text-primary/70" />
                  <span>
                    R. Barão de Penedo, 319 — Cumbica<br />
                    Guarulhos, SP · CEP 07222-015
                  </span>
                </p>
              </address>
            </div>
            <div className="border-t border-border/50 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">Contato</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Orçamentos sob medida via WhatsApp</li>
                <li>
                  <a
                    href={whatsappLink}
                    rel="noreferrer"
                    target="_blank"
                    className="font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    +55 11 91494-5464
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Mail className="size-3.5 shrink-0 text-primary/60" />
                  <a
                    href="mailto:contato.eletrocobre@gmail.com"
                    className="transition-colors hover:text-foreground"
                  >
                    contato.eletrocobre@gmail.com
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <Button asChild>
                  <a href={whatsappLink} rel="noreferrer" target="_blank">
                    <MessageCircle className="size-4" />
                    Falar agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="site-container flex flex-col gap-1 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Eletrocobre · Todos os direitos reservados.</p>
            <p className="text-muted-foreground/60">CNPJ 65.824.251/0001-36 · Guarulhos, SP</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        rel="noreferrer"
        target="_blank"
        aria-label="Solicitar cotação pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-copper)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_80px_-24px_oklch(0.7_0.17_45_/_70%)]"
      >
        <MessageCircle className="size-4 shrink-0" />
        <span className="hidden sm:inline">Cotar pelo WhatsApp</span>
        <span className="sm:hidden">Cotar agora</span>
      </a>
    </div>
  );
}
