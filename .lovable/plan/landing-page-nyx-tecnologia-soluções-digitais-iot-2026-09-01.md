# Landing Page NYX Tecnologia — Soluções Digitais + IoT

Landing page comercial mobile-first, enxuta e orientada à conversão, com painel administrativo de leads e tracking de acessos.

## Identidade visual

- Paleta: branco, azul-marinho NYX (fundos escuros pontuais), amarelo/dourado NYX nos destaques, cinza NYX (#585858 do logo).
- Tipografia forte e moderna, carregada por `<link>` no root. Títulos 42–56px no mobile, 64–86px no desktop; corpo mínimo 17–18px no mobile.
- Layout editorial (nada de grid de cards SaaS idênticos), cantos discretos, animações leves: fade no scroll, pulso suave nos indicadores IoT, linhas de conexão discretas.

## Conteúdo e imagens (somente material oficial)

- Logos NYX enviados; renders do tracker (`Imagem3.png`, `bc_2026.png`, `bcgt.png`).
- Imagens de hospital inteligente e dashboards extraídas do folder PDF e da apresentação.
- Faixa de clientes/parceiros: logos extraídos do slide 43 da apresentação (18 logos), em escala de cinza discreta.
- Contato oficial do folder: contato@nyx.tec.br, +55 11 96327-9794, nyxtecnologia.com.br.
- Todos os textos vêm do PRD/folder — nenhum número, case ou funcionalidade inventada.

## Estrutura da página (rota `/`)

1. Header sticky simples: logo + CTA "Falar com a NYX" (âncoras: tracker, soluções, NYX, contato).
2. Hero de alto impacto: "SUA OPERAÇÃO ACONTECE EM **TEMPO REAL**." / "SUA GESTÃO TAMBÉM DEVERIA.", subtítulo, CTAs "Quero conhecer" e "Falar com a NYX".
3. Formulário de captura logo após o hero.
4. O problema — operação → dados → decisão.
5. Tracker (segunda maior ênfase) com sequência SENSORIZAR / LOCALIZAR / RASTREAR / CONECTAR / OTIMIZAR.
6. Como funciona — 3 passos.
7. Aplicações do tracker — 4 blocos.
8. Destaque Gestão de Ativos + CTA "Quero conhecer o tracker".
9. Hospital inteligente.
10. Duas soluções, um ecossistema (tracker com maior destaque) + bloco newcheck.
11. Benefícios — 5 itens, layout editorial.
12. Sobre a NYX (curto) + faixa de logos de clientes.
13. CTA final em azul-marinho + formulário inline.
14. Footer enxuto com contatos, Política de Privacidade e LinkedIn.

Página adicional: `/politica-de-privacidade`.

## Formulário

Nome*, Empresa/Hospital*, Cargo, E-mail corporativo*, WhatsApp* (com máscara), Interesse (select), checkbox LGPD. Inputs grandes, labels visíveis, teclado correto por tipo, botão full width no mobile. Após envio: estado de agradecimento inline, sem redirecionar.

## Backend (Lovable Cloud)

- Tabelas: `leads`, `landing_page_visits`, `lead_notes`, `admin_profiles` + tabela de papéis (`user_roles` com função `has_role`), todas com RLS e grants adequados. Leitura restrita a administradores; inserção de lead e de visita via server functions.
- Captura de UTMs (source, medium, campaign, content, term) + gclid/fbclid em sessionStorage, associados ao lead na conversão.
- Tracking de acesso: session_id por sessão (não por refresh), separando page_views de unique_sessions; sem dados pessoais.
- Validação server-side com zod, honeypot anti-spam e rate limiting por IP na criação de lead.
- Estrutura preparada (sem IDs fictícios) para GA4/GTM/Meta Pixel/LinkedIn via variáveis de ambiente.

## Admin

- `/auth` (e-mail + senha) e área protegida `/admin`. Acesso admin concedido a lucas.sichetti@nyx.tec.br (usuário criado via cadastro; o papel admin é atribuído a esse e-mail).
- Dashboard: acessos (hoje / 7 dias / 30 dias / total), leads (hoje / 7 dias / mês / total), conversão (leads ÷ sessões únicas), origem (direto, QR Code, Google, Instagram, LinkedIn, e-mail, campanhas, outros).
- Lista de leads: tabela com busca, filtros, alteração de status (Novo, Contato iniciado, Reunião agendada, Qualificado, Oportunidade, Sem interesse), observações, detalhe do lead e exportação CSV/Excel.

## Detalhes técnicos

- TanStack Start; seções em componentes sob `src/components/landing/`; tokens de cor em `src/styles.css` (oklch).
- Imagens extraídas do PDF/PPTX convertidas para WebP e servidas via Lovable Assets, com lazy loading (exceto hero) e dimensões definidas.
- Server functions para `submit-lead` e `track-visit`; leitura do admin protegida por middleware de autenticação.
- SEO: head próprio em `/` e na política de privacidade; favicon a partir do logo NYX.
