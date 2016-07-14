import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, deleteCharge } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
class ProductsContainer extends Component {
  render() {
    const { products } = this.props;
    return (
      <ProductsList title="Days">
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => this.props.addToCart(product.id)}
            onDeleteClicked={() => this.props.deleteCharge(product.id)}
            />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    charge: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    display: PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteCharge: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  { addToCart, deleteCharge}
)(ProductsContainer)
