# Etapa 4 — Requisitos

Feature: **Oropéndola — Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr`
Estado: **formalizada**

> Esta etapa se formalizó después de codificar, a partir de la propuesta
> (`02-propuesta.md`) y las tareas (`03-tareas.md`): documenta como requisitos
> formales el comportamiento que ya quedó implementado y verificado.

---

## Convenciones

- **RF-xx** = requisito funcional; **RNF-xx** = requisito no funcional.
- Cada requisito enlaza las tareas **T-xx** que lo materializan y un **criterio de
  verificación observable** (qué se mira y qué se espera ver).
- La verificación se ejecuta y registra en la **Etapa 6** (`06-verificacion.md`).

---

## Requisitos funcionales

| ID | Requisito | Tareas | Criterio de verificación observable |
| --- | --- | --- | --- |
| RF-01 | Página estática con cuatro secciones (hero, catálogo, origen, pedido) ensambladas con componentes Astro separados. | T-02, T-05..T-11 | `dist/index.html` contiene `#inicio`, `#catalogo`, `#origen` y `#pedido` dentro de `<main id="contenido">`. |
| RF-02 | Encabezado con la marca y navegación por anclas a las secciones. | T-05 | El nav enlaza `#catalogo`, `#origen` y `#pedido`, y cada ID destino existe en el HTML. |
| RF-03 | Hero con titular, ilustración inline de la oropéndola (SVG) y CTA al catálogo, sin imágenes remotas. | T-06 | Un solo `<h1>`, un SVG con `role="img"` y `aria-label`, y `<a href="#catalogo">`; cero `<img>` remotos. |
| RF-04 | Catálogo de seis granos leídos desde un módulo de datos aparte. | T-03, T-07, T-08 | Se renderizan 6 fichas (`.ficha-item`) con nombre, intensidad, notas, peso/precio y botón «Agregar»; los datos viven en `src/data/productos.ts`. |
| RF-05 | Filtro de tueste (claro/medio/oscuro) que muestra u oculta fichas, refleja el estado con `aria-pressed` y ofrece un estado vacío. | T-08 | 4 botones con `aria-pressed`; al filtrar cambia la visibilidad y `#estado-vacio` aparece cuando el conteo visible es 0. |
| RF-06 | «Agregar» selecciona el grano en el `<select>` del pedido y desplaza vista y foco a la sección de pedido (sin carrito). | T-08, T-10 | El botón lleva `data-producto`; el script asigna `#producto.value` y hace `scrollIntoView` + `focus` sobre `#pedido` (`tabindex="-1"`). |
| RF-07 | Sección de origen con la historia de la finca y seis pasos expandibles nativos. | T-04, T-09 | 6 `<details>/<summary>` (uno por paso de `src/data/proceso.ts`); abren y cierran con Enter/Espacio sin JS que lo impida. |
| RF-08 | Formulario de pedido con los campos nombre, correo, producto, cantidad y mensaje. | T-10 | Formulario con `#nombre`, `#correo`, `#producto`, `#cantidad` y `#mensaje`, cada uno con su `<label for>`. |
| RF-09 | Validación en el cliente que bloquea el envío inválido y muestra el error junto al campo. | T-10 | Con datos inválidos el envío se previene, el campo recibe `aria-invalid="true"` y su `#error-*` (vinculado por `aria-describedby`) se muestra; el foco va al primer campo inválido. |
| RF-10 | Confirmación de pedido simulada y accesible, sin backend. | T-10 | Con datos válidos `#confirmacion` (`role="status"`, `aria-live="polite"`) se rellena y muestra; no ocurre ninguna llamada de red. |

---

## Requisitos no funcionales

| ID | Requisito | Tareas | Criterio de verificación observable |
| --- | --- | --- | --- |
| RNF-01 | Solo Astro + Tailwind: sin dependencias npm nuevas. | T-01, T-08, T-10 | `package.json` conserva `astro`, `tailwindcss` y `@tailwindcss/vite`; ningún import de terceros en `src/`. |
| RNF-02 | Sin recursos remotos: tipografías del sistema y gráficos SVG/CSS inline; cero peticiones externas. | T-01, T-06, T-07 | En `dist/index.html` no hay `http(s)://` fuera del namespace `http://www.w3.org/2000/svg`; sin `<img>` remotos ni `<link>` a fuentes externas. |
| RNF-03 | Diseño responsive mobile-first. | T-01, T-12 | Grid fluido con `max-width` y `clamp()`; verificado a 360 / 768 / 1280 px. |
| RNF-04 | Accesibilidad básica: HTML semántico, landmarks, skip-link, foco visible, labels, contraste y jerarquía de encabezados. | T-02, T-05, T-07, T-09, T-10, T-12 | `<html lang="es-CO">`, skip-link a `#contenido`, `:focus-visible` global, `<header>`/`<main>`/`<footer>`, un solo `<h1>` y `<h2>` por sección. |
| RNF-05 | Respeto de `prefers-reduced-motion`. | T-01, T-06 | Con reduced-motion el reveal del hero y el scroll suave se neutralizan (bloque `@media` en `global.css`). |
| RNF-06 | Build estático reproducible sin errores. | T-01, T-11, T-13 | `npm run build` termina en «Complete!» y genera `dist/index.html`. |
| RNF-07 | Idioma del documento y copy en español de Colombia. | T-02 | `lang="es-CO"` y todo el copy visible en español. |
| RNF-08 | Separación de datos y presentación, con datos tipados en TypeScript. | T-03, T-04 | `src/data/productos.ts` y `src/data/proceso.ts` exportan tipos (`Producto`, `PasoProceso`) y sus arrays. |
| RNF-09 | Interactividad como islas `<script>` vanilla, sin framework. | T-08, T-10 | Los scripts de filtrado, «Agregar» y validación no importan frameworks. |
| RNF-10 | Tokens de diseño centralizados (Tailwind v4 CSS-first, sin `tailwind.config.js`). | T-01 | `global.css` define la paleta y las familias en un bloque `@theme {}`. |

---

## Trazabilidad y cobertura

- Las **10 tareas** T-01..T-12 (de las 12 de implementación) quedan cubiertas por al
  menos un requisito.
- Cada **criterio de aceptación** de la propuesta (§5) se corresponde con uno o más
  requisitos, y se verifica 1:1 en la Etapa 6.

## Próxima etapa

**Etapa 5 — (no aplica en este flujo) / Etapa 6 — Verificación:** ejecución del build y
registro observado de cada criterio y requisito en `06-verificacion.md`.
