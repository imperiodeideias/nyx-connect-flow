# Visitas totais x únicas + período personalizado no painel

## Por que hoje os números são iguais
O site só registra **um acesso por aba aberta**, e o identificador do visitante muda a cada nova aba. Resultado: cada acesso vira uma "sessão única" (hoje: 120 acessos = 120 sessões).

## O que vai mudar

**1. Contagem correta**
- Cada visitante recebe um identificador que fica salvo no navegador dele (persiste entre abas e dias).
- Toda abertura/recarga da página passa a ser registrada como acesso.
- Painel mostra 4 indicadores separados:
  - **Acessos totais** — todas as visualizações
  - **Visitantes únicos** — pessoas (navegadores) diferentes
  - **Leads**
  - **Conversão** — leads ÷ visitantes únicos
- Dados antigos continuam contando (cada registro antigo vira um visitante).

**2. Período personalizado**
- Mantém atalhos 7 / 30 / 90 dias, mais **Hoje** e **Personalizado**.
- "Personalizado" abre dois calendários: **De** e **Até**.
- Indicadores, listas por origem/dispositivo e tabela de leads respeitam o período.
- A busca passa a ser feita no servidor pelo período escolhido (sem limite de 5.000 registros).

## Detalhes técnicos
- Migração: coluna `visitor_id text` em `landing_page_visits` (+ índice em `created_at`, `visitor_id`).
- `tracking.ts`: `visitor_id` em localStorage; remover o bloqueio `isFirstViewOfSession` no registro da visita (manter limite de taxa por IP).
- `leads.functions.ts`: aceitar e gravar `visitor_id`.
- `admin.functions.ts`: `getAdminOverview` recebe `{ from, to }` (ISO), filtra visitas/leads no banco; retorna totais calculados (`total`, `unicos` = distinct `coalesce(visitor_id, session_id)`).
- `admin.tsx`: seletor de período com shadcn Calendar/Popover (pointer-events-auto), queryKey inclui o período.
