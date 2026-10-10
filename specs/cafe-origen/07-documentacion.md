# Etapa 7 — Documentación

Feature: **Oropéndola — Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr`
Estado: **documentada — flujo cerrado (etapas 1–7)**

---

## 1. Qué se documentó

La documentación de cierre produce dos artefactos:

1. **`README.md`** (raíz del repositorio) — reemplaza el starter de Astro. En español,
   cubre: qué es el proyecto, las cuatro secciones, cómo correrlo (`dev`, `build`,
   `preview` y la variante en background que usa este repo), estructura de carpetas,
   decisiones de diseño y vínculo a los specs.
2. **`specs/cafe-origen/07-documentacion.md`** (este archivo) — registra qué se
   documentó y por qué, y cierra el hilo de artefactos del flujo.

## 2. Contenido del `README.md`

- **Qué es:** landing estática de Oropéndola — Café de Origen (Finca La Esperanza,
  Jardín, Antioquia), Astro 7 + Tailwind 4, sin dependencias extra y sin recursos
  remotos.
- **Secciones:** tabla con hero, catálogo, origen y pedido (IDs, comportamiento y
  datos detrás).
- **Cómo correrlo:** requisito Node ≥ 22.12, comandos `install/dev/build/preview` y la
  gestión del dev server en background según `AGENTS.md`.
- **Estructura:** árbol de `src/` y referencia a `specs/cafe-origen/`.
- **Decisiones de diseño:** paleta y tokens `@theme`, tipografía autocontenida,
  «un solo momento audaz», interactividad con `<script>` vanilla y accesibilidad —
  todas documentadas para quien mantenga el proyecto.
- **Verificación:** vínculo a `06-verificacion.md`.

## 3. Decisiones registradas (resumen)

| Área | Decisión | Dónde se explica |
| --- | --- | --- |
| Identidad | Oropéndola · Finca La Esperanza · Jardín (Antioquia) | `02-propuesta.md` §1, `README.md` |
| Paleta/tipografía | Celadón + verde bosque + yema; serif de sistema | `02-propuesta.md` §2, `README.md` |
| Interactividad | `<script>` vanilla: filtro, «Agregar», validación | `02-propuesta.md` §3, `README.md` |
| Diseño visual | Un solo momento audaz (oropéndola), hairlines | `02-propuesta.md` §2.4 |
| Accesibilidad | Skip-link, foco visible, `aria-*`, reduced-motion | `README.md`, `04-requisitos.md` RNF-04/05 |

## 4. Cierre del flujo

Con esta etapa quedan completadas las siete etapas del flujo SDD de `cafe-origen`:

| Etapa | Artefacto | Estado |
| --- | --- | --- |
| 1 — Exploración | `01-exploration.md` | ✅ (traducido al español) |
| 2 — Propuesta | `02-propuesta.md` | ✅ aprobada |
| 3 — Tareas | `03-tareas.md` | ✅ T-01..T-14 |
| 4 — Requisitos | `04-requisitos.md` | ✅ formalizada |
| 5 — Plan de pruebas | *(no aplica en este flujo)* | — |
| 6 — Verificación | `06-verificacion.md` | ✅ verificada |
| 7 — Documentación | `README.md` + `07-documentacion.md` | ✅ |

El resumen integral de entrega se consolida en `ENTREGA.md`.

## Cierre

- El `README.md` refleja el estado real del proyecto (verificado en la Etapa 6).
- El flujo de `cafe-origen` queda **cerrado**; el modo de entrega `single-pr` sigue
  pendiente del pedido explícito del usuario para crear el PR.