import React from 'react';
import './custom-input-field.styles.css';

const CustomInputField = ({ onChangeCallback, ...props }) => (
  <input
    className="input-field"
    type={props.type}
    name={props.name}
    placeholder={props.placeholder}
    value={props.inputFieldValue}
    onChange={event => onChangeCallback(event.target.value)}
  />
);

export default CustomInputField;
