# Etapa 3 — Tareas

Feature: **Oropéndola — Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr`
Estado: **T-01 a T-12 implementadas** (rama `feature/cafe-origen-landing`); pendiente Etapa 4 y Etapas 6–7

---

## Objetivo

Convertir la propuesta aprobada en una **checklist accionable y verificable**. Cada
tarea tiene un ID estable, artefactos concretos y una verificación. Las casillas se
marcan **solo con resultado observado**.

## Alcance autorizado (superficies de escritura)

- `src/styles/global.css` — tokens y estilos base
- `src/layouts/Base.astro` — **nuevo**
- `src/components/Nav.astro`, `Hero.astro`, `Catalogo.astro`, `FichaProducto.astro`,
  `Origen.astro`, `PasoProceso.astro`, `Contacto.astro` — **nuevos**
- `src/data/productos.ts`, `src/data/proceso.ts` — **nuevos**
- `src/pages/index.astro` — reemplaza el starter
- `README.md` — Etapa 7
- `specs/cafe-origen/*.md` — artefactos del flujo SDD

**Nada fuera de esto.** No se tocan `package.json`, `astro.config.mjs` ni el lockfile.
Cero dependencias nuevas, cero assets remotos.

## Estrategia de entrega y commits

- **Modo `single-pr`:** una rama de feature (`feature/cafe-origen-landing`) desde
  `master`, commits por **unidad de trabajo**, y **un solo PR** al final.
- Convención: *Conventional Commits*; tests/docs junto al comportamiento.
- **No se hace push ni PR sin pedido explícito del usuario** (política ordinaria).
- Verificación del build en la **Etapa 6**.

## Orden y dependencias

```
T-01 → T-02 → { T-03, T-04 } → { T-05..T-10 } → T-11 → T-12 → T-13 → T-14
T-08 (Agregar)  depende de  T-10 (formulario con <select> de productos)
```

---

## Checklist

### Fundamentos

- [x] **T-01 — Tokens de diseño y estilos base**
  - **Qué:** `@theme` en `global.css` con la paleta (bosque/cal/flor/yema/cereza/pulpa)
    y las familias tipográficas; estilos base: fondo celadón, texto bosque, `:focus-visible`
    consistente, `@media (prefers-reduced-motion: reduce)` y line-height del serif.
  - **Artefactos:** `src/styles/global.css`
  - **Verificación:** los tokens resuelven; `npm run build` no falla por CSS.
- [x] **T-02 — Layout Base**
  - **Qué:** `Base.astro` con `<html lang="es-CO">`, `<head>` (título, descripción,
    viewport), **skip-link**, import de `global.css` y `<slot />`.
  - **Artefactos:** `src/layouts/Base.astro`
  - **Verificación:** estructura de página correcta; landmarks presentes.

### Datos

- [x] **T-03 — Datos de productos (6)**
  - **Qué:** `productos.ts` tipado con `id`, `nombre`, `tueste` (`claro|medio|oscuro`),
    `intensidad` (1–5), `notas[]`, `altitud`, `peso`, `precio`.
  - **Artefactos:** `src/data/productos.ts`
  - **Verificación:** 6 registros válidos según el tipo.
- [x] **T-04 — Datos del proceso**
  - **Qué:** `proceso.ts` con 6 pasos (`titulo`, `texto`) del recorrido del grano.
  - **Artefactos:** `src/data/proceso.ts`
  - **Verificación:** 6 pasos válidos según el tipo.

### Secciones

- [x] **T-05 — Navegación**
  - **Qué:** `Nav.astro` con la marca y enlaces a las 4 secciones (`#catalogo`,
    `#origen`, `#pedido`); navegable con teclado.
  - **Artefactos:** `src/components/Nav.astro`
  - **Verificación:** los anclajes apuntan a IDs existentes.
- [x] **T-06 — Hero**
  - **Qué:** `Hero.astro` con titular serif, **SVG inline de oropéndola + nido**,
    línea de contexto (finca/altitud) y CTA "Ver el catálogo"; **un único reveal**
    orquestado al cargar que se desactiva con `prefers-reduced-motion`.
  - **Artefactos:** `src/components/Hero.astro`
  - **Verificación:** sin imagen remota; reveal neutralizado en reduced-motion.
- [x] **T-07 — Ficha de producto**
  - **Qué:** `FichaProducto.astro` como fila del "libro de catación": nombre, medidor
    de intensidad, notas, peso/precio y botón **Agregar**.
  - **Artefactos:** `src/components/FichaProducto.astro`
  - **Verificación:** renderiza un producto; botón con `data-producto`.
- [x] **T-08 — Catálogo + filtro de tueste**
  - **Qué:** `Catalogo.astro` lista los **6** productos desde `productos.ts`; filtro
    claro/medio/oscuro con **`aria-pressed`** y **estado vacío**; el botón Agregar
    **selecciona el producto en el formulario y lleva la vista/foco hasta él** (sin carrito).
  - **Depende de:** T-10 (el `<select>` de pedido).
  - **Artefactos:** `src/components/Catalogo.astro` (+ `src/components/FichaProducto.astro`)
  - **Verificación:** filtrar oculta/muestra filas; `aria-pressed` cambia; estado vacío aparece.
- [x] **T-09 — Origen + proceso expandible**
  - **Qué:** `Origen.astro` (historia de la finca) + `PasoProceso.astro` con
    `<details>/<summary>` nativo por paso; se abre y cierra **con teclado**.
  - **Artefactos:** `src/components/Origen.astro`, `src/components/PasoProceso.astro`
  - **Verificación:** cada paso expande/colapsa con Enter/Espacio; sin JS que lo bloquee.
- [x] **T-10 — Contacto / pedido**
  - **Qué:** `Contacto.astro` con formulario (nombre, correo, producto, cantidad, mensaje),
    **validación en el cliente** con errores junto al campo, y **confirmación simulada**
    en región `aria-live`. Expone el `<select>` de productos que consume el catálogo.
  - **Artefactos:** `src/components/Contacto.astro`
  - **Verificación:** envío inválido bloqueado con mensajes; válido muestra confirmación.

### Cierre

- [x] **T-11 — Integración de la página**
  - **Qué:** `index.astro` usa `Base` y ensambla `Nav`, `Hero`, `Catalogo`, `Origen`, `Contacto`.
  - **Artefactos:** `src/pages/index.astro`
  - **Verificación:** las 4 secciones aparecen en orden con sus IDs.
- [x] **T-12 — Pasada de accesibilidad y responsive**
  - **Qué:** revisión mobile-first, contraste, foco visible, jerarquía de encabezados,
    `aria` de los controles.
  - **Artefactos:** ajustes en los componentes.
  - **Verificación:** navegación por teclado y revisión a 360px / 768px / 1280px.
- [ ] **T-13 — Verificación (Etapa 6)**
  - **Qué:** `npm run build` sin errores; chequeos de los criterios de aceptación.
  - **Artefactos:** registro de verificación en `specs/cafe-origen/06-verificacion.md`
  - **Verificación:** build verde + criterios observados.
- [ ] **T-14 — Documentación (Etapa 7)**
  - **Qué:** `README.md` con descripción, secciones, cómo correr (`dev`/`build`) y
    decisiones de diseño; cierre de los specs.
  - **Artefactos:** `README.md`, `specs/cafe-origen/07-documentacion.md`
  - **Verificación:** README refleja el estado real del proyecto.

---

## Definición de terminado (DoD)

Una tarea se marca `[x]` solo cuando:

1. Su artefacto existe y cumple lo descrito.
2. Su verificación se observó (no se infiere).
3. Se incluyó en un commit por unidad de trabajo en la rama de feature.

## Registro de avance (T-01 … T-12)

Rama: `feature/cafe-origen-landing`. Base: `1fb1adc` (chore: scaffold). Un commit por unidad.

| Tarea | Commit | Mensaje |
| --- | --- | --- |
| T-01 | `4e98b42` | feat(styles): add design tokens and base styles |
| T-02 | `c14e7a9` | feat(layout): add Base layout with es-CO metadata and skip link |
| T-03 | `244dc9a` | feat(data): add six-product catalog dataset |
| T-04 | `03f3079` | feat(data): add origin process steps dataset |
| T-05 | `d8b98b4` | feat(nav): add section navigation |
| T-06 | `26402fe` | feat(hero): add hero with inline oropendola SVG and single reveal |
| T-07 | `c6c8d28` | feat(catalog): add cupping-ledger product row component |
| T-08 | `5dfa56f` | feat(catalog): add roast filter and add-to-order interaction |
| T-09 | `be743db` | feat(origin): add farm story and expandable process steps |
| T-10 | `3c974fa` | feat(order): add validated order form with simulated confirmation |
| T-11 | `bf6ed0e` | feat(page): assemble landing sections in index |
| T-12 | `7aab4f7` | refactor(catalog): hide filtered list items for a cleaner a11y tree |

**Evidencia de verificación (preliminar, repetida en Etapa 6):**
`npm run build` → `1 page(s) built … Complete!` (sin errores). HTML generado contiene:
`lang="es-CO"`, un solo `<h1>`, tres `<h2>`, IDs `contenido`/`catalogo`/`origen`/`pedido`,
6 fichas, 6 botones «Agregar», 6 `<details>`, `select#producto` y `aria-live="polite"`.
Sin recursos remotos (el único `http://` es el namespace `http://www.w3.org/2000/svg`).

## Próxima etapa

**Etapa 4 — Requisitos:** requisitos funcionales y no funcionales formales,
accesibilidad y criterios de verificación detallados.
