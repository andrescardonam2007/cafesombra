# Etapa 2 — Propuesta

Feature: Headline **Oropéndola — Café de Origen** (`cafe-origen`)
Modo de entrega: `single-pr`
Estado: **aprobada** (con ajustes de UX y criterios de aceptación incorporados)

---

## 1. Identidad de marca (propuesta)

- **Marca / tienda:** **Oropéndola — Café de Origen**.
- **Origen:** **Finca La Esperanza**, vereda La Cascada, **Jardín (suroeste de Antioquia)**, a ~1.900 msnm.
- **Historia (gancho):** café de sombra. La **oropéndola** —ave de los cafetales
  antioqueños— teje su nido colgante en los árboles de sombra de la finca. La marca
  une biodiversidad y taza: *"cada taza es un bosque que se oye"*.
- **Voz:** cercana y campesina, orgullosa del origen. Vocabulario de la vereda:
  *grano, taza, cosecha, sombra, lote*.
- **Copy:** español de Colombia, frases cortas, voz activa, sin relleno.

> Estas son decisiones a confirmar en el portón. Se pueden ajustar nombre,
> finca o región antes de codificar.

---

## 2. Plan de diseño (skill `frontend-design`)

### 2.1 Paleta

Base clara **verde-celadón**, no crema; profundidad en verde bosque; amarillo
oropéndola como único acento fuerte; cereza usada con cuentagotas.

| Token | Hex | Rol |
| --- | --- | --- |
| `--color-bosque` | `#1C2A22` | Texto principal, secciones oscuras |
| `--color-cal` | `#E9EDDA` | Fondo base (celadón pálido) |
| `--color-flor` | `#F8F9F1` | Superficies / tarjetas |
| `--color-yema` | `#E8A400` | Acento primario: CTA, foco, detalles |
| `--color-cereza` | `#9C2B33` | Acento secundario y **errores de validación** |
| `--color-pulpa` | `#7E8F63` | Bordes, texto secundario, estados |

Semántica derivada: éxito/confirmación = `--color-pulpa` reforzado; error =
`--color-cereza`.

### 2.2 Tipografía

**Autocontenida, sin requests remotos** (respeta "sin dependencias ni recursos
remotos" y funciona offline en el build). Dos familias de sistema con roles claros,
no las familias por defecto de cualquier proyecto:

- **Display (titulares):** `"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif`
- **Cuerpo / UI:** `"Segoe UI Variable", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif`

Reglas de composición:
- Escala modular (~1.25) con line-height generoso; el titular del hero usa el serif
  a gran tamaño con interletrado ajustado.
- El contraste lo hace el **tamaño**, no poner una palabra en color/italica.
- Sin etiquetas en MAYÚSCULAS, sin "palabra — fragmento", sin mono para datos.

### 2.3 Layout — wireframes ASCII

**Hero — móvil (mobile-first)**
```
┌───────────────────────────┐
│ Oropéndola       menú  ≡  │
├───────────────────────────┤
│ Café de sombra,           │
│ cultivado a 1.900 m       │
│ sobre el suroeste         │
│ antioqueño                │
│                           │
│        [SVG              │
│     oropéndola y         │
│      nido colgante]       │
│                           │
│  [ Ver el catálogo ]      │  ← CTA (yema)
│  Finca La Esperanza ·     │
│  Jardín, Antioquia        │
└───────────────────────────┘
```

**Hero — escritorio (asimétrico, no centrado)**
```
┌──────────────────────────────────────────────────────┐
│ Oropéndola            catálogo  origen  pedidos        │
├──────────────────────────┬───────────────────────────┤
│ Café de sombra,          │                           │
│ cultivado a 1.900 m      │   [SVG oropéndola/nido]   │
│ sobre el suroeste        │                           │
│ antioqueño               │                           │
│                          │                           │
│ [ Ver el catálogo ]      │                           │
│ Finca La Esperanza ·     │                           │
│ Jardín, Antioquia        │                           │
└──────────────────────────┴───────────────────────────┘
```

**Catálogo — "libro de catación" (filas con hairline, no tarjetas idénticas)**
```
Catálogo · 6 granos
[ tueste:  claro | medio | oscuro ]   ← filtro accesible (aria-pressed)

─────────────────────────────────────────────
Intensidad ▓▓▓░░   1.900 m
Nombre del grano
notas: panela · cítrico · cacao
250 g · $ XX.000                 [ Agregar ]
─────────────────────────────────────────────
(5 filas más)
─────────────────────────────────────────────
```

El botón **Agregar** de cada grano **selecciona ese producto en el formulario de
pedido y lleva la vista hasta él** (scroll + foco). No hay carrito: la selección
vive en el `select` de productos de la sección de pedido.

**Origen — el proceso ES una secuencia, por eso sí van números**
```
El camino del grano
│
● 1  Siembra y sombra
│
● 2  Cosecha selectiva
│
● 3  Fermentación y lavado
│
● 4  Secado al sol
│
● 5  Tueste
│
● 6  Taza
```
Cada nodo es un `<details>` que expande la historia del paso. Se abre y se cierra
con el teclado (Enter/Espacio sobre el `<summary>`), nativo y accesible.

**Contacto / pedido**
```
┌───────────────────────────┐
│ Hagamos tu pedido         │
│ Nombre    [.............] │
│ Correo    [.............] │
│ Producto  [ select 6  ▾ ] │
│ Cantidad  [ - 1 + ]       │
│ Mensaje   [.............] │
│ [ Confirmar pedido ]      │
│ (aviso de confirmación    │
│  simulado, aria-live)     │
└───────────────────────────┘
```

### 2.4 Principios

1. **El origen manda el diseño.** Cada elección (nido, grano, montaña, vereda)
   sale del mundo del café de sombra antioqueño, no de una plantilla.
2. **Un solo momento audaz.** El hero con la oropéndola es *lo memorable*; el resto
   queda disciplinado y silencioso.
3. **Estructura = información.** Los números solo donde hay secuencia real (proceso).
   Los hairlines separan fichas; no decoran.
4. **Movimiento que responde.** Un único reveal orquestado en el hero al cargar; el
   resto del movimiento responde a una acción (filtrar, expandir, enviar).
5. **Piso de calidad sin anunciarlo.** Responsive hasta móvil, foco visible,
   `prefers-reduced-motion` respetado, contraste accesible.

### 2.5 Revisión contra el brief (auto-crítica)

- **Tells evitados deliberadamente:** crema `#F4F1EA` + terracota `#D97757`; negro
  casi puro + verde ácido; kit de tarjetas idénticas con la misma sombra; etiquetas
  en MAYÚSCULAS; mono para datos; "→" al final de botones; brillo degradado decorativo.
- **Revisión que hice al plan:** la primera idea del hero era el tratamiento por
  defecto que la skill marca —**un número grande ("1.900") + etiqueta pequeña + acento
  degradado**. Lo cambié: el elemento característico pasa a ser la **oropéndola y su
  nido en SVG**, y la altitud baja a ser una línea de contexto. Cambié esto porque el
  número grande es exactamente el default genérico que el brief no pide.

---

## 3. Arquitectura de componentes

```
src/
  layouts/
    Base.astro            <html lang="es-CO">, <head>, metas, importa global.css
  components/
    Nav.astro             Marca + navegación a las 4 secciones
    Hero.astro            Titular + SVG oropéndola/nido + CTA + reveal
    Catalogo.astro        Sección + filtro de tueste + lista de fichas
    FichaProducto.astro   Una fila del "libro de catación"
    Origen.astro          Historia de la finca + línea de proceso
    PasoProceso.astro     Un nodo/paso expandible (<details>)
    Contacto.astro        Formulario + <script> de validación + confirmación
  data/
    productos.ts          6 productos (datos de ejemplo)
    proceso.ts            Pasos del proceso de origen
  pages/
    index.astro           Ensambla las 4 secciones
  styles/
    global.css            @theme (tokens de diseño) + estilos base
```

- **Componentes Astro por sección**, como pide el brief.
- **Datos en archivo aparte** (`src/data/`), tipados en TS.
- **Interactividad = islas `<script>` vanilla** (sin framework): filtro de tueste
  (botones `aria-pressed`), proceso con `<details>` nativo, validación del formulario.
- **Imágenes:** solo SVG inline, degradados CSS y emojis. Cero assets remotos.

---

## 4. Alcance

**Incluye**
- Las 4 secciones: hero, catálogo (6 granos), origen (historia + línea de proceso), contacto/pedido.
- Datos de ejemplo en `src/data/productos.ts`.
- Validación del formulario en el cliente + confirmación **simulada**.
- Responsive mobile-first, HTML semántico, accesibilidad básica.
- Verificación con `npm run build`.

**No incluye**
- Backend, envío real de correo o persistencia.
- **Carrito de compras:** "Agregar" solo selecciona el grano en el formulario y lleva hasta él.
- CMS, i18n, analytics, autenticación.
- Dependencias npm nuevas ni imágenes remotas.
- Tests de UI automatizados (el alcance de verificación se define en la **Etapa 6**).

---

## 5. Criterios de aceptación (borrador)

1. `npm run build` termina sin errores.
2. Las 4 secciones renderizan en `index.astro` mediante componentes separados.
3. El catálogo muestra 6 productos leídos desde un archivo de datos aparte.
4. El formulario **bloquea** el envío con datos inválidos y muestra errores junto al campo.
5. Con datos válidos aparece una confirmación simulada accesible (`aria-live`).
6. Sin recursos remotos: build sin requests de red externos.
7. Navegación por teclado y foco visible en controles interactivos.
8. El **filtro de tueste** (claro/medio/oscuro) filtra la lista visible y cada botón
   refleja su estado con `aria-pressed`; un filtro sin resultados muestra un estado
   vacío claro.
9. El botón **Agregar** de un grano selecciona ese producto en el `select` del
   formulario de pedido y desplaza la vista y el foco hasta la sección de pedido
   (sin carrito).
10. Cada **paso del proceso** se abre y se cierra con el teclado (Enter/Espacio sobre
    el `<summary>`), sin JavaScript que lo impida.

*(Los requisitos formales y de accesibilidad se detallan en la **Etapa 4**.)*

---

## 6. Decisiones confirmadas en este portón

1. **Identidad:** nombre **Oropéndola**, finca **La Esperanza**, región **Jardín (suroeste de Antioquia)**.
2. **Tipografía autocontenida** (sin requests remotos) en vez de cargar fuentes externas.
3. **Interactividad:** filtro de tueste en el catálogo, proceso expandible con `<details>` y un único reveal en el hero.
4. **Ajuste de UX del catálogo:** "Agregar" selecciona el grano en el formulario y lleva hasta él (sin carrito).

## Próxima etapa

**Etapa 3 — Tareas:** checklist accionable con IDs, derivada de esta propuesta.
