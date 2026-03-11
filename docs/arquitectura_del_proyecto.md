# Arquitectura del Proyecto

## Estructura de Directorios

```
/
├── docs/                   # Documentación del proyecto (DDD)
│   ├── alcance_del_proyecto.md
│   ├── arquitectura_del_proyecto.md
│   ├── sistema_de_diseño.md
│   └── teck_stack.md
├── src/                    # Código fuente
│   ├── assets/             # Recursos estáticos
│   │   ├── images/         # Imágenes optimizadas (webp, svg)
│   │   ├── icons/          # Iconos SVG
│   │   └── documents/      # CV en PDF
│   ├── css/                # Hojas de estilo
│   │   ├── main.css        # Importador principal y reset
│   │   ├── variables.css   # Definición de tokens de diseño (colores, fuentes)
│   │   ├── layout.css      # Estructura general
│   │   ├── components/     # Estilos específicos de componentes (botones, cards)
│   │   └── sections/       # Estilos específicos por sección
│   └── js/                 # Scripts
│       ├── main.js         # Entrada principal
│       ├── i18n.js         # Módulo de internacionalización
│       └── ui.js           # Manejo de interfaz (tema, menú móvil)
├── index.html              # Punto de entrada único
└── README.md               # Documentación general y estado
```

## Flujo de Datos
1.  **Internacionalización (i18n):**
    - Se cargará un objeto JSON o diccionario en `js/i18n.js` con las traducciones.
    - El script detectará el idioma del navegador o la selección del usuario (guardada en `localStorage`).
    - Se actualizarán los textos en el DOM buscando atributos `data-i18n`.

2.  **Tema (Dark/Light):**
    - Se usará `localStorage` para persistir la preferencia.
    - Se aplicará una clase `.dark-mode` al `<body>` o se cambiarán los valores de las variables CSS raíz.
