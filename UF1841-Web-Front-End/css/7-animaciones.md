
# ¿Qué son las animaciones en CSS?
Las animaciones en CSS te permiten cambiar la apariencia de un elemento a lo largo del tiempo. Puedes hacer que los elementos se muevan, se desvanezcan, crezcan o cambien de color de manera suave.

Los keyframes son como un mapa para tu animación. Le dicen al navegador qué estilos aplicar en diferentes momentos

```css
@keyframes animationName {
  from { /* Starting styles */ }
  to { /* Ending styles */ }
}
```

Ejemplo:

```css
@keyframes moveRight {
  from { transform: translateX(0); }  /* Start here */
  to { transform: translateX(100px); } /* End here */
}
```css

## Propiedades de Animación
Para usar una animación en un elemento, necesitas agregar algunas propiedades. Aquí están las principales:

- animation-name: ¿Cuál es el nombre de la animación (como moverDerecha)?
- animation-duration: ¿Cuánto tiempo debe durar la animación? (por ejemplo, 2s para 2 segundos)
- animation-timing-function: ¿Cómo se mueve la animación? (por ejemplo, ease significa que comienza lento, acelera y luego desacelera)
- animation-iteration-count: ¿Cuántas veces debe repetirse la animación? (por ejemplo, infinite para que sea interminable)
- animation-direction: ¿Debería invertirse en cada bucle alterno? (por ejemplo, alternate)

## Aplicar una animación
Agregas la animación a un elemento en tu CSS. Por ejemplo:

```css

.caja {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation-name: moverDerecha;          /* Usar la animación que definimos */
  animation-duration: 2s;                /* Dura 2 segundos */
  animation-timing-function: ease;       /* Movimiento suave */
  animation-iteration-count: infinite;    /* Repetir para siempre */
}
```

## Resumen
- Define los keyframes para establecer dónde comienza y termina la animación.
- Usa propiedades de animación para controlar cómo y cuándo se reproduce la animación.
- Aplica la animación a un elemento para ver la animación en acción.

## Propeiedad de translate

1. Translate (trasladar)
La función translate mueve un elemento desde su posición original.

2D Translate: Mueve un elemento a lo largo de los ejes X e Y.

```css
transform: translate(50px, 100px); /* Mueve 50px a la derecha y 100px hacia abajo */
```

3D Translate: Mueve un elemento en el espacio 3D.

```css
transform: translate3d(50px, 100px, 30px); /* Mueve 50px a la derecha, 100px hacia abajo y 30px hacia adelante */
```

2. Rotate (rotar)
La función rotate gira un elemento alrededor de un punto específico.

2D Rotate: Rota un elemento en sentido horario o antihorario.

```css
transform: rotate(45deg); /* Rota el elemento 45 grados */
```

3D Rotate: Rota un elemento alrededor de los ejes X, Y o Z en el espacio 3D.

```css
transform: rotateX(30deg); /* Rota 30 grados alrededor del eje X */
```

3. Scale (escalar)
La función scale cambia el tamaño de un elemento.

2D Scale: Escala un elemento a lo largo de los ejes X e Y.

```css
transform: scale(2); /* Duplica el tamaño del elemento */
```


3D Scale: Escala un elemento en el espacio 3D.

```css
transform: scale3d(1, 1, 1.5); /* Mantiene el ancho y alto igual pero escala la profundidad por 1.5 */
```

4. Skew (inclinar)
La función skew inclina un elemento a lo largo de los ejes X e Y.

2D Skew: Inclina un elemento en dos direcciones.
```css
transform: skew(20deg, 10deg); /* Inclina 20 grados en el eje X y 10 grados en el eje Y */
```

5. Combinar Transformaciones
Puedes combinar múltiples funciones de transformación en una sola propiedad transform:

```css
transform: translate(50px, 100px) rotate(45deg) scale(1.5);
```
