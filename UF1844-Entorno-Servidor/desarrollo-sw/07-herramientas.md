# NPM
npm-check-updates (ncu) es una herramienta que permite detectar y actualizar las dependencias de un proyecto Node.js a sus últimas versiones disponibles, incluso si esas versiones están fuera del rango definido en el archivo package.json.

A diferencia de npm install, que respeta los rangos de versiones ya escritos, ncu te muestra qué hay de nuevo y actualiza esos rangos si lo deseas.

El objetivo principal de npm-check-updates es ayudarte a mantener actualizadas las dependencias de tu proyecto de forma segura y controlada, sin necesidad de hacerlo manualmente.

```bash
npm install npm-check-updates --save-dev
npx npm-check-updates
npx npm-check-updates -u    // Para actualizar el package.json con las versiones más recientes
npm install     // Finalmente, instala las nuevas versiones
```




# Docker


