import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ children, onClickCallback, itemID, ...props }) => (
  <button
    className={`btn ${props.btnClass} ${props.btnClassDisabled}`}
    data-item-id={itemID}
    onClick={event => onClickCallback(event)}
    disabled={props.isDisabled}
  >
    {children}
  </button>
);

export default CustomButton;
