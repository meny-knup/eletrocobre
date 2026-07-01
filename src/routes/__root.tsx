import type { ReactNode } from "react";
import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import simbolo from "@/assets/eletrocobre-simbolo.png";
import { SiteLayout } from "@/components/site/site-layout";
import { GOOGLE_ADS_ID } from "@/lib/analytics";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site-data";

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Eletrocobre",
      legalName: "Fornecedor e Revenda de Materiais Elétricos Ltda",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/eletrocobre-simbolo.png`,
      description:
        "Distribuidora de cabos e fios elétricos para construção civil, indústria, energia solar e revendas. Orçamento sob medida e atendimento consultivo para todo o Brasil.",
      telephone: "+55-11-91494-5464",
      email: "contato.eletrocobre@gmail.com",
      taxID: "65.824.251/0001-36",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Barão de Penedo, 319",
        addressLocality: "Guarulhos",
        addressRegion: "SP",
        postalCode: "07222-015",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+55-11-91494-5464",
        email: "contato.eletrocobre@gmail.com",
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
      areaServed: "BR",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Eletrocobre",
      legalName: "Fornecedor e Revenda de Materiais Elétricos Ltda",
      description:
        "Distribuidora de cabos e fios elétricos em Guarulhos, SP. Atende construção civil, indústria, energia solar e revendas com orçamento rápido via WhatsApp.",
      url: SITE_URL,
      telephone: "+55-11-91494-5464",
      email: "contato.eletrocobre@gmail.com",
      taxID: "65.824.251/0001-36",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Barão de Penedo, 319",
        addressLocality: "Guarulhos",
        addressRegion: "SP",
        postalCode: "07222-015",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Guarulhos" },
        { "@type": "State", name: "São Paulo" },
        { "@type": "Country", name: "Brazil" },
      ],
    },
  ],
});

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
      { title: "Eletrocobre | Distribuidora de Cabos e Fios Elétricos" },
      {
        name: "description",
        content:
          "Distribuidora de cabos e fios elétricos para construção civil, indústria, energia solar e revendas. Orçamento sob medida e atendimento consultivo para todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Eletrocobre" },
      { property: "og:title", content: "Eletrocobre | Distribuidora de Cabos e Fios Elétricos" },
      {
        property: "og:description",
        content:
          "Cabos e fios para obras, indústria, solar e revenda com atendimento consultivo, entrega rápida e orçamento sob medida para todo o Brasil.",
      },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eletrocobre | Distribuidora de Cabos e Fios Elétricos" },
      {
        name: "twitter:description",
        content:
          "Cabos e fios para obras, indústria, solar e revenda com orçamento sob medida e atendimento rápido para todo o Brasil.",
      },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/png", href: simbolo },
      { rel: "apple-touch-icon", href: simbolo },
    ],
    scripts: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`,
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GOOGLE_ADS_ID}');`,
      },
      {
        type: "application/ld+json",
        children: structuredData,
      },
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
