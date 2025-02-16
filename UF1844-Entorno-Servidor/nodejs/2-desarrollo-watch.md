# --watch flag

El flag --watch en Node.js se utiliza para reiniciar automáticamente tu aplicación de Node.js cada vez que haya cambios en los archivos fuente. Esto es muy útil durante el desarrollo, ya que te ahorra el tener que detener y reiniciar manualmente la aplicación cada vez que haces un cambio.

## Cómo funciona --watch:
Cuando ejecutas tu aplicación Node.js con el flag --watch, Node.js monitoriza los archivos JavaScript para detectar cualquier cambio. Si algún archivo se modifica (se guarda), la aplicación se reiniciará automáticamente.

Ejemplo de uso:
```bash
node --watch app.js
```
Este comando hará lo siguiente:

Ejecutará app.js.
Monitoreará el archivo y reiniciará la aplicación cada vez que app.js o sus dependencias se modifiquen.

## ¿Por qué usar --watch?
- Desarrollo más eficiente: No necesitas reiniciar manualmente la aplicación de Node.js cada vez que realices un cambio.
- Mejora la productividad: Ayuda a agilizar el flujo de trabajo durante el desarrollo, especialmente para aplicaciones grandes o cambios frecuentes.