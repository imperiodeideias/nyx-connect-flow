# Jornada cirúrgica, beacons e resultados comprovados

Atualizar a landing com os conteúdos das duas apresentações, priorizando evidências, aplicações reais e tecnologias específicas, sem aumentar excessivamente o tamanho da página.

## Alterações na landing

1. **Jornada do Paciente Cirúrgico**
   - Criar uma seção própria após “O problema”, conectando diretamente o problema das salas ociosas à solução.
   - Representar visualmente o fluxo da página 36: Recepção/Internação → Leito/APC Enfermagem → Espera/Transporte ao Centro Cirúrgico → Sala de Cirurgia → Internação/Alta.
   - Explicar que o beacon é associado na admissão, rastreado automaticamente pelos gateways e desassociado na alta, sem interação humana.
   - Destacar os registros de anestesia e cirurgia e o acompanhamento de tempos de ocupação, ociosidade e atrasos.
   - Usar uma composição responsiva baseada no material oficial, extraindo/otimizando os elementos visuais adequados da apresentação.

2. **Tipos de beacons no Tracker**
   - Inserir abaixo dos exemplos de dispositivos um bloco “Beacons BLE” com os seis tipos da página 8 da apresentação anexa:
     - Dispenser — reposição de insumos;
     - Pulseira — equipes e pacientes/clientes;
     - Neonato — recém-nascidos, sinalizado como “em desenvolvimento”;
     - Porta — acessos e disparo de atividades;
     - Totem/interativos — solicitação de serviços e marcação de tempos;
     - Ativos — equipamentos diversos.
   - Manter o Tracker como seção principal e usar layout compacto, equilibrado e legível no mobile.

3. **Tecnologia e inteligência operacional**
   - Enriquecer o texto do Tracker com as tecnologias oficiais: beacons BLE, gateways conectados por Wi‑Fi/LoRa, cercas eletrônicas e alertas de evasão.
   - Apresentar os sensores de ambiente: temperatura, luminosidade, presença e abertura/fechamento de portas.
   - Incorporar a narrativa “coleta → processamento → evidências e predições” em um bloco visual curto, substituindo textos genéricos existentes.

4. **Resultados e validação**
   - Substituir a seção genérica “Resultados/Benefícios” por evidências concretas da apresentação:
     - +30 hospitais em operação;
     - +10 milhões de higienizações registradas por ano no newcheck;
     - +37 mil jornadas cirúrgicas rastreadas em 3 hospitais.
   - Acrescentar validação científica do estudo peer-reviewed: 320 pacientes, 25 min na recepção, 107 min no pré-operatório, 19 min no transporte e 89,9% das cirurgias de primeiro horário com atraso médio de 39 min.
   - Exibir a referência do artigo e DOI de forma discreta e legível, sem transformar a seção em texto acadêmico extenso.
   - Usar o resultado público do HCB — redução de 50% no tempo de liberação de leitos e cerca de 180 mil folhas eliminadas por ano — no bloco do newcheck, com links para as matérias fornecidas na apresentação.

5. **Chamadas e textos atuais**
   - Substituir as métricas genéricas do hero (“100% rastreabilidade”, “24/7”) por uma chamada oficial e verificável, mantendo o hero enxuto.
   - Atualizar o CTA final para “Mapeie uma vez. Rastreie tudo. Transforme a gestão.” e “Agende uma demonstração”.
   - Remover repetições entre “Aplicações”, “Hospital Inteligente” e a nova seção de jornada; manter os cards apenas como visão geral e aprofundar o conteúdo nos blocos específicos.
   - Preservar a marca textual em minúsculas (“nyx”) e a identidade atual em cinza, branco e amarelo.

## Navegação e responsividade

- Adicionar âncora “Jornada Cirúrgica” na navegação, reorganizando os links para evitar excesso no desktop e no menu móvel.
- Garantir timelines, métricas, cards de beacon e referências legíveis em telas pequenas, sem sobreposição ou rolagem horizontal.

## Conteúdo e ativos

- Utilizar somente textos, números, fontes e imagens presentes nas apresentações oficiais.
- Extrair e otimizar apenas os recursos visuais necessários, evitando inserir screenshots completos de slides quando uma composição nativa da página oferecer melhor legibilidade.
- Manter alt text, dimensões estáveis e lazy loading nas novas imagens.

## Validação

- Conferir desktop e mobile no preview, incluindo a nova timeline, os seis tipos de beacon, métricas e CTAs.
- Verificar links externos, âncoras, ausência de conteúdo duplicado e consistência da marca “nyx”.
- Confirmar build sem erros e ausência de regressões nas rotas existentes.
