# Tipos de Pruebas de Software

## 1. Pruebas unitarias (Unit Tests)
**Qué son**: Prueban pequeñas unidades de código, como funciones o métodos individuales, para verificar que funcionan correctamente.  

**Ejemplo**: Probar que una función que suma dos números devuelve el resultado correcto.  

**Herramientas**: Jest (JavaScript/React), PyTest (Python), JUnit (Java).  

## 2. Pruebas de integración (Integration Tests)
**Qué son**: Verifican cómo interactúan varios módulos o componentes entre sí.  

**Ejemplo**: Probar que un frontend React puede hacer una solicitud a una API y recibir la respuesta esperada.  

**Herramientas**: Mocha (JavaScript), Postman (para probar APIs), Selenium (para pruebas web).  

## 3. Pruebas funcionales (Functional Tests)
**Qué son**: Evalúan si el software cumple con los requisitos funcionales especificados.  

**Ejemplo**: Probar que un usuario puede iniciar sesión con credenciales válidas.  

**Herramientas**: Cypress, Selenium, TestCafe.  

## 4. Pruebas de sistema (System Tests)
**Qué son**: Prueban el sistema completo de extremo a extremo para asegurarse de que todos los componentes funcionen juntos correctamente.  

**Ejemplo**: Simular la experiencia de un usuario navegando en una plataforma de comercio electrónico desde el inicio de sesión hasta la compra.  

**Herramientas**: Cypress, Selenium, Playwright.  

## 5. Pruebas de aceptación (Acceptance Tests o UAT - User Acceptance Testing)
**Qué son**: Validan que el software cumple con los requisitos del cliente o usuario final.  

**Ejemplo**: Un cliente final revisa que la interfaz de usuario de su aplicación funcione como esperaba.  

**Herramientas**: TestRail, Cucumber.  

## 6. Pruebas de rendimiento (Performance Tests)
**Qué son**: Evalúan la velocidad, estabilidad y capacidad de respuesta del software bajo carga.  

**Ejemplo**: Medir cuántos usuarios simultáneos puede manejar una API sin que el tiempo de respuesta se degrade significativamente.  

**Herramientas**: JMeter, Locust, k6.  

## 7. Pruebas de carga (Load Tests)
**Qué son**: Verifican el comportamiento del sistema bajo una cantidad específica de usuarios o solicitudes.  

**Ejemplo**: Simular 100,000 usuarios en una aplicación web para ver si se mantiene estable.  

**Herramientas**: Apache JMeter, Gatling.  

## 8. Pruebas de estrés (Stress Tests)
**Qué son**: Llevan el sistema más allá de sus límites para evaluar su comportamiento en condiciones extremas.  

**Ejemplo**: Probar qué pasa cuando el servidor recibe el doble de tráfico que su capacidad máxima.  

**Herramientas**: JMeter, k6.  

## 9. Pruebas de regresión (Regression Tests)
**Qué son**: Se ejecutan después de cambios en el código para verificar que no se hayan introducido errores nuevos.  

**Ejemplo**: Después de agregar una nueva función a una app, se ejecutan pruebas anteriores para asegurarse de que todo sigue funcionando bien.  

**Herramientas**: Jest, Selenium, Cypress.  

## 10. Pruebas de seguridad (Security Tests)
**Qué son**: Evalúan la seguridad del sistema para detectar vulnerabilidades.  

**Ejemplo**: Buscar inyecciones SQL o pruebas de autenticación de usuarios.  

**Herramientas**: OWASP ZAP, Burp Suite.  



# 🔹 Metodología TDD (Test-Driven Development)
El TDD sigue un ciclo de tres pasos clave:

1️⃣ Escribir una prueba 📝

Se define una prueba unitaria basada en los requisitos.

La prueba inicialmente fallará porque la función aún no existe.

2️⃣ Escribir el código mínimo necesario 👨‍💻

Se implementa el código justo para pasar la prueba.

3️⃣ Refactorizar 🔄

Se mejora el código sin cambiar su funcionalidad.

Se optimiza el diseño y se eliminan redundancias.

🔄 Este ciclo se repite hasta completar la funcionalidad.



## Jest
https://jestjs.io/

JEST solo funciona con Common Modules, no 

```bash
npm install --save-dev jest
```

Modify package.js para incluir jest al ejecutar `npm test` y excluir `type:"module"`:
```json
 "scripts": {
    "test": "jest"
  },
```

Crear un archivo *.test.js, como en el ejemplo aqui:

```bash
/project-directory
  /math.js
  /math.test.js
```

Crear unas funciones donde posteriormente ejecutaremos los tests:

```js
function sumar(a, b) {
    return a + b;
  }
  
function dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    return a / b;
  }
  
module.exports = { sumar, dividir };
```


El test funcion deberia contener:
```js
const { sumar, dividir } = require('./mathFunctions');


describe('Math functions', ()=> {
    test('deberia sumar dos numeros', () => {
        expect(sumar(1, 2)).toBe(3);
        expect(sumar(2, 4)).toBe(6);
    });

})
```

Ejecutar con:
```bash
npm test
npm test -- --coverage
```

## Entendiendo los Resultados de Cobertura de Pruebas en Jest
El reporte de cobertura de pruebas que has recibido proporciona una visión general de qué tanto de tu código ha sido probado por Jest. Aquí te explico lo que significa cada columna en el reporte de cobertura:

Columnas en el Reporte de Cobertura:
- % Stmts (Cobertura de Declaraciones):

Representa el porcentaje de declaraciones ejecutables que han sido cubiertas por tus pruebas.

Ejemplo: Si hay 10 declaraciones en tu archivo y tus pruebas ejecutan 4 de ellas, la cobertura de declaraciones sería del 40%.

- % Branch (Cobertura de Ramas):

Indica el porcentaje de ramas condicionales (como if, else, for, while, etc.) que han sido cubiertas por las pruebas.

La cobertura de ramas asegura que todas las rutas posibles (verdadera y falsa) de una declaración condicional sean probadas. Un 0% de cobertura de ramas significa que no se ha probado ninguna rama.

- % Funcs (Cobertura de Funciones):

Muestra el porcentaje de funciones que han sido cubiertas por las pruebas. Si existe una función en tu archivo pero nunca es probada, disminuirá este porcentaje.

- % Lines (Cobertura de Líneas):

Muestra el porcentaje de líneas en el archivo que son ejecutadas por las pruebas.

Si una línea nunca es ejecutada durante las pruebas (por ejemplo, en un bloque de código inalcanzable), la cobertura de líneas será más baja.

- Uncovered Line #s:

Enumera los números de las líneas en el archivo que no están cubiertas por ninguna prueba. En tu ejemplo, las líneas 7-10 en mathFunctions.js no están cubiertas.



## Actividades

¿Por que falla este prueba de unidad?

```js
test('should return user data from API', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        expect(data).toHaveProperty('id');
        expect(data.id).toBe(2);
    });
```


# Test Driven Development

Desarrollo Guiado por Pruebas (TDD, por sus siglas en inglés: Test-Driven Development) es una metodología de desarrollo de software en la que las pruebas se escriben antes de escribir el código de la funcionalidad. Este enfoque ayuda a garantizar que el código se desarrolle de manera robusta, con alta cobertura de pruebas y calidad desde el principio. TDD promueve la creación de código que sea fácil de mantener y extender a lo largo del tiempo.

**Beneficios del TDD**
- Mejora la calidad del código: Como el código se desarrolla con una base de pruebas, se evita la creación de código defectuoso.

- Documentación automatizada: Las pruebas sirven como documentación viva del comportamiento esperado del código.

- Facilita el refactoring: Gracias a las pruebas automatizadas, se puede refactorizar el código con confianza, sabiendo que las pruebas asegurarán que no se rompan funcionalidades existentes.

- Reduce los errores: TDD ayuda a identificar errores de manera temprana en el proceso de desarrollo, lo que mejora la estabilidad y confiabilidad del código.

- Ciclo de retroalimentación rápido: Con TDD, puedes saber rápidamente si una parte del código funciona como se espera, lo que agiliza el proceso de desarrollo.



## Ejemplo

**Escribir una prueba (Rojo)**
```js
test('deberia restar dos numeros', () => {
        expect(restar(5, 1)).toBe(4);
        expect(restar(10, 11)).toBe(-1);
    });
```

**Escribir el código mínimo necesario para pasar la prueba (Verde):**

Yo suelo empezar con algo básico, como la interfaz:
```js
function restar(a, b) {
  return 0;
}
```
y termino con:

```js
function restar(a, b) {
  return a-b;
}
```

**Refactorizar el código (Refactorización)**
Una vez que el test pasa, es momento de refactorizar el código para hacerlo más limpio, legible y eficiente sin que cambie el comportamiento. Durante esta fase, no se deben cambiar las interfaces ni la funcionalidad del código, solo la estructura interna.


## Actividades

### Price

Crear una función usando TDD y jest para formatear el precio como texto/string.
Por ejemplo: 

formatPrice(9.5) deberia dar $9.95
formatPrice(9.999) deberia dar $10.00
formatPrice(9.994) deberia dar $9.99
formatPrice(9.995) deberia dar $9.99
formatPrice(9.996) deberia dar $10.00
   

### Shopping Cart
Implementar un shopping cart con TDD. Tendrás que implementar las funciones basadas en las pruebas unitarias. Por ejemplo, addItemToCart:

```js
describe('Shopping Cart', ()=> {
   test('should add item to the cart', () => {
        const cart = addItemToCart({ nombre: 'Zapatos', cantidad: 2 });
        expect(cart).toHaveLength(1);
        expect(cart[0]).toHaveProperty('nombre', 'Zapatos');
        expect(cart[0]).toHaveProperty('cantidad', 2);
      });

      test('should add item to the cart', () => {
        const cart = addItemToCart({ nombre: 'Camisetas', cantidad: 4 });
        expect(cart).toHaveLength(2);
        expect(cart[1]).toHaveProperty('nombre', 'Camisetas');
        expect(cart[1]).toHaveProperty('cantidad', 4);
      });

      test('Cart length should be 2', () => {
        const cart = getCart();
        expect(cart).toHaveLength(2);
      });

      test('Cart length should be 0', () => {
        expect(getCart()).toHaveLength(2);
        resetCart();
        expect(getCart()).toHaveLength(0);
      });

})
```

## Shopping Cart con una clase
Ahora, vamos a implementar el Shopping Cart como una class.

```lua

+---------------------+
|    ShoppingCart     |
+---------------------+
| - items: Item[]     |
| - currency: string  |
+---------------------+
| +addItem(item: Item): void         |
| +removeItem(id: string): void      |
| +clearCart(): void                 |
| +getTotal(): number                |
| +formatTotal(): string             |
| +getItems(): Item[]                |
| +getItemCount(): number            |
+---------------------+

         ▲
         |
         | contains
         |
+---------------------+
|        Item         |
+---------------------+
| - id: string        |
| - name: string      |
| - price: number     |
| - quantity: number  |
+---------------------+

```


TO DO WITH SHoopping cart


## Respuestas


```js
function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

 test('price should be formatted correctly', () => {
        expect(formatPrice(9.5)).toBe("$9.50");
        expect(formatPrice(9.999)).toBe("$10.00");
        expect(formatPrice(9.994)).toBe("$9.99");
        expect(formatPrice(9.995)).toBe("$9.99");
        expect(formatPrice(9.996)).toBe("$10.00");
      });

// version avanzado con error
function formatPrice(amount) {
  if (typeof amount !== 'number') {
    throw new Error('El valor debe ser un número');
  }

  return `$${amount.toFixed(2)}`;
}

  test('debería lanzar error si el valor no es un número', () => {
        expect(() => formatPrice('abc')).toThrow('El valor debe ser un número');
      });



// Shopping cart
var cart = [];

function addItemToCart(item) {
    cart.push(item);
    return cart;
}

function getCart() {
  return cart;
}

function resetCart() {
  cart = [];
}
```