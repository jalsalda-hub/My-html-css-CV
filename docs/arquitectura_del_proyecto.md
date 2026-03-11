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
│   │   ├── documents/      # CV en PDF
│   ├── css/                # Hojas de estilo
│   │   ├── main.css        # Estilos principales (Layout, Componentes, Utilidades)
│   │   └── variables.css   # Tokens de diseño y temas
│   └── js/                 # Scripts
│       ├── main.js         # Lógica principal (UI, Eventos, Tema)
│       └── i18n.js         # Diccionario de traducciones
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
    - Se aplica el atributo `data-theme="dark"` o `light` en la etiqueta `<html>`.
    - CSS Variables en `variables.css` responden a este atributo.
