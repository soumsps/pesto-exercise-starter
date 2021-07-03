import React from 'react';
import GroceryItem from '../grocery-item/grocery-item.component';
import './grocery-items-container.styles.css';

const GroceryItemsContainer = ({
  groceryItems,
  handleDecrementItemBtnClick,
  handleIncrementItemBtnClick,
  onClickTogglePurchaseStatus
}) => {
  return (
    <ul className="grocery-items-container">
      {groceryItems.map((item, key) => (
        <GroceryItem
          key={key}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          purchased={item.purchased}
          handleIncrementItemBtnClick={handleIncrementItemBtnClick}
          handleDecrementItemBtnClick={handleDecrementItemBtnClick}
          togglePurchaseCallback={onClickTogglePurchaseStatus}
        />
      ))}
    </ul>
  );
};

export default GroceryItemsContainer;
