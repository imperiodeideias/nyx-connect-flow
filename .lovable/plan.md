# Novos blocos: newcheck ampliado, Gestão de Ativos, Intercorrências, Hospitalidade e depoimentos

Ampliar a landing com cinco frentes de conteúdo, todas usando apenas textos e imagens das apresentações oficiais.

## 1. newcheck ampliado (slides 10 a 14)

Expandir a seção newcheck existente com:
- Chamada "Simplifique. Automatize. Controle." e descrição oficial de checklists digitais com registros, evidências fotográficas, geolocalização e notas.
- Fluxo em quatro etapas: Planejamento → Registros → Verificação → Acompanhamento.
- Quatro pilares: Registro digital (áudio, foto, vídeo, assinatura), Fluxo de atividades e cronogramas, Integrações, Formulários customizados.
- Bloco de painéis gerenciais e relatórios dinâmicos.
- Grade compacta de recursos (slide 14): geolocalização, checklists personalizados, gestão de não conformidades, notificações inteligentes, dashboards e KPIs, controle de tempo e presença, relatórios automáticos, registro de evidências, integração via API, app mobile com modo offline.
- Manter o caso HCB já presente e a marca em minúsculas ("newcheck").

## 2. Bloco Gestão de Ativos (slides 28 e 29 + gif do slide 4 da nova apresentação)

Nova seção dedicada, após o tracker:
- Título "Gestão de Ativos" com a chamada "Cada registro conta. Cada jornada importa."
- Explicação RTLS com gateways IoT e beacons BLE para rastreio em tempo real de cadeiras de rodas, macas, bombas de infusão e carrinhos de parada; foco em reduzir perdas, melhorar utilização e evitar buscas manuais.
- Dois destaques do slide 29: violação do beacon (alerta ao retirar o beacon do ativo, com último local registrado) e evasão de ativos (cercas eletrônicas nos pontos de passagem, alerta "Ativo saindo pela entrada XYZ").
- Usar o gif de cercas eletrônicas do slide 4 da nova apresentação como elemento visual do bloco, extraído e otimizado, com dimensões fixas e carregamento preguiçoso.

## 3. Bloco Intercorrências Clínicas (slides 38 a 40)

Nova seção com:
- Descrição: abrir e acompanhar o fluxo de chamados de emergência, admissões, farmácia, fisioterapia e outros, reduzindo atrasos e melhorando a comunicação entre equipes.
- Lista dos tipos de chamado: Códigos de Emergência (Pânico, Azul, Amarelo, Conforto), Admissão de Pacientes, Recoleta de Exames, Farmácia, Fisioterapia, entre outros.
- Dois reforços: notificações automáticas e painéis/relatórios completos, com as telas dos slides 39 e 40 quando a extração gerar imagens legíveis.

## 4. Bloco Hospitalidade (slide 12 da nova apresentação)

Bloco curto e visual:
- Título "Hospitalidade" com subtítulo "Solicitações, avaliações e muito +".
- Quatro pontos: app com logo e cores da instituição, itens de solicitação, pesquisas de satisfação, informações e dicas sobre a instituição.
- Mockups do app do slide 12, extraídos e otimizados, em composição responsiva.

## 5. Depoimentos de clientes (slide 44)

Nova seção "Quem já se beneficia", logo antes ou depois da faixa de clientes:
- Cinco depoimentos completos com autor e cargo: Ana Paula F. Dellanegra (Gerente de Hotelaria Corporativa), Fernando Almeida (Prevent Senior), Ana Augusta Blumer Salotti (Hotelaria Hospitalar Comunicação e Treinamentos), Alexsandra M. G. Ribeiro (Prevent Senior), Carlos Fernando Vilanova (Dinâmica Facility).
- Layout em cards editoriais, com rolagem/empilhamento adequado no mobile e citações mantidas na íntegra.

## Navegação e consistência

- Incluir âncoras das novas seções no header e no menu mobile, reorganizando os links para não sobrecarregar o desktop.
- Manter identidade em cinza, branco e amarelo, marca "nyx"/"tracker"/"newcheck" em minúsculas.
- Evitar duplicidade com "Aplicações" e "Hospital Inteligente": ajustar esses cards para visão geral, com o detalhe nos novos blocos.

## Detalhes técnicos

- Novas seções como componentes em `src/components/landing/Sections.tsx`, adicionadas à ordem em `src/routes/index.tsx`.
- Imagens/gif extraídos das apresentações, otimizados (WebP para estáticas, gif mantido ou convertido para vídeo leve se o peso for alto) e publicados via Lovable Assets, mapeados em `src/lib/assets.ts`.
- Reuso do componente `Reveal` para animação de entrada e dos padrões visuais atuais (borda dourada, `bg-mist`).
- Verificar build e conferir desktop e mobile no preview após a implementação.
