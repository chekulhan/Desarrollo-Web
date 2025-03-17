# Progmación Asíncronas en React

1. Actualización del estado (useState y setState)
Las actualizaciones del estado son asíncronas, lo que significa que React puede agruparlas y procesarlas después de la renderización.

Ejemplo:

```jsx
const [count, setCount] = useState(0);

const incrementar = () => {
  setCount(count + 1);  // La actualización no es inmediata
  console.log(count);    // Loggea el valor anterior, no el actualizado
};
```


2. Re-renderización de componentes
La renderización de un componente es asíncrona. Cuando se actualiza el estado, React programa la renderización del componente en lugar de hacerla inmediatamente.

Ejemplo:

```jsx
const [text, setText] = useState('Hola');

// Cambia el estado y re-renderiza el componente
setText('Nuevo texto');
```


3. Efectos secundarios (useEffect)
useEffect es asíncrono y se ejecuta después de que el componente se ha renderizado. Se utiliza para realizar tareas como la recuperación de datos, suscripción a eventos, etc.

Ejemplo:

```jsx
useEffect(() => {
  console.log("Este efecto se ejecuta después de renderizar");
  fetchData();  // Ejemplo de fetch de datos
}, []);
```

4. Manejadores de eventos
Los manejadores de eventos (como onClick, onChange) también son asíncronos en React, ya que las actualizaciones de estado se procesan de forma asíncrona dentro del ciclo de eventos.

Ejemplo:

```jsx
const handleClick = () => {
  setCount(count + 1);
};
```


5. Función de actualización de estado con prevState
La actualización de estado puede depender del estado previo, por lo que es mejor usar una actualización funcional para asegurar que se utiliza el estado más reciente.

Ejemplo:

```jsx
setCount(prevCount => prevCount + 1);  // Utiliza el estado previo para la actualización
```

Existen más, como la carga perezosa de componentes (React.lazy) y el suspense para la carga de datos.
