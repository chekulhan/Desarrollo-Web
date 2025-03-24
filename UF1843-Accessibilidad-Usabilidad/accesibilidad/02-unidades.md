DEMO ejemplo: Conigurar el font size por defecto en Chrome > Settings > Appearance

```css
body {
  font-size: 1rem; /* Tamaño base de 16px = equivalente a default */
}
```

# Unidades Absolutas
Las unidades absolutas tienen un tamaño fijo y no dependen del entorno ni de otras propiedades como el tamaño de la pantalla o el tamaño de fuente del documento.

Ejemplos:
- px (píxeles)
- pt (puntos)
- in (pulgadas)
- cm (centímetros)
- mm (milímetros)

```css

.element {
  width: 200px; /* 200 píxeles exactos */
  font-size: 16px; /* Fuente de 16 píxeles */
}

```

# Unidades Relativas
Las unidades relativas dependen de un valor de referencia. Este valor puede ser el tamaño del elemento padre, la raíz del documento o el tamaño del viewport.

Ejemplos:
- em (relativo al tamaño de la fuente del elemento padre)
- rem (relativo al tamaño de la fuente de la raíz html)
- % (relativo al tamaño de su elemento padre)
- vw (relativo al ancho del viewport)
- vh (relativo a la altura del viewport)

**Adaptativas**: Los tamaños cambian en función de otros elementos, como el tamaño de la fuente base, el tamaño del viewport o el contenedor padre.

**Escalables**: Son útiles para crear diseños responsivos que se ajustan a diferentes dispositivos y tamaños de pantalla.

**Flexibles**: Facilitan la creación de interfaces que se adaptan al entorno de visualización.

```css
html {
  font-size: 16px;
}

.element {
  font-size: 2rem; /* 2 veces el tamaño de fuente base (32px) */
  width: 50%; /* 50% del ancho del contenedor padre */
}
```


# Viewport
El viewport es el área visible dentro del navegador donde se muestra el contenido de una página web. Es el "espacio de visualización" disponible en la ventana del navegador para mostrar el contenido de una página web.

**Tamaño del viewport:**

El tamaño del viewport depende del tamaño de la ventana del navegador, que puede cambiar dependiendo de la resolución de la pantalla, el tamaño de la ventana del navegador, o si la página se está viendo en un dispositivo móvil o escritorio.

En dispositivos móviles, el tamaño del viewport puede cambiar si se gira el dispositivo (de vertical a horizontal), lo que afecta la cantidad de contenido visible.

**¿Por qué es importante?**

El viewport es crucial para el diseño responsivo, ya que determina cuánta área visible hay para mostrar los elementos de la página. Si el contenido de una página es más grande que el viewport, el usuario tendrá que desplazarse (scroll) para ver el resto.

Al entender el viewport, puedes hacer que tu página web se adapte de manera efectiva a diferentes dispositivos, como teléfonos móviles, tabletas, o pantallas grandes de escritorio.

**Viewport en el contexto de CSS:**

El tamaño del viewport puede influir en cómo dimensionas y posicionas los elementos en una página. Las unidades de medida como vw (viewport width) y vh (viewport height) son relativas al tamaño del viewport.

- 1vw es igual al 1% del ancho del viewport.
- 1vh es igual al 1% de la altura del viewport.

```css
.container {
  width: 50vw; /* 50% del ancho del viewport */
  height: 50vh; /* 50% de la altura del viewport */
}

h1 {
  font-size: 5vw; /* El tamaño de la fuente será el 5% del ancho del viewport */
}

```

**Meta etiqueta viewport en dispositivos móviles:**

En dispositivos móviles, puedes controlar el comportamiento del viewport usando la etiqueta meta en el encabezado del documento HTML. Esto te permite especificar cómo se debe ajustar el tamaño y escala de la página en dispositivos móviles.

Ejemplo de la meta etiqueta viewport:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```