# Capiro Corp - Sitio Web Corporativo

## Descripción
Sitio web corporativo para Capiro Corp, empresa especializada en servicios de ingeniería y construcción, con diseño inspirado en planos arquitectónicos (blueprint-style).

## 🎨 Características del Diseño

- **Diseño Blueprint**: Inspirado en planos arquitectónicos técnicos
- **Estilo Minimalista**: Limpio, técnico y profesional
- **Responsive**: Optimizado para mobile, tablet y desktop
- **Performance**: Carga rápida y optimizada
- **Accesibilidad**: Cumple con estándares WCAG
- **SEO**: Optimizado para motores de búsqueda
- **Animaciones**: Efectos suaves y profesionales

## 🎨 Paleta de Colores - Blueprint Style

- **Azul Corporativo**: #0f2746 (fondo principal, headers)
- **Dorado Acento**: #a8832b (botones, íconos, detalles)
- **Verde Éxito**: #27ae60 (validaciones)
- **Rojo Advertencia**: #e74c3c (errores o alertas)
- **Blanco**: #ffffff (textos claros)
- **Gris Claro**: #f5f5f5 (fondos secundarios)
- **Gris Oscuro**: #2e2e2e (textos principales)

### Colores Blueprint Específicos
- **Fondo Blueprint**: #0f2746
- **Líneas Blueprint**: #ffffff
- **Grid Blueprint**: #1a3a5a
- **Acentos Dorados**: #a8832b

## Estructura del Proyecto (Patrón 7 en 1)

```
/capiro-site
│
├── /src                 ← Código fuente (archivos editables)
│   ├── /html            ← HTML separado por vistas (partials o completos)
│   ├── /scss            ← Estilos en SCSS (organizados por módulos)
│   ├── /js              ← Scripts JavaScript separados
│   ├── /img             ← Imágenes originales o en alta resolución
│   ├── /fonts           ← Tipografías personalizadas
│   └── /components      ← Componentes reutilizables (cards, navbar, etc.)
│
├── /public              ← Archivos compilados y optimizados para producción
│   ├── index.html
│   ├── projects.html
│   ├── services.html
│   ├── contact.html
│   ├── /css
│   ├── /js
│   ├── /img
│   └── favicon.ico
│
├── /build               ← Archivos de configuración para tareas (gulp, vite, etc.)
│
├── /docs                ← Documentación del proyecto (manuales, referencias)
│
├── /backups             ← Copias de seguridad puntuales
│
├── /design              ← Mockups, logos, archivos fuente de diseño (AI, PSD, etc.)
│
└── README.md            ← Descripción general del proyecto
```

## 🛠️ Tecnologías Utilizadas
- **HTML5**: Estructura semántica y accesible
- **SCSS/CSS3**: Estilos modulares con variables y mixins
- **JavaScript (ES6+)**: Funcionalidades interactivas y animaciones
- **Responsive Design**: Mobile-first approach
- **Optimización de rendimiento**: Lazy loading, minificación
- **Fuentes**: Google Fonts (Poppins, Montserrat, Open Sans)

## 📦 Componentes Principales

### 1. Hero Section
- Fondo tipo blueprint con grid animado
- Título principal con acentos dorados
- Botones CTA con efectos hover
- Indicador de scroll

### 2. Timeline de Procesos
- Línea de tiempo vertical con pasos numerados
- Íconos SVG personalizados
- Animaciones secuenciales
- Responsive para mobile

### 3. Tarjetas de Proyectos
- Diseño tipo blueprint con bordes dorados
- Información de ubicación con íconos
- Botón "Ver Proceso" reutilizable
- Efectos hover y animaciones

### 4. Ventajas Competitivas
- Grid de 6 ventajas con íconos
- Fondo azul blueprint
- Efectos hover con elevación
- Animaciones al scroll

### 5. Formulario de Contacto
- Validación en tiempo real
- Notificaciones de estado
- Diseño consistente con el tema
- Responsive y accesible

## Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Ejecutar en modo desarrollo: `npm run dev`
4. Construir para producción: `npm run build`

## Estructura de Archivos

### /src
- **html/**: Archivos HTML base y partials
- **scss/**: Estilos organizados por módulos
- **js/**: Scripts JavaScript modulares
- **img/**: Imágenes originales en alta resolución
- **fonts/**: Tipografías personalizadas
- **components/**: Componentes reutilizables

### /public
- Archivos compilados y optimizados para producción
- HTML final, CSS minificado, JS compilado
- Imágenes optimizadas

### /design
- Archivos de diseño originales (AI, PSD, etc.)
- Mockups y wireframes
- Logos y assets de marca

## Convenciones de Nomenclatura
- **Archivos**: kebab-case (ej: `main-header.scss`)
- **Clases CSS**: BEM methodology
- **Variables**: camelCase (ej: `primaryColor`)
- **Componentes**: PascalCase (ej: `NavBar.js`)

## Scripts Disponibles
- `npm run dev`: Servidor de desarrollo
- `npm run build`: Construcción para producción
- `npm run watch`: Observar cambios en archivos
- `npm run optimize`: Optimizar imágenes y assets

## Contribución
1. Crear una rama para tu feature
2. Hacer commit de tus cambios
3. Crear un Pull Request

## Licencia
© 2024 Capiro Corp. Todos los derechos reservados. 