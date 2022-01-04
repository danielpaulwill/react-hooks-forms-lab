import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBar, setSearchBar] = useState("");

console.log(items.includes(searchBar))

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchBar(e.target.value)
  }
  
  // const searchItemsToDisplay = items.filter((item) => {
  //   item.includes(searchBar)
  //   return item
  // })
  // console.log(searchItemsToDisplay)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search={searchBar} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
