import { useReducer } from "react";

// Paso 1: Definir la funcion reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

// Paso 2: asignar el estado inicial
const initialState = { count: 0 };

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
    /* 
        state es igual a count = getter
        dispatch es la accion/boton para cambiar el state
    */
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'decrement' })}>➖</button>
      <button onClick={() => dispatch({ type: 'increment' })}>➕</button>
      <button onClick={() => dispatch({ type: 'reset' })}>🔄 Reset</button>
    </div>
  );
}

export default ReducerCounter;