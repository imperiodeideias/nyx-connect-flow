# Imagens reais nos cards de Beacons BLE

## Objetivo
Substituir os ícones dos seis tipos de beacon pelas imagens correspondentes extraídas da página 8 da nova apresentação, mantendo os títulos, descrições e identidade visual atuais.

## Alterações
- Extrair e preparar os renders de **Dispenser**, **Pulseira**, **Neonato**, **Porta**, **Totem / Interativos** e **Ativos**.
- Compor, quando necessário, o beacon com seu contexto de uso mostrado no slide (por exemplo: dispenser, pulso, bebê, porta e equipamentos), sem reutilizar o slide inteiro como imagem.
- Otimizar e publicar cada imagem como asset próprio do projeto.
- Atualizar os dados dos beacons para apontar para as novas imagens e remover os ícones Lucide usados nesses seis cards.
- Redesenhar a área visual dos cards para dar dimensões consistentes às imagens, sem cortes ou distorções, mantendo o selo “Em desenvolvimento” no Beacon de Neonato.
- Preservar o bloco separado de sensores de ambiente e todo o restante da seção Tracker.

## Validação
- Conferir os seis cards em desktop e celular.
- Verificar legibilidade, enquadramento, carregamento das imagens e ausência de erros no build e no navegador.

## Detalhes técnicos
- Arquivos principais: `src/components/landing/Sections.tsx`, `src/lib/assets.ts` e novos ponteiros de assets em `src/assets/`.
- As imagens serão derivadas dos elementos individuais extraídos da apresentação, com fundo/transparência tratados para integração ao tema cinza e amarelo existente.
