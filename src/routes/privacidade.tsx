import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, WHATSAPP_DISPLAY } from "@/lib/site-data";

const LAST_UPDATED = "1º de julho de 2026";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Eletrocobre" },
      {
        name: "description",
        content:
          "Como a Eletrocobre coleta, usa e protege seus dados, em conformidade com a LGPD. Saiba seus direitos e como exercê-los.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade` }],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="site-section">
      <div className="site-container max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Privacidade</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10">
          <Section title="1. Quem somos">
            <p>
              Esta política descreve como a <strong>Fornecedor e Revenda de Materiais Elétricos Ltda</strong>{" "}
              (Eletrocobre), inscrita no CNPJ 65.824.251/0001-36, com sede na R. Barão de Penedo, 319 — Cumbica,
              Guarulhos/SP, CEP 07222-015, trata os dados pessoais dos visitantes deste site, em conformidade com a
              Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
            </p>
          </Section>

          <Section title="2. Quais dados coletamos">
            <p>Coletamos apenas os dados necessários para atender você e melhorar nosso atendimento comercial:</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>
                <strong>Dados de navegação:</strong> informações técnicas geradas automaticamente durante a visita
                (páginas acessadas, tipo de dispositivo, origem do acesso e interações com botões), por meio de
                cookies e tecnologias semelhantes.
              </li>
              <li>
                <strong>Dados de contato fornecidos por você:</strong> ao clicar em nossos botões de WhatsApp e
                iniciar uma conversa, você compartilha seu número e as informações que decidir enviar (produto,
                bitola, volume, cidade de entrega).
              </li>
            </ul>
            <p>Não coletamos dados sensíveis e não solicitamos informações além do necessário para a cotação.</p>
          </Section>

          <Section title="3. Como usamos seus dados">
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Responder solicitações de orçamento e prestar atendimento consultivo.</li>
              <li>Enviar cotações, prazos e orientação técnica sobre os produtos.</li>
              <li>
                Medir a eficácia dos nossos anúncios e a experiência no site, entendendo quais conteúdos levam ao
                contato.
              </li>
            </ul>
          </Section>

          <Section title="4. Cookies e ferramentas de terceiros">
            <p>Utilizamos ferramentas de terceiros que podem coletar dados de navegação:</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>
                <strong>Google Ads / Tag do Google (gtag.js):</strong> usamos a tag do Google para medir conversões,
                como cliques nos botões de WhatsApp, e avaliar o desempenho das nossas campanhas de anúncios. Consulte
                a{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Política de Privacidade do Google
                </a>
                .
              </li>
              <li>
                <strong>WhatsApp (Meta):</strong> ao iniciar uma conversa, o tratamento passa também a ser regido pela{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Política de Privacidade do WhatsApp
                </a>
                .
              </li>
            </ul>
            <p>
              Você pode desativar cookies nas configurações do seu navegador. Isso não impede o uso do site, mas pode
              limitar algumas medições.
            </p>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>
              Não vendemos seus dados. O compartilhamento ocorre apenas com os provedores de tecnologia citados acima
              (Google e Meta/WhatsApp), estritamente para as finalidades descritas, e quando exigido por obrigação
              legal ou regulatória.
            </p>
          </Section>

          <Section title="6. Por quanto tempo mantemos os dados">
            <p>
              Mantemos os dados pelo tempo necessário para o atendimento comercial e para cumprir obrigações legais.
              Dados de navegação seguem os prazos das ferramentas de análise utilizadas. Você pode solicitar a
              exclusão a qualquer momento.
            </p>
          </Section>

          <Section title="7. Seus direitos (LGPD)">
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
              <li>Correção de dados incompletos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogação do consentimento e informação sobre com quem os dados foram compartilhados.</li>
            </ul>
          </Section>

          <Section title="8. Como falar conosco sobre privacidade">
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail{" "}
              <a
                href="mailto:contato.eletrocobre@gmail.com"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                contato.eletrocobre@gmail.com
              </a>{" "}
              ou pelo WhatsApp {WHATSAPP_DISPLAY}. Responderemos no menor prazo possível.
            </p>
          </Section>

          <Section title="9. Alterações nesta política">
            <p>
              Podemos atualizar esta política periodicamente. A data da última revisão é sempre indicada no topo desta
              página.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
