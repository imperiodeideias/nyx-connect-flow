# Corrigir imagem do Beacon de Pulseira

## Problema
O card "Beacon de Pulseira" na seção de Beacons BLE exibe uma tag solta com código de barras ("240001"), sem pulseira — a imagem errada foi extraída do slide 8 da apresentação `POCUnimed_resultados_enviado_v2.pptx`.

## Diagnóstico (confirmado)
- Baixei o asset atual `beacon-pulseira.webp` do CDN: é uma tag genérica, não um beacon de pulseira.
- Reanalisando as coordenadas do slide 8: o rótulo "Beacon de Pulseira — Equipes e Pacientes / Clientes" está em x=7.158.566, y=2.906.825, e a imagem diretamente acima dele é `ppt/media/image49.png` (x=7.149.361, y=2.406.361) — alinhamento quase exato no eixo X. A extração anterior usou outra imagem do slide.

## Correção
1. Extrair `ppt/media/image49.png` do slide 8 de `POCUnimed_resultados_enviado_v2.pptx`.
2. Processar com o mesmo pipeline dos demais beacons (PIL): trim de bordas vazias, redimensionar para 640px, converter para WebP.
3. Conferir visualmente o resultado antes de publicar (deve mostrar o beacon de pulseira).
4. Publicar via `lovable-assets create` sobrescrevendo o ponteiro `src/assets/beacon-pulseira.webp.asset.json` (novo asset, nova URL; o código em `src/lib/assets.ts` e `Sections.tsx` não muda).
5. Validar no preview o card "Beacon de Pulseira" e verificar o build.

## Observação
Os demais cinco beacons (Dispenser, Neonato, Porta, Totem, Ativos) serão conferidos visualmente no preview; se algum outro estiver trocado, corrijo no mesmo fluxo usando o mapeamento de coordenadas já extraído:
- Dispenser (x=4.610.263) → `image50.png` (x=4.918.892)
- Neonato (x=9.456.448) → `image43.png` (x=9.602.050)
- Ativos (x=5.790.895) → `image44.png` (x=5.791.882)
- Porta (x=4.474.190) → `image40.png` (x=4.609.868)
- Totem (x=7.167.334) → a verificar entre `image21/47/48`
