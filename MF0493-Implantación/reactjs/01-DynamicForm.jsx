import React, { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: { value: action.value, error: action.value ? '' : 'Required' },
      };
    default:
      return state;
  }
};

const initialState = {
  name: { value: '', error: '' },
  email: { value: '', error: '' },
};

export default function DynamicForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formState, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(formState).map(([field, { value, error }]) => (
        <div key={field}>
          <input
            name={field}
            value={value}
            onChange={handleChange}
            placeholder={field}
          />
          {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
