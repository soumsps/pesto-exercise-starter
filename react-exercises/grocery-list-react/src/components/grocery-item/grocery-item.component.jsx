import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './grocery-item.styles.css';

const GroceryItem = ({
  id,
  name,
  quantity,
  handleIncrementItemBtnClick,
  handleDecrementItemBtnClick,
  togglePurchaseCallback,
  purchased
}) => (
  <li className="item-container">
    <div>
      <span
        className="item-name"
        data-item-id={id}
        onClick={event => togglePurchaseCallback(event)}
      >
        {name}
      </span>
      {purchased ? (
        <span className={`quantity-badge badge-danger`}>{`Purchased`}</span>
      ) : (
        <span className={`quantity-badge badge-success`}>{`x${quantity}`}</span>
      )}
    </div>
    <div>
      <CustomButton
        btnClass={'btn-secondary btn-circle increase-decrease-btn'}
        onClickCallback={handleIncrementItemBtnClick}
        itemID={id}
      >
        +
      </CustomButton>
      <CustomButton
        btnClass={'btn-secondary btn-circle increase-decrease-btn'}
        onClickCallback={handleDecrementItemBtnClick}
        itemID={id}
      >
        -
      </CustomButton>
    </div>
  </li>
);

export default GroceryItem;
