<div align="center">

# CasabWeb

Aplicación web construida con Angular y TypeScript.

[![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-18.2-757575?logo=materialdesign&logoColor=white)](https://material.angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## Acerca del proyecto

CasabWeb es una aplicación frontend desarrollada con Angular. El proyecto utiliza Angular Material para componentes de interfaz, RxJS para programación reactiva y Tailwind CSS para estilos.

## Tecnologías

- **Angular 18** — framework de la aplicación.
- **TypeScript 5.5** — lenguaje de desarrollo.
- **Angular Material y CDK** — componentes y utilidades de interfaz.
- **RxJS 7.8** — programación reactiva.
- **Tailwind CSS 3** — utilidades de estilos.
- **Karma y Jasmine** — ejecución y estructura de pruebas unitarias.

## Requisitos previos

- Node.js y npm instalados.
- Una versión de Node.js compatible con Angular 18. Consulta la [tabla de compatibilidad de Angular](https://angular.dev/reference/versions).

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

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200). El servidor recarga la aplicación cuando detecta cambios en los archivos fuente.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo de Angular. |
| `npm run build` | Compila la aplicación para producción. Los artefactos se generan en `dist/`. |
| `npm run watch` | Compila en modo desarrollo y vuelve a compilar al detectar cambios. |
| `npm test` | Ejecuta las pruebas unitarias con Karma. |

## Estructura principal

- `src/` — código fuente de la aplicación.
- `public/` — recursos estáticos.
- `angular.json` — configuración de Angular CLI, compilación y pruebas.

## Desarrollo

Para generar componentes, servicios u otros elementos con Angular CLI:

```bash
npx ng generate component nombre-del-componente
npx ng generate service nombre-del-servicio
```

Para consultar los comandos disponibles:

```bash
npx ng help
```

## Contribuciones

Las mejoras y correcciones son bienvenidas. Para contribuir, crea una rama para tus cambios y abre un pull request con una descripción clara de la propuesta.

## Licencia

No se ha especificado una licencia para este repositorio.
