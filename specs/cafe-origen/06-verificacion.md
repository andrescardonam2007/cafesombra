# Etapa 6 — Verificación

Feature: **Oropéndola — Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr`
Estado: **verificada** — build verde, 10/10 criterios de aceptación y 10/10 requisitos cumplen

---

## 1. Método

- **Comando:** `npm run build` (equivale a `astro build`).
- **Entorno:** Windows 11, Node `>=22.12.0` (engines del proyecto), rama
  `feature/cafe-origen-landing` en `HEAD 76df2f7`.
- **Inspección:** salida del build + greps sobre `dist/index.html` (HTML estático
  generado) e inspección del código fuente de los componentes.
- **Alcance honesto:** los criterios puramente conductuales (filtrar, expandir,
  enviar, foco) se verifican por **inspección de código y HTML estático**, no con un
  navegador automatizado; el alcance de la propuesta (§4) excluye tests de UI.

## 2. Resultado del build

```
[build] generating static routes
├─ /index.html (+33ms)
✓ Completed in 63ms.
[build] 1 page(s) built in 901ms
[build] Complete!
```

**Resultado: CUMPLE** — `npm run build` termina sin errores y genera `dist/index.html`.

## 3. Criterios de aceptación (propuesta, §5)

| # | Criterio | Resultado | Evidencia |
| --- | --- | --- | --- |
| 1 | `npm run build` termina sin errores. | **Cumple** | Salida del build: «1 page(s) built in 901ms / Complete!», exit 0. |
| 2 | Las 4 secciones renderizan en `index.astro` mediante componentes separados. | **Cumple** | `index.astro` importa `Nav/Hero/Catalogo/Origen/Contacto`; HTML generado contiene `#inicio`, `#catalogo`, `#origen`, `#pedido` dentro de `<main id="contenido">`. |
| 3 | El catálogo muestra 6 productos leídos de un archivo de datos aparte. | **Cumple** | 6 `li.ficha-item` en el HTML; datos en `src/data/productos.ts` (6 registros `Producto`). |
| 4 | El formulario bloquea el envío inválido y muestra errores junto al campo. | **Cumple** (por inspección) | `validar()` en `Contacto.astro` previene el submit, marca `aria-invalid="true"`, muestra `#error-*` (enlazados por `aria-describedby`) y enfoca el primer campo inválido. |
| 5 | Con datos válidos aparece una confirmación simulada accesible (`aria-live`). | **Cumple** (por inspección) | `#confirmacion` con `role="status"` y `aria-live="polite"` en el HTML; se rellena en el handler de submit y se limpia el formulario. |
| 6 | Sin recursos remotos: build sin requests de red externos. | **Cumple** | Grep sobre `dist/index.html`: ningún `http(s)://` fuera del namespace `http://www.w3.org/2000/svg`; sin `<img>` remotos ni `<link>` a fuentes externas. |
| 7 | Navegación por teclado y foco visible en controles interactivos. | **Cumple** (por inspección) | `:focus-visible` global (3px `--color-yema`) en `global.css`; skip-link a `#contenido`; controles nativos (`<details>`, botones, enlaces y campos de formulario) operables por teclado. |
| 8 | El filtro de tueste filtra la lista, refleja `aria-pressed` y muestra estado vacío claro. | **Cumple** (por inspección) | 4 botones con `aria-pressed` (Todos + claro/medio/oscuro) en el HTML; el script alterna `aria-pressed`, aplica `hidden` por `data-tueste` y conmuta `#estado-vacio`. |
| 9 | «Agregar» selecciona el grano en el `select` y desplaza vista y foco al pedido (sin carrito). | **Cumple** (por inspección) | Botones con `data-producto`; el script asigna `#producto.value` y hace `scrollIntoView` + `focus` sobre `#pedido` (`tabindex="-1"`, `preventScroll`); no hay carrito. |
| 10 | Cada paso del proceso se abre y cierra con teclado (Enter/Espacio), sin JS que lo impida. | **Cumple** (por inspección) | 6 `<details>/<summary>` nativos en el HTML, sin script que toque `open`; el comportamiento de teclado es nativo del elemento. |

## 4. Requisitos (Etapa 4)

| ID | Resultado | Evidencia |
| --- | --- | --- |
| RF-01 | **Cumple** | IDs de las 4 secciones presentes en `dist/index.html`. |
| RF-02 | **Cumple** | Nav con `href="#catalogo"`, `#origen`, `#pedido`; los IDs existen. |
| RF-03 | **Cumple** | 1 `<h1>`; 1 SVG `role="img"` con `aria-label` (oropéndola); CTA `href="#catalogo"`. |
| RF-04 | **Cumple** | 6 fichas; 6 botones «Agregar»; datos en `src/data/productos.ts`. |
| RF-05 | **Cumple** | 4 `aria-pressed`; `#estado-vacio` presente; lógica de filtro en `Catalogo.astro`. |
| RF-06 | **Cumple** | `data-producto` en botones; script asigna `#producto` y hace scroll+foco a `#pedido`. |
| RF-07 | **Cumple** | 6 `<details>`; pasos desde `src/data/proceso.ts`; sin JS que bloquee `open`. |
| RF-08 | **Cumple** | Formulario con `#nombre`, `#correo`, `#producto`, `#cantidad`, `#mensaje`, todos con `<label for>`. |
| RF-09 | **Cumple** | Validación en `Contacto.astro`; `aria-invalid` + `#error-*` + foco al primer inválido. |
| RF-10 | **Cumple** | `#confirmacion` `role="status"`/`aria-live="polite"`; sin llamadas de red en el script. |
| RNF-01 | **Cumple** | `package.json`: solo `astro`, `tailwindcss`, `@tailwindcss/vite`. |
| RNF-02 | **Cumple** | Grep: cero `http(s)://` externos; fuentes del sistema (`--font-display`/`--font-sans`); SVG inline. |
| RNF-03 | **Cumple** | Media queries a `64rem` en Hero; grid fluido, `max-width: 72rem`, `clamp()` en titulares. |
| RNF-04 | **Cumple** | `lang="es-CO"`, skip-link, `:focus-visible`, `<header>/<main>/<footer>`, jerarquía 1×`<h1>` + 3×`<h2>` + `<h3>` por sección. |
| RNF-05 | **Cumple** | Bloque `@media (prefers-reduced-motion: reduce)` neutraliza animación y scroll. |
| RNF-06 | **Cumple** | Build «Complete!», `dist/index.html` generado. |
| RNF-07 | **Cumple** | `lang="es-CO"`; copy visible todo en español. |
| RNF-08 | **Cumple** | `productos.ts`/`proceso.ts` exportan interfaces y arrays tipados. |
| RNF-09 | **Cumple** | Scripts vanilla (sin imports de frameworks) en `Catalogo.astro` y `Contacto.astro`. |
| RNF-10 | **Cumple** | `@theme {}` en `global.css` (Tailwind v4 CSS-first, sin config). |

## 5. Correcciones aplicadas

**Ninguna.** El build pasó a la primera y los 20 criterios/requisitos evaluados cumplen.
La pasada de accesibilidad y responsive (T-12) ya estaba cerrada en el commit `7aab4f7`
antes de esta etapa.

## 6. Conclusión

- **Build:** verde (`npm run build` → `Complete!`).
- **Criterios de aceptación:** 10/10 cumplen.
- **Requisitos:** RF-01..RF-10 y RNF-01..RNF-10 cumplen (10/10 + 10/10).
- **Limitación declarada:** los criterios conductuales se verificaron por inspección
  de código y HTML estático; las pruebas de UI automatizadas quedaron fuera de alcance
  según la propuesta (§4).

## Próxima etapa

**Etapa 7 — Documentación:** `README.md` en español y `07-documentacion.md`.