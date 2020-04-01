import React, { Component } from 'react';
import GroceryItemsContainer from '../../components/grocery-items-container/grocery-items-container.component';
import AddNewItemContainer from '../../components/add-new-item-container/add-new-item-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './homepage.styles.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: [
        { id: '_l4wnop', name: 'Wheat', quantity: 1, purchased: false },
        { id: '_l4wsy2', name: 'Toor Dal', quantity: 2, purchased: false }
      ],
      newItem: { name: '', quantity: 1 }
    };

    this.onChangeItemInputField = this.onChangeItemInputField.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearAllItems = this.clearAllItems.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.togglePurchaseStatus = this.togglePurchaseStatus.bind(this);
  }

  generateID() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 6)
    );
  }

  addItem() {
    console.log('new item added');
    const currentItems = this.state.groceryItems;
    const newItemName = this.state.newItem.name;
    const newItemQuantity = this.state.newItem.quantity;

    if (newItemName !== '') {
      if (currentItems.some(item => item.name.toLowerCase() === newItemName.toLowerCase())) {
        currentItems.forEach(item => {
          if (item.name.toLowerCase() === newItemName.toLowerCase()) item.quantity += 1;
        });
      } else {
        currentItems.push({
          id: this.generateID(),
          name: newItemName,
          quantity: newItemQuantity,
          purchased: false
        });
      }
      this.setState({ groceryItems: currentItems });
      this.setState({
        newItem: {
          name: '',
          quantity: 1
        }
      });
    }
  }

  clearAllItems() {
    console.log('All items cleared');
    this.setState({ groceryItems: [] });
  }

  togglePurchaseStatus(event) {
    const itemID = event.target.getAttribute('data-item-id');
    const currentItems = this.state.groceryItems;
    currentItems.forEach(item => {
      if (item.id === itemID) {
        item.purchased = !item.purchased;
      }
    });

    this.setState({ groceryItems: currentItems });
  }

  increaseQuantity(event) {
    const itemID = event.target.getAttribute('data-item-id');
    const currentItems = this.state.groceryItems;

    currentItems.forEach(item => {
      if (item.id === itemID && !item.purchased) item.quantity += 1;
    });

    this.setState({ groceryItems: currentItems });
  }

  decreaseQuantity(event) {
    const itemID = event.target.getAttribute('data-item-id');
    const currentItems = this.state.groceryItems;
    currentItems.forEach(item => {
      if (item.id === itemID && item.quantity > 1 && !item.purchased) {
        item.quantity -= 1;
      }
    });

    this.setState({ groceryItems: currentItems });
  }

  onChangeItemInputField(inputText) {
    this.setState(state => {
      return {
        newItem: {
          name: inputText,
          quantity: state.newItem.quantity
        }
      };
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h3 className="page-title">Grocery List</h3>

        <AddNewItemContainer
          handleAddItemBtnClick={this.addItem}
          onChangeItemInputField={this.onChangeItemInputField}
          inputFieldValue={this.state.newItem.name}
        />
        <GroceryItemsContainer
          groceryItems={this.state.groceryItems}
          handleIncrementItemBtnClick={this.increaseQuantity}
          handleDecrementItemBtnClick={this.decreaseQuantity}
          onClickTogglePurchaseStatus={this.togglePurchaseStatus}
        />
        <CustomButton btnClass={'btn-danger-outline'} onClickCallback={this.clearAllItems}>
          Clear List
        </CustomButton>
      </div>
    );
  }
}

export default HomePage;
