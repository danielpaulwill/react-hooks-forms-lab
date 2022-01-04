import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange} />

{/* 
App
  Header
  ShoppingList
    ItemForm
    Filter
    Item */}


      {/* 
      Finally, after making those changes, you'll need to use that state value 
      to determine which items are being displayed on the page, similar to how 
      the category dropdown works. */}


      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
