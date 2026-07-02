# EletroCobre — Estado do Projeto

> Última atualização: 2026-07-01
> Commit atual: `458c8b2`
> Branch: `main`
> Repositório: https://github.com/meny-knup/eletrocobre
> Produção: https://eletrocobre.com.br

---

## Sessão 2026-07-01 — Google Ads (rastreamento + campanha)

### Rastreamento de conversão instalado
- **Tag do Google (gtag.js)** instalada no `__root.tsx` → carrega em todas as páginas.
  - ID: `AW-18197000501` (Google Ads).
  - Conversão "Clique no Botão do WhatsApp": `send_to = AW-18197000501/-BKdCJidkskcELXigOVD`.
- `src/lib/analytics.ts` (novo): função de conversão + **listener central** que captura clique em
  qualquer link `wa.me` / `whatsapp.com` (header, footer, botão flutuante, CTA, cards, orçamento),
  inclusive botões futuros. Ativado via `useEffect` no `SiteLayout`.
- Commit `0fb309a`. Validado: `tsc` limpo + build OK + tag presente no HTML gerado.

### Política de Privacidade (requisito Google Ads + LGPD)
- Nova rota `/privacidade` (`src/routes/privacidade.tsx`) com dados reais (CNPJ, endereço, contato),
  cobrindo cookies, Google Ads/gtag, WhatsApp e direitos LGPD. Link no rodapé.
- Commit `458c8b2`. `tsc` limpo + build OK. **Resolveu o bloqueador nº1 do Google Ads.**

### Playbook oficial de tráfego pago (fora do repo git)
- `C:\Projects\NoiseLabs\docs\playbooks\GOOGLE-ADS-ELETROCOBRE-SEMANA1.md` + `.pdf` (v1.1, identidade Noise Labs).
- Contém: contexto, decisões aprovadas, cronograma 7 dias, checklist, 10 keywords oficiais,
  negativas (5 blocos), dashboard, critérios de sucesso, lições aprendidas e **anúncios RSA completos**
  (15 títulos + 4 descrições + config de pinagem + sitelinks + callouts + snippets).

### Estratégia de campanha (semana 1 — aquecimento)
- R$110 / 7 dias (~R$16/dia) · Rede de Pesquisa · Display OFF · Parceiros OFF.
- Lance: **Maximizar Cliques** com teto de CPC R$3–4 (conta sem histórico → NÃO usar Max. Conversões ainda).
- **1 campanha · 1 grupo** · destino `/produtos` · geo recomendado: SP + Sudeste (concentrar aprendizado).
- Meta: validar encanamento + colher termos vencedores. NÃO medir ROI/CAC/escala nesta semana.

### Pendências Google Ads — próximas ações (do lado da CONTA, não do código)
- [ ] **Verificação de identidade do anunciante** (pode demorar dias — iniciar já).
- [ ] **Faturamento** ativo (BRL).
- [ ] **Validar a conversão disparando** no Tag Assistant e marcar como **Principal**.
      🚩 Não veicular antes de ver o evento `conversion` disparar.
- [ ] Montar campanha com keywords + negativas + RSA do playbook.
- [ ] (Opcional) Instalar **GA4** em paralelo (só análise/remarketing — NÃO importar como 2ª conversão).
- [ ] Registrar em planilha quantos cliques viram **conversa real** no WhatsApp (fechar o loop).

---

## O que foi feito na sessão 2026-05-29

### Imagens e catálogo
- 46 imagens de produtos baixadas e hospedadas localmente em `public/products/`
- Dependência do domínio externo `megacobre.com.br` eliminada completamente
- 5 produtos sem imagem disponível recebem fallback elegante ("Imagem em breve")
- 7 novos produtos adicionados: 2 solares (Cabomaq) + 5 cabos de controle (Cabomaq)
- 36 produtos da marca SIL inseridos (Leroy Merlin) com imagens locais
- Catálogo vai de 40 → 83 produtos em 7 categorias

### Filtros do catálogo
- Filtros facetados implementados: Categoria / Tensão / Bitola
- Sidebar fixa no desktop (260px) com contagens contextuais
- Mobile: painel colapsável com pills em scroll horizontal
- Marca removida dos filtros (redundante no B2B)
- 20 produtos por padrão + "Ver todos os X produtos"
- Metadados adicionados a todos os 83 produtos: `brand`, `voltage`, `gauge`

### Home page — Skills aplicadas
Skills aplicadas: LOCAL_BUSINESS_CONVERSION + PREMIUM_PERCEPTION + ANTI_GENERICITY

**Novas seções adicionadas:**
- "Como funciona" (3 passos: Encontre → Solicite → Receba)
- FAQ accordion (5 perguntas com respostas específicas)
- WhatsApp number visível no hero: +55 11 91494-5464
- "Base em Guarulhos, SP" como sinal de logística real

**Trust pillars reescritos (anti-genericidade):**
- "Diversas marcas reconhecidas" — com pills Cobrecom · SIL · Cabomaq no card
- "Guarulhos, SP — entrega nacional"
- "Atendimento antes da cotação"

**Copy corrigida (9 frases genéricas substituídas):**
- Logo tagline: "Cabos e fios para todo o Brasil" → "Distribuidora de cabos · Guarulhos, SP"
- Hero eyebrow: "Atendimento para todo o Brasil" → "Distribuidora B2B · Base em Guarulhos, SP"
- Trust pillars de genéricos para específicos
- Categoria "Energia solar" sem adjetivos vazios
- Bullets do CTA final com dados concretos

**Estrutura da home (ordem atual):**
1. Hero
2. Trust pillars (com pills de marcas no card 1)
3. Como funciona
4. Featured carousel (lazy loaded)
5. Categorias
6. Diferenciais
7. Segmentos (simplificados)
8. Depoimentos
9. FAQ
10. CTA final

### Performance
- Google Fonts `@import` substituído por `@fontsource` (self-hosted)
  → Elimina render-blocking CDN request de ~810ms
- `backdrop-filter: blur(8px)` removido do `.premium-card`
  → Elimina compositing layer desnecessário em cada card
- `box-shadow` removido da transição do `.lift-card`
  → Elimina paint caro no hover
- `FeaturedCarousel` lazy loaded (Embla ~30KB fora do bundle inicial)
- `ProductCatalogMega` lazy loaded (83 cards só carregam em `/produtos`)

### Técnico
- Roteamento SPA ativado (`vite.config.ts`): Cloudflare Workers mode desabilitado
  → Todas as páginas agora funcionam com navegação direta por URL
- ProductCard: bug de overflow corrigido (texto/ícone saindo do botão no mobile)
- Botão "Solicitar cotação" com ícone WhatsApp SVG oficial
- Botões com `whitespace-normal h-auto` para mobile 2-column grid

---

## Estado atual do site

### Páginas funcionando
- `/` Home — completa
- `/produtos` — catálogo com filtros
- `/segmentos` — index + 4 sub-páginas
- `/como-escolher` — página educacional (rasa — ver pendências)
- `/orcamento` — página de cotação
- `/sobre` — sobre a empresa

### Dados reais confirmados
- WhatsApp: +55 11 91494-5464
- Email: contato.eletrocobre@gmail.com
- Endereço: R. Barão de Penedo, 319 — Cumbica, Guarulhos, SP · CEP 07222-015
- CNPJ: 65.824.251/0001-36
- Depoimentos (3): confirmados como reais pelo cliente

### Infraestrutura
- GitHub: https://github.com/meny-knup/eletrocobre
- Vercel: auto-deploy a cada push em `main`
- Repositório local: `C:\Projects\NoiseLabs\repositories\eletrocobre\`

---

## Pendências — próximo passo ao retomar

### Alta prioridade
- [ ] **`/como-escolher` expandir** — página muito rasa, só 3 topics. Potencial SEO alto para buscas técnicas
- [ ] **Depoimentos visuais** — adicionar foto ou logo do cliente nos 3 cards (confirmar com cliente)
- [ ] **5 produtos sem imagem** (9446, 9408, 11924, 11875, 11872) — buscar imagens corretas com fornecedor

### Média prioridade
- [ ] **Mais produtos** — cliente sinalizou interesse em ampliar catálogo (solar, ATOX, etc.)
- [ ] **Meta title da home** — atual é bom, mas pode ser mais SEO-local específico
- [ ] **OG image personalizada** — `og-image.jpg` genérica, ideal seria uma específica
- [ ] **Prazo de resposta** — confirmar SLA real ("respondemos em X horas") para adicionar no hero/FAQ

### Baixa prioridade
- [ ] **Schema.org Product** nas páginas de produto (SEO rich results)
- [ ] **Filtro de busca por bitola nas páginas de segmento** — cross-link com catálogo
- [ ] **Página de produto individual** — atualmente não existe, cotação vai direto ao WhatsApp
- [ ] **Google Analytics / Tag** — não configurado

### Itens discutidos mas não executados
- Filtro por tensão/bitola nas páginas de segmento
- Seleção guiada de produto (wizard) no catálogo
- FAQ nas páginas de segmento

---

## Como retomar

```
# 1. Ativar servidor local
cd C:\Projects\NoiseLabs\repositories\eletrocobre
npm run dev

# 2. Ver em
http://localhost:8080

# 3. Commit e push após mudanças
git add .
git commit -m "descrição"
git push origin main
```

Após o push, Vercel faz deploy automaticamente em `eletrocobre.com.br`.

---

## Stack técnica
- React 18 + TypeScript + Vite 7
- TailwindCSS 4 + shadcn/ui
- TanStack Router (file-based) + TanStack Start (SPA mode)
- Self-hosted fonts: @fontsource/inter + @fontsource/manrope
- Deploy: Vercel (auto via GitHub)
