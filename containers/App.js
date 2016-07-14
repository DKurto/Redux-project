import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { browserHistory } from 'react-router';

var clickHandler = () =>
{
  browserHistory.push('new_day')};

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Name: Ivan Ivanov</h2>
        <button onClick={clickHandler}>Add new day</button>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
      </div>
    )
  }
}
