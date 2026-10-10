# ENTREGA — Oropéndola · Café de Origen

Feature: **Oropéndola — Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr` — rama `feature/cafe-origen-landing`
Estado: **flujo completo (etapas 1–7), verificado y documentado**

---

## 1. Resumen del proceso por etapas

| Etapa | Entregable | Evidencia |
| --- | --- | --- |
| 1 — Exploración | `01-exploration.md` (traducido al español en el cierre) | Estado del repo en bruto, restricciones del brief, riesgos, preguntas abiertas. Commit de traducción: `1a6db8e`. |
| 2 — Propuesta | `02-propuesta.md` | Identidad de marca, plan de diseño (skill `frontend-design`), wireframes ASCII, arquitectura de componentes, alcance y criterios de aceptación. Aprobada en el portón. |
| 3 — Tareas | `03-tareas.md` + implementación T-01..T-12 | Checklist accionable con IDs y verificación; 12 commits por unidad de trabajo (ver §2). Registro de avance con hashes en `03-tareas.md`. |
| 4 — Requisitos | `04-requisitos.md` | RF-01..RF-10 y RNF-01..RNF-10 ligados a tareas T-xx, con criterios observables. Formalizado tras codificar. Commit `a11f553`. |
| 6 — Verificación | `06-verificacion.md` | `npm run build` verde; 10/10 criterios de aceptación y 10/10 requisitos cumplen, con evidencia y limitaciones declaradas. Commit `e533503`. |
| 7 — Documentación | `README.md` + `07-documentacion.md` | README en español (qué es, secciones, cómo correr, decisiones de diseño); registro de cierre. Commits `3498078`, `b1e8149`. |

*(La etapa 5 — plan de pruebas — no aplica en este flujo: la verificación se definió en
la Etapa 6 y quedó dentro del alcance de la propuesta §4, sin tests de UI automatizados.)*

## 2. Evidencia por unidad de trabajo (T-01..T-12)

Rama `feature/cafe-origen-landing`, base `1fb1adc` (chore: scaffold). Un commit por tarea.

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
| Cierre | `76df2f7` | docs(specs): mark T-01..T-12 complete with commit evidence |

**Evidencia de producto (Etapa 6):** `npm run build` → `1 page(s) built in 901ms ·
Complete!`. `dist/index.html`: `lang="es-CO"`, 1×`<h1>` + 3×`<h2>`, IDs
`contenido/inicio/catalogo/origen/pedido`, 6 fichas, 6 botones «Agregar», 6
`<details>`, `<select id="producto">`, `aria-live="polite"`, 4 botones con
`aria-pressed`, y cero `http(s)://` externos (solo el namespace SVG).

## 3. Cómo se controló el contexto

- **Engram (memoria persistente):** cada etapa se registró en memoria con
  `mem_save` (decisiones, hallazgos y avance por feature), y el estado del flujo se
  consultó con `mem_context`/`mem_search` al retomar; el documento de tareas tiene su
  espejo de recuperación. Así ninguna etapa partió sin el contexto de la anterior.
- **Una etapa por vez (portones):** el flujo avanzó serializado: exploración →
  propuesta (aprobada en portón) → tareas → implementación por unidad → requisitos →
  verificación → documentación. Cada etapa cerró con su artefacto antes de abrir la
  siguiente; no se mezclaron etapas.
- **Skill `frontend-design` (scope del proyecto):** aplicada en la Etapa 2 para el plan
  de diseño (paleta, tipografía, layout, principios) y la auto-crítica contra los
  tells de plantilla/AI; el resultado quedó registrado en `02-propuesta.md` §2.5.
- **Context7 (herramienta disponible):** Context7 estaba configurado entre las
  herramientas del proyecto para consultar la documentación de Astro y Tailwind. No hay
  evidencia registrada de consultas a Context7 en etapas concretas, así que no se
  afirma que se haya usado en alguna; la preocupación por Tailwind v4 CSS-first (tokens
  en `@theme`, sin `tailwind.config.js`) sí quedó documentada como riesgo en
  `01-exploration.md`.
- **Islas `<script>` vanilla:** la interactividad (filtro, «Agregar», validación) se
  mantuvo sin framework, minimizando superficie de contexto y dependencias.

## 4. Criterios de calidad aplicados

1. **Verificación observable, no inferida:** las casillas de tareas se marcaron solo
   con resultado observado (build, greps sobre `dist/`, inspección de código); la
   Etapa 6 declara qué se verificó por inspección y qué quedaría para un test de UI
   automatizado (fuera de alcance por propuesta).
2. **Commits por unidad de trabajo:** `Conventional Commits`, un commit por tarea y
   un commit por documento de cierre; docs y datos junto al comportamiento.
3. **Sin dependencias nuevas ni assets remotos:** `package.json` intacto, fuentes del
   sistema, SVG inline; verificado por grep en el build.
4. **Accesibilidad como piso, no como adorno:** skip-link, `:focus-visible`, labels,
   `aria-invalid`/`aria-describedby`, `aria-live`, `prefers-reduced-motion` y jerarquía
   de encabezados (T-12).
5. **Diseño deliberado, no default:** la propuesta escapó explícitamente de la paleta
   crema/marrón y del kit de tarjetas SaaS (auto-crítica en `02-propuesta.md` §2.5).
6. **Decisión real del usuario siempre:** el PR, el push y el merge quedan fuera —
   bajo política ordinaria del repositorio, sin push ni PR sin pedido explícito.

## 5. Pendiente (decisión del usuario, no del agente)

- Crear el **PR único** (`single-pr`) de `feature/cafe-origen-landing` a `master».
- Push de la rama cuando el usuario lo pida.
- (Opcional) ceremonia de revisión del PR por política del repositorio.