import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import './add-new-item-container.styles.css';

const AddNewItemContainer = ({
  handleAddItemBtnClick,
  onChangeItemInputField,
  inputFieldValue
}) => (
  <div className="add-new-item-form">
    <label className="form-label">Add new items to list</label>
    <div style={{ display: 'flex' }}>
      <CustomInputField
        type={'text'}
        name={'new-grocery-item'}
        placeholder={'Wheat, Pulses, Maggie ...'}
        onChangeCallback={onChangeItemInputField}
        inputFieldValue={inputFieldValue}
      />
      <CustomButton btnClass={'btn-primary'} onClickCallback={handleAddItemBtnClick}>
        Add
      </CustomButton>
    </div>
  </div>
);

export default AddNewItemContainer;
