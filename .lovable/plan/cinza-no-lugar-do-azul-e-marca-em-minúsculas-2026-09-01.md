# Cinza no lugar do azul e marca em minúsculas

## Alterações visuais

- Trocar os tons azul-marinho dos tokens globais por uma escala de cinza neutra, preservando o amarelo/dourado da identidade e o contraste dos textos.
- Aplicar essa troca automaticamente em toda a landing page, formulário, autenticação, painel administrativo, política de privacidade, cabeçalho e rodapé.
- Manter os nomes técnicos dos tokens (`navy`) para limitar a mudança à aparência e evitar regressões desnecessárias.

## Marca e conteúdo

- Substituir todas as ocorrências visíveis de `NYX` por `nyx`, incluindo títulos, textos, CTAs, legendas, textos alternativos, rodapé e metadados SEO.
- Manter intactos e-mails, domínio, chaves de armazenamento, nomes de arquivos e identificadores internos que já usam `nyx` ou cuja alteração poderia quebrar integrações.
- Preservar os arquivos oficiais de logo; a alteração de caixa será aplicada ao conteúdo textual, sem redesenhar a arte da marca.

## Verificação

- Conferir as rotas `/`, `/politica-de-privacidade`, `/auth` e `/admin` em desktop e mobile.
- Validar contraste, legibilidade, ausência de azul residual e funcionamento do build.
