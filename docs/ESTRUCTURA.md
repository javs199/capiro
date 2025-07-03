# Estructura del Proyecto Capiro Corp

## Descripción General

Este proyecto sigue el patrón de organización "7 en 1" que separa claramente el código fuente de los archivos de producción, facilitando el desarrollo, mantenimiento y despliegue.

## Estructura de Directorios

### `/src` - Código Fuente
Contiene todos los archivos editables y originales del proyecto.

#### `/src/html/`
- **Propósito**: Archivos HTML base y partials
- **Contenido**: 
  - `base.html` - Template base
  - `partials/` - Fragmentos reutilizables
  - `pages/` - Plantillas de páginas específicas

#### `/src/scss/`
- **Propósito**: Estilos en SCSS organizados por módulos
- **Estructura**:
  ```
  scss/
  ├── main.scss              # Archivo principal
  ├── _variables.scss        # Variables globales
  ├── _mixins.scss          # Mixins reutilizables
  ├── base/                 # Estilos base
  ├── components/           # Componentes
  ├── layouts/              # Layouts
  ├── pages/                # Estilos específicos de páginas
  └── responsive/           # Media queries
  ```

#### `/src/js/`
- **Propósito**: Scripts JavaScript modulares
- **Estructura**:
  ```
  js/
  ├── main.js              # Archivo principal
  ├── modules/             # Módulos específicos
  ├── utils/               # Utilidades
  └── components/          # Componentes JS
  ```

#### `/src/img/`
- **Propósito**: Imágenes originales en alta resolución
- **Contenido**: Logos, fotos, iconos originales

#### `/src/fonts/`
- **Propósito**: Tipografías personalizadas
- **Formato**: WOFF2, WOFF, TTF

#### `/src/components/`
- **Propósito**: Componentes reutilizables
- **Contenido**: Cards, navbar, modales, etc.

### `/public` - Archivos de Producción
Contiene los archivos compilados y optimizados para el servidor web.

#### `/public/css/`
- Archivos CSS compilados y minificados
- Generados automáticamente desde `/src/scss/`

#### `/public/js/`
- Archivos JavaScript compilados y minificados
- Generados automáticamente desde `/src/js/`

#### `/public/img/`
- Imágenes optimizadas para web
- Generadas automáticamente desde `/src/img/`

#### Archivos HTML
- `index.html` - Página principal
- `about.html` - Sobre nosotros
- `services.html` - Servicios
- `projects.html` - Proyectos
- `contact.html` - Contacto

### `/build` - Configuración de Build
Archivos de configuración para herramientas de build.

- `webpack.config.js` - Configuración de Webpack
- `gulpfile.js` - Tareas de Gulp (si se usa)
- `vite.config.js` - Configuración de Vite (si se usa)

### `/docs` - Documentación
Documentación del proyecto, manuales y referencias.

### `/backups` - Copias de Seguridad
Copias de seguridad puntuales del proyecto.

### `/design` - Archivos de Diseño
- Mockups y wireframes
- Archivos fuente de diseño (AI, PSD, etc.)
- Logos y assets de marca originales

## Convenciones de Nomenclatura

### Archivos
- **HTML**: kebab-case (ej: `main-header.html`)
- **SCSS**: kebab-case con guión bajo para partials (ej: `_main-header.scss`)
- **JavaScript**: camelCase (ej: `mainHeader.js`)
- **Imágenes**: kebab-case (ej: `hero-image.jpg`)

### Clases CSS
- **Metodología**: BEM (Block Element Modifier)
- **Ejemplo**: `.card__title--large`

### Variables
- **SCSS**: kebab-case (ej: `$primary-color`)
- **JavaScript**: camelCase (ej: `primaryColor`)

## Flujo de Trabajo

### Desarrollo
1. Editar archivos en `/src/`
2. Ejecutar `npm run dev` para servidor de desarrollo
3. Los cambios se compilan automáticamente a `/public/`

### Producción
1. Ejecutar `npm run build`
2. Los archivos se optimizan y compilan a `/public/`
3. Desplegar contenido de `/public/` al servidor

## Herramientas de Build

### SCSS
- **Compilador**: Sass
- **Comando**: `sass src/scss:public/css --style compressed`

### JavaScript
- **Bundler**: Webpack
- **Configuración**: `build/webpack.config.js`

### Imágenes
- **Optimizador**: Imagemin
- **Comando**: `imagemin src/img/* --out-dir=public/img`

## Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción completa
npm run watch        # Observar cambios en SCSS
npm run optimize     # Optimizar imágenes
npm run clean        # Limpiar archivos compilados
npm run serve        # Servidor de producción
```

## Consideraciones de Rendimiento

### Optimizaciones Automáticas
- CSS minificado
- JavaScript compilado y minificado
- Imágenes optimizadas
- Lazy loading de imágenes
- Code splitting

### Buenas Prácticas
- Usar variables SCSS para consistencia
- Modularizar JavaScript
- Optimizar imágenes antes de subir
- Mantener estructura de archivos organizada
- Documentar cambios importantes 