# Renderizado condicional (Conditional Rendering)

El renderizado condicional en React es una técnica que permite renderizar diferentes componentes o elementos de la interfaz de usuario según una condición específica. Esta condición puede basarse en cualquier valor o expresión que se evalúe a true o false, como un valor de una variable, una propiedad (prop) o el estado (state).

En lugar de mostrar siempre el mismo contenido, el renderizado condicional permite que la aplicación sea más dinámica, mostrando contenido diferente según el contexto o las interacciones del usuario. Por ejemplo, podrías mostrar un componente de bienvenida solo si un usuario está autenticado, o mostrar un mensaje de error si algo falla en la carga de datos.

**¿Cómo funciona?**
El renderizado condicional en React se puede lograr mediante varias formas, como:

Operador ternario: Es una forma compacta de escribir un if que permite elegir entre dos opciones dependiendo de la evaluación de una condición.

Operador lógico AND (&&): Permite renderizar un componente solo si una condición es verdadera.

Instrucción if dentro de la función de renderizado: Se puede utilizar un if tradicional dentro del cuerpo del método de renderizado para decidir qué componente o JSX mostrar.

```javascript
const x = false;
  const y = false;

  return (
    <div>

     {(x || y ?
      <h1>x is true</h1>
      :
      <h1>x is false</h1>
     )}

    </div>
  );
```

short circuit - En React, se permite la evaluación de cortocircuito utilizando &&, donde se renderiza el lado derecho solo si el lado izquierdo es verdadero.
```javascript
 {x && <h1>x is true</h1>}
```

**Con Objetos**

```javascript
  const user = { name: 'John', age: 30 };

  return (
    <div>

     {user.name ? <h1>Welcome {user.name}</h1>: <p>Not logged in</p>}


    </div>
```
**Optional Chaining (encadenamiento opcional)** es una característica de JavaScript que permite acceder a propiedades de un objeto de forma segura, incluso si algunos de los elementos en la cadena son null o undefined. Esta sintaxis evita errores al intentar acceder a propiedades de objetos que podrían no existir.

```javascript
{user?.name ? <h1>Welcome {user.name}</h1>: <p>Not logged in</p>}
```