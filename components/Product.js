import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const { price, quantity, title, charge } = this.props;
    return <div> {title} - {charge} - &#36;{price} {quantity ? `x ${quantity}` : null} </div>
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  charge: PropTypes.string
}
