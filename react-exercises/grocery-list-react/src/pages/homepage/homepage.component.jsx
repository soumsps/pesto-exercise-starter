import React, { Component } from 'react';
import GroceryItemsContainer from '../../components/grocery-items-container/grocery-items-container.component';
import './homepage.styles.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: [
        { name: 'Wheat', quantity: 1 },
        { name: 'Toor Dal', quantity: 2 }
      ]
    };
  }
  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <h3 className="page-title">Grocery List</h3>
        <div className="form-group">
          <lable>Add new item to list</lable>
          <input className="input-field" type="text" name="grocery-item" />
          <button>Add</button>
        </div>

        <GroceryItemsContainer />
      </div>
    );
  }
}

export default HomePage;
