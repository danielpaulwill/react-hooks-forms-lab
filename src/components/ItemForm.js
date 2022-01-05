import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [nameInput, setNameInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Produce")

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: nameInput,
      category: categoryInput,
    };
    onItemFormSubmit(newItem)
    setNameInput("")
    setCategoryInput("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setNameInput(e.target.value)} value={nameInput} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategoryInput(e.target.value)} value={categoryInput}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;


// Add the new item to the list by updating state. To get the test passing, 
// you'll need to use a prop called onItemFormSubmit as a callback and pass 
// the new item to it.