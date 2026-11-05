<div align="center">

# CasabWeb

<p>
  <a href="https://casab.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-casab.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://www.netlify.com/" target="_blank">
    <img src="https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Hosted on Netlify" />
  </a>
</p>

[![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-18.2-757575?logo=materialdesign&logoColor=white)](https://material.angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## Acerca del proyecto

CasabWeb es una aplicación frontend desarrollada con Angular para ofrecer una experiencia de usuario moderna, rápida y responsiva. El proyecto usa Angular Material para componentes de interfaz, RxJS para programación reactiva y Tailwind CSS para estilos visuales.

## Demo en vivo

La aplicación está desplegada en Netlify y disponible en:

- https://casab.netlify.app/

## Tecnologías

- **Angular 18** — framework principal de la app.
- **TypeScript 5.5** — lenguaje principal del desarrollo.
- **Angular Material** — sistema de componentes visuales.
- **RxJS 7.8** — manejo de flujos reactivos.
- **Tailwind CSS 3** — utilidades para diseño moderno.
- **Karma + Jasmine** — pruebas unitarias.

## Requisitos previos

- Node.js instalado.
- npm o pnpm disponible.
- Compatible con la versión de Angular 18.

## Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/Johngardev/casab-web.git
cd casab-web

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run watch` | Compila en modo desarrollo y observa cambios. |
| `npm test` | Ejecuta la suite de pruebas unitarias. |

## Estructura principal

- `src/` — código fuente de la aplicación.
- `public/` — archivos estáticos.
- `angular.json` — configuración del proyecto Angular.
- `package.json` — dependencias y scripts.

## Desarrollo

Para generar nuevos componentes o servicios:

```bash
npx ng generate component nombre-del-componente
npx ng generate service nombre-del-servicio
```

Para consultar ayuda de Angular CLI:

```bash
npx ng help
```

## Contribuciones

Las contribuciones son bienvenidas. Crea una rama con tus cambios y abre un pull request con una descripción clara.

## Licencia

Aún no se ha definido una licencia para este repositorio.
