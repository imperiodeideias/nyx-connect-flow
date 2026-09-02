# Incluir bloco sobre Salas Cirúrgicas na seção "O problema"

## Objetivo
Adicionar um novo card na seção "O problema" destacando o problema de salas cirúrgicas ociosas e cirurgias que não acontecem por falta de visibilidade operacional.

## Alterações propostas

### 1. `src/components/landing/Sections.tsx`
- Incluir um novo item no array `dores` com:
  - Ícone: `Clock` (do `lucide-react`) ou outro ícone adequado que já esteja importado.
  - Título: "Salas cirúrgicas ociosas" (ou similar, ajustável).
  - Texto: Destacar que cirurgias são canceladas ou salas ficam paradas por falta de rastreabilidade de paciente, equipamento e equipe.
- Ajustar o grid da seção `Problema` de `md:grid-cols-3` para `md:grid-cols-2 lg:grid-cols-4`, mantendo a responsividade e o equilíbrio visual dos quatro cards.
- Garantir que o novo card use o mesmo padrão visual dos existentes (borda superior dourada, fundo `bg-mist`, tipografia).

## Validação
- Verificar o build após a alteração.
- Confirmar visualmente que os quatro cards ficam equilibrados em desktop e empilham corretamente no mobile.
