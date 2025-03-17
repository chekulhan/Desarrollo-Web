import { useState } from "react";

export default function MiArray() {
  const [items, setItems] = useState([]);

  // demonstrar con este funcion
  const spreading = () => {
    const numbers = [1, 2, 3];
    items.push(4);  // ❌ Modifica



    console.log(`numbers old ${numbers}`);
    const newNumbers = [...numbers, 4, 5]; 
    console.log(newNumbers); // [1, 2, 3, 4, 5]
    

    const user = { name: "Alice", age: 25 };
    console.log(`user old ${user}`);
    const updatedUser = { ...user, age: 30 }; 
    console.log(updatedUser); // { name: "Alice", age: 26 }

  }

  spreading();

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
