// Google Ads — rastreamento da conversão "Clique no Botão do WhatsApp".
// Valores extraídos da ação de conversão no Google Ads (Metas → Conversões → Resumo).
//   ID de conversão ....... 18197000501
//   Rótulo de conversão ... -BKdCJidkskcELXigOVD
export const GOOGLE_ADS_ID = "AW-18197000501";

// send_to = "AW-<ID de conversão>/<Rótulo de conversão>"
export const WHATSAPP_CONVERSION_SEND_TO = "AW-18197000501/-BKdCJidkskcELXigOVD";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Dispara a conversão do Google Ads quando o usuário aciona um botão de WhatsApp. */
export function trackWhatsappConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: WHATSAPP_CONVERSION_SEND_TO });
}

/**
 * Escuta cliques em qualquer link de WhatsApp da página (wa.me / api.whatsapp.com)
 * e registra a conversão — cobre header, footer, botão flutuante, CTAs e cards,
 * inclusive botões adicionados no futuro. Retorna uma função de limpeza.
 */
export function initWhatsappConversionTracking() {
  if (typeof document === "undefined") return () => {};
  const handler = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href*="wa.me"], a[href*="whatsapp.com"]');
    if (link) trackWhatsappConversion();
  };
  // Fase de captura para garantir o disparo antes da navegação do link.
  document.addEventListener("click", handler, true);
  return () => document.removeEventListener("click", handler, true);
}
