# Oropéndola — Café de Origen

Landing page estática para una tienda de café de origen de la **Finca La Esperanza**,
vereda La Cascada, **Jardín** (suroeste de Antioquia). Una sola página con cuatro
secciones: hero, catálogo, origen y pedido.

Construida con **Astro 7 + Tailwind 4**, sin dependencias adicionales y sin recursos
remotos: tipografías del sistema, gráficos SVG inline y cero peticiones de red.

## Secciones

| Sección | Descripción |
| --- | --- |
| **Hero** (`#inicio`) | Titular serif, ilustración inline de la oropéndola con su nido colgante y CTA al catálogo. Un único reveal orquestado al cargar (neutralizado con `prefers-reduced-motion`). |
| **Catálogo** (`#catalogo`) | Seis granos de la cosecha leídos de `src/data/productos.ts`, presentados como «libro de catación» (filas con hairline, no tarjetas). Filtro por tueste (claro/medio/oscuro) con `aria-pressed` y estado vacío. El botón **Agregar** selecciona el grano en el formulario y lleva la vista hasta él (sin carrito). |
| **Origen** (`#origen`) | Historia de la finca y «El camino del grano»: seis pasos expandibles con `<details>/<summary>` nativo, operables por teclado. |
| **Pedido** (`#pedido`) | Formulario (nombre, correo, producto, cantidad, mensaje) con validación en el cliente, errores junto al campo y confirmación simulada en una región `aria-live`. No hay backend. |

## Cómo correrlo

Requisitos: **Node ≥ 22.12**.

```sh
npm install     # instala dependencias
npm run dev     # servidor de desarrollo en http://localhost:4321
npm run build   # genera el sitio estático en ./dist
npm run preview # previsualiza el build de ./dist
```

En este proyecto el servidor de desarrollo también puede correrse en segundo plano
(ver `AGENTS.md` del repo):

```sh
astro dev --background   # arranca en background
astro dev status         # estado del servidor
astro dev logs           # logs
astro dev stop           # detiene el servidor
```

## Estructura

```text
src/
  layouts/Base.astro       # <html lang="es-CO">, metas, skip-link, import de estilos
  components/              # un componente Astro por sección + piezas (Ficha, Paso)
  data/productos.ts        # 6 productos tipados (Producto)
  data/proceso.ts          # 6 pasos del proceso (PasoProceso)
  pages/index.astro        # ensambla las cuatro secciones
  styles/global.css        # tokens @theme (Tailwind v4 CSS-first) + estilos base
specs/cafe-origen/         # artefactos del flujo de desarrollo (etapas 1–7)
```

## Decisiones de diseño

- **El origen manda el diseño.** La paleta sale del mundo del café de sombra: verde
  celadón de la neblina de montaña, verde bosque, amarillo oropéndola como único
  acento fuerte y cereza usada con cuentagotas (incluidos los errores de validación).
  Tokens en `@theme` (Tailwind v4 CSS-first, sin `tailwind.config.js`).
- **Tipografía autocontenida.** Titulares en serif de sistema (Iowan Old Style /
  Palatino), cuerpo en Segoe UI — sin cargar fuentes externas.
- **Un solo momento audaz.** El hero con la oropéndola es lo memorable; el resto queda
  disciplinado: hairlines en vez de tarjetas idénticas, números solo donde hay
  secuencia real (los pasos del proceso), movimiento solo en respuesta a acción.
- **Interactividad sin framework.** Islas `<script>` vanilla: filtro de tueste,
  «Agregar → seleccionar grano», validación del formulario y confirmación simulada.
- **Accesibilidad básica.** Skip-link, landmarks, `:focus-visible` global, labels
  asociados, errores con `aria-invalid`/`aria-describedby`, `aria-live` para la
  confirmación y `prefers-reduced-motion` respetado.
- **Sin dependencias nuevas ni assets remotos.** Solo Astro + Tailwind; gráficos en
  SVG/CSS inline.

## Verificación

`npm run build` termina sin errores; el registro completo por criterio y requisito
está en `specs/cafe-origen/06-verificacion.md`.

## Documentación del proceso

El flujo de desarrollo completo (exploración, propuesta, tareas, requisitos,
verificación y cierre) vive en [`specs/cafe-origen/`](specs/cafe-origen/).