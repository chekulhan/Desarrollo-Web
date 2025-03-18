# useState

## Variables Primitivos en React
✅ Los datos primitivos (números, strings, booleanos) son **inmutables**, por lo que no se necesita el operador spread (...).

✅ Puedes actualizar el estado directamente con setState, ya que React detecta los nuevos valores:

```jsx
setCount(count + 1); 
setText(text + " nuevo");
setFlag(!flag);
```

Usa la función prevState cuando el nuevo estado dependa del anterior para evitar errores en actualizaciones rápidas:

```jsx
setCount(prevCount => prevCount + 1);  // ✅ Mejor práctica
```

## React No Permite la Mutación Directa del Estado
El estado en React debe ser inmutable, lo que significa que nunca debes modificarlo directamente. En su lugar, siempre debes crear un nuevo objeto o array y actualizarlo con la función setState (o el setter de useState en componentes funcionales).

*spread operator*: "el operador de propagación" or "el operador de expansión".


**Incorrecto**
```jsx
const [items, setItems] = useState(["Item 1", "Item 2"]);

const addItem = () => {
  items.push("Item 3");  // ❌ Modifica el estado directamente
  setItems(items);        // ❌ React podría no detectar el cambio
};
```

❌ ¿Por qué está mal?
1. items.push("Item 3") modifica el array original, en lugar de crear uno nuevo.
2. React podría no volver a renderizar el componente porque la referencia de items sigue siendo la misma.
3. Esto puede causar errores inesperados y comportamientos impredecibles.

```jsx
const [items, setItems] = useState(["Item 1", "Item 2"]);

const addItem = () => {
  setItems([...items, "Item 3"]); // ✅ Crea un nuevo array
};

```

✅ ¿Por qué está bien?
1. [...] crea un nuevo array, sin modificar el original.
2. setItems(nuevoArray) permite que React detecte el cambio y renderice nuevamente.

```jsx
const updateAge = () => {
  setUser({ ...user, age: 26 });  // ✅ Crea un nuevo objeto
};
```