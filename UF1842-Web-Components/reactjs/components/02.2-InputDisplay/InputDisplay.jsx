import React, { useState } from 'react';

const InputDisplay = () => {
  // State to track the input value
  const [inputText, setInputText] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setInputText(event.target.value);  // Update the state as the user types
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleChange}  // Update state on input change
        placeholder="Type something..."
      />
      <div style={{ marginTop: '20px', fontSize: '18px', color: 'blue' }}>
        {inputText}  {/* Display the input text below the input box */}
      </div>
    </div>
  );
};

export default InputDisplay;
