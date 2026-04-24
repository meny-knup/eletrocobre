import type { ReactNode } from "react";
import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/site-layout";
import { SITE_URL } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="site-section flex min-h-[70vh] items-center justify-center px-4">
      <div className="premium-card max-w-xl p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Página não encontrada</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-foreground">404</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          O conteúdo que você procura não está disponível no momento. Volte para a página inicial e continue sua cotação.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ir para a home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eletrocobre | Cabos e Fios de Qualidade" },
      {
        name: "description",
        content:
          "Cabos e fios elétricos para construção, indústria, energia solar e revenda com atendimento consultivo e orçamento sob medida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Eletrocobre | Cabos e Fios de Qualidade" },
      { name: "twitter:title", content: "Eletrocobre | Cabos e Fios de Qualidade" },
      { name: "description", content: "A Eletrocobre conecta obras, indústrias, projetos solares e revendas a soluções em cabos e fios com suporte consultivo, agilidade comercial e orçamento sob medi" },
      { property: "og:description", content: "A Eletrocobre conecta obras, indústrias, projetos solares e revendas a soluções em cabos e fios com suporte consultivo, agilidade comercial e orçamento sob medi" },
      { name: "twitter:description", content: "A Eletrocobre conecta obras, indústrias, projetos solares e revendas a soluções em cabos e fios com suporte consultivo, agilidade comercial e orçamento sob medi" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/vBc8ZhRYb4TCBmR2CU3qd7b1JVb2/social-images/social-1777055869892-Eletrocobre_Logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/vBc8ZhRYb4TCBmR2CU3qd7b1JVb2/social-images/social-1777055869892-Eletrocobre_Logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <SiteLayout />;
}
