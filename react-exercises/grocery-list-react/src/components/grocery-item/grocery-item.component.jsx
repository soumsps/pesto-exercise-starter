import React from 'react';
import './grocery-item.styles.css';

const GroceryItem = () => (
  <li className="item-container">
    <span className="item-name">Wheat</span>
    <span className="quantity">(x2)</span>
    <button className="remove-item">Remove</button>
  </li>
);

export default GroceryItem;
