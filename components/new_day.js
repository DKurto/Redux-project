import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
var city, day, price;
var clickBack = () =>
{
  browserHistory.goBack()};
var clickCreate = () =>
{
  debugger;
};

/*var onCityInput = (e) =>
{
  /!*city = e.target.value;
  debugger;*!/
  };*/



export default class new_day extends Component {
  render() {
    return <div>
      <h2>Add new day </h2>
      <div><input class="City" placeholder="City" /*onChange={onCityInput}*/></input></div>
      <div><input class="Day" placeholder="Day"></input></div>
      <div><input class="Price" placeholder="Price"></input></div>
      <button onClick={clickCreate}>Create</button>
      <button onClick={clickBack}>Back</button>
    </div>
  }
}


/*export default connect(new_day)*/
