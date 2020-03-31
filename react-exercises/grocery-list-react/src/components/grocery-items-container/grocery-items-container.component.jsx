import React from 'react';
import GroceryItem from '../grocery-item/grocery-item.component';
import './grocery-items-container.styles.css';

const GroceryItemsContainer = () => (
  <div className="grocery-items-container">
    <ul>
      <GroceryItem />
      <GroceryItem />
    </ul>
  </div>
);

export default GroceryItemsContainer;
