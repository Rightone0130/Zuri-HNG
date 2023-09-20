import React, { useState, useRef } from "react";

function ListSort() {
  const [fruitItems, setFruitItems] = useState([
    "Apple",
    "Banana",
    "Orange",
  ]);
  const [newFruitItem, setNewFruitItem] = useState("");

  // Save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // Handle drag sorting
  const handleSort = () => {
    // Duplicate items
    let _fruitItems = [...fruitItems];

    // Remove and save the dragged item content
    const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];

    // Switch the position
    _fruitItems.splice(dragOverItem.current, 0, draggedItemContent);

    // Reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // Update the actual array
    setFruitItems(_fruitItems);
  };

  // Handle name change
  const handleNameChange = (e) => {
    setNewFruitItem(e.target.value);
  };

  // Handle new item addition
  const handleAddItem = () => {
    const _fruitItems = [...fruitItems];
    _fruitItems.push(newFruitItem);
    setFruitItems(_fruitItems);
  };

  return (
    <div className="app">
      <h2>Fruit List</h2>

      <div className="input-group">
        <input
          type="text"
          name="fruitName"
          placeholder="e.g Banana"
          onChange={handleNameChange}
        />
        <button className="btn" onClick={handleAddItem}>
          Add item
        </button>
      </div>

      <div className="list-sort">
        {fruitItems.map((item, index) => (
        
          <div
            key={index}
            className="list-item"
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >  <img src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1695082870/member-user-personal-data-button-human-avatar-character-social-character-profile-3d-icon_92753-13151-removebg-preview-transformed_weouo4.png" />
            <i className="fa-solid fa-bars"></i>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListSort;
