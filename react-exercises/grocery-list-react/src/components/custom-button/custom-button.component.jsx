import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ children, onClickCallback, itemID, ...props }) => (
  <button
    className={`btn ${props.btnClass}`}
    data-item-id={itemID}
    onClick={event => onClickCallback(event)}
  >
    {children}
  </button>
);

export default CustomButton;
