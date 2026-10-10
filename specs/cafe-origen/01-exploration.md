# Etapa 1 — Exploración

Feature: **Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr`
Estado: en espera de aprobación en el portón de la Etapa 1

## Objetivo

Construir una landing page interactiva y moderna para una cafetería local de origen,
con cuatro secciones (hero, catálogo de productos, historia de origen, formulario de
contacto/pedido), usando únicamente Astro + Tailwind, sin dependencias adicionales y
sin imágenes remotas.

## Estado actual del proyecto (evidencia)

- `package.json` — Astro `^7.3.8`, Tailwind `^4.3.3`, `@tailwindcss/vite ^4.3.3`.
  `type: module`, `engines.node >= 22.12.0`. Scripts: `dev`, `build`, `preview`, `astro`.
- `astro.config.mjs` — Tailwind conectado a través del plugin de Vite. Sin integraciones.
- `src/pages/index.astro` — starter de Astro sin tocar: `<h1>Astro</h1>`, `lang="en"`.
- `src/styles/global.css` — una sola línea: `@import "tailwindcss";`.
- `src/components/`, `src/data/`, `src/content/` — todavía no existen.
- `public/` — solo `favicon.ico` y `favicon.svg`.
- Sin assets de imagen; según el brief, los visuales deben ser SVG / degradados / emojis.
- Git: repositorio inicializado, **sin commits todavía**. Los archivos del starter están
  en stage; las ediciones de Tailwind (`astro.config.mjs`, `package.json`, lockfile) y
  `src/styles/` no están en stage. `master` es la única rama.
- Documentos `README.md`, `AGENTS.md`, `CLAUDE.md`: plantillas por defecto de Astro (inglés).

## Skills en juego

- `frontend-design` (scope del proyecto):
  `C:\Users\Cardona\Downloads\proyecto-sdd\.agents\skills\frontend-design\SKILL.md`
  Comportamiento requerido: producir un plan de diseño compacto (color, tipografía,
  layout, principios), revisarlo contra el brief para detectar tells de plantilla/AI y
  después construir. Evitar los defaults conocidos (crema `#F4F1EA` + terracota,
  eyebrows en MAYÚSCULAS, strings meta con punto medio, tarjetas redondeadas idénticas,
  fade-and-slide en todas las secciones).
- No hay skill de SDD instalada en disco. El flujo de 7 etapas es el definido por el usuario.

## Restricciones (del brief)

1. Solo Astro + Tailwind — **sin dependencias adicionales**.
2. **Sin imágenes remotas** — visuales mediante SVG inline, degradados o emojis.
3. Layout responsive mobile-first.
4. HTML semántico y accesibilidad básica (landmarks, labels, foco, reduced motion).
5. Un componente Astro por sección, mantenidos separados.
6. Los datos del catálogo de 6 productos viven en un **archivo aparte**.
7. Formulario de contacto/pedido con **validación en el cliente** y una confirmación
   **simulada** (sin backend).
8. La verificación corre `npm run build`.
9. Entrega como **un solo PR**.

## Secciones a entregar

| # | Sección | Notas |
| - | ------- | ----- |
| 1 | Hero | Primera impresión; distintivo, no el tratamiento genérico de número grande |
| 2 | Catálogo de productos | 6 productos, datos en un módulo aparte |
| 3 | Origen | Historia de la finca + mapa/línea del proceso renderizada como pasos |
| 4 | Contacto / pedido | Formulario validado en el cliente + mensaje de confirmación simulado |

## Riesgos y puntos de atención

- **Tailwind v4 es CSS-first.** No hay `tailwind.config.js`; los tokens de diseño deben
  vivir en `global.css` vía `@theme`. Asumir la config de v3 romperá el build.
- **Astro 7** — verificar que no haya APIs removidas/renombradas al construir
  componentes o páginas.
- **«Interactivo» sin framework.** La interactividad debe ser pequeñas islas
  `<script>` vanilla (validación del formulario, cualquier reveal). Nada de
  React/Vue/Svelte (dependencia adicional).
- **Accesibilidad del feedback simulado.** La confirmación y los errores de validación
  necesitan `aria-live` / texto de error asociado, no solo color.
- **Trampa del diseño genérico.** La paleta obvia de café (crema + marrón) y el kit de
  tarjetas SaaS son exactamente los defaults contra los que advierte `frontend-design`;
  el plan debe tomar decisiones deliberadas y no-default.

## Preguntas abiertas (para resolver en el portón de la Etapa 2, no ahora)

- **Identidad de marca concreta** — nombre, región y gancho de historia. El brief dice
  «origen local» pero no nombra la tienda; se propondrá una identidad concreta.
- **Idioma del copy** — el público objetivo son clientes locales de habla hispana, así
  que el copy de la UI en español es el supuesto por defecto; a confirmar.

## Próxima etapa

Etapa 2 — Propuesta: plan de diseño (paleta, tipografía, wireframes ASCII, principios),
arquitectura de componentes, alcance (incluye/no incluye) y criterios de aceptación.