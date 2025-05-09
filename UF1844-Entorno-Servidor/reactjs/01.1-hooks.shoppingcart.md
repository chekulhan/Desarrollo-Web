## 🧱 Componente vs. 🔧 Hook personalizado

|                     | **Componente de React**                                 | **Hook Personalizado**                                            |
|---------------------|---------------------------------------------------------|-------------------------------------------------------------------|
| **Propósito**        | Renderiza la interfaz de usuario (UI)                   | Encapsula y reutiliza lógica                                      |
| **Valor de retorno** | JSX (interfaz visual)                                   | Datos y funciones (no retorna JSX)                                |
| **Convención de nombre** | `PascalCase` (ej. `MiComponente`)                  | Debe comenzar con `use` (ej. `useCart`, `useAuth`)                |
| **Uso**              | Se utiliza dentro del JSX o en rutas                    | Solo se puede usar dentro de componentes de React u otros hooks   |
| **Ejemplo de retorno** | `<div>Hola</div>`                                     | `{ count, increment }`                                            |
| **Dónde se usa**     | En cualquier lugar del árbol de componentes             | Solo dentro de componentes de React o de otros hooks              |



Ejemplo básico de un hook
```jsx
// useMyHook.js
import { useState } from 'react';

export function useMyHook() {
  const [value, setValue] = useState(0);

  const increment = () => setValue(v => v + 1);

  return {
    value,
    increment
  };
}
```
y para usarlo, :

```jsx

// MyComponent.js
import React from 'react';
import { useMyHook } from './useMyHook';

const MyComponent = () => {
  const { value, increment } = useMyHook();

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};


```




## Shopping Cart

Crear una carpeta /hooks con useShoppingCart.jsx

```jsx
import {useState} from 'react';

export default function useShoppingCart(currency = 'USD') {

    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem])
    }
    const clear = () => {
        setItems([])
    }

    return {
        addItem,
        clear,
        items
    }

}
```

Ahora, usar el Hook detro de un componente:

```jsx

import React, {useState} from 'react';
import useShoppingCart from '../hooks/useShoppingCart';

const ShoppingCartComponent = () => {
    const {addItem, clear, items } = useShoppingCart("Eur");

    const handleAddItem = () => {
        const newItem =  {
            id: Date.now(),
            nombre: 'Apple',
            precio: 1.50,
            cantidad: 1,
        };

        addItem(newItem)
        

        alert(`Item added: ${newItem.nombre}`);
    };

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <button onClick={handleAddItem}>Add Item</button>

            <h2>Items:</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.nombre} - ${item.precio} x {item.cantidad}
                       
                    </li>
                ))}
            </ul>

      
        </div>
    );
};

export default ShoppingCartComponent;
```




