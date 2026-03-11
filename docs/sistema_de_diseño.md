# Sistema de Diseño

## Concepto Visual
**"Industrial Tech"**: Una fusión entre la robustez de la ingeniería industrial y la limpieza del desarrollo de software moderno.

## Paleta de Colores

### Modo Claro (Light)
- **Primario (Industrial Blue):** `#2c3e50` (Seriedad, confianza, ingeniería).
- **Secundario (Safety Orange):** `#e67e22` (Acentos, CTA, vitalidad, advertencia industrial).
- **Fondo:** `#f8f9fa` (Blanco humo, limpio).
- **Texto Principal:** `#333333`.
- **Texto Secundario:** `#666666`.

### Modo Oscuro (Dark)
- **Primario:** `#34495e` (Versión desaturada para fondo/cards).
- **Secundario:** `#d35400` (Naranja quemado, menos brillante para la vista).
- **Fondo:** `#1a1a1a` (Gris muy oscuro, casi negro, "Carbón").
- **Texto Principal:** `#ecf0f1`.
- **Texto Secundario:** `#bdc3c7`.

## Tipografía
- **Títulos (Headings):** `Montserrat` o `Roboto Slab` (Sólida, geométrica, moderna).
- **Cuerpo (Body):** `Open Sans` o `Inter` (Legibilidad, técnica, neutra).
- **Código/Técnico:** `Fira Code` o `Roboto Mono` (Para snippets y detalles técnicos).

## Espaciado y Layout
- Sistema de **Grid de 4/8/12 columnas** según viewport.
- Espaciado base (rem): `0.25rem` (4px), `0.5rem` (8px), `1rem` (16px), `2rem` (32px).

## Patronaje y Texturas
- **Fondo Hero:** `radial-gradient` sutil para profundidad.
- **Patrón Industrial:** Superposición de cuadrícula (Grid) css-pure en el hero para evocar planos técnicos/ingeniería (`40px` size).

## Componentes Clave
- **Botones:**
  - `btn-primary`: Sólido, naranja industrial.
  - `btn-outline`: Bordeado, transparente, para acciones secundarias.
- **Badges:**
  - `hero-badge`: Indicador de perfil dual (pill shape).
  - `skill-tags`: Etiquetas pequeñas para listar habilidades técnicas.
- **Cards de Proyectos (Rediseñado):**
  - Estructura `<article>` semántica.
  - **Header:** Icono + Categoría.
  - **Footer:** Tags de tecnologías + Enlace de acción.
  - Efecto de elevación en hover.
