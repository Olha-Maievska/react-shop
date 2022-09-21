import { useContext } from 'react'
import { ShopContext } from '../context'

const Cart = () => {
  const { order, basketShow } = useContext(ShopContext)

  const quantity = order.length

  return (
    <div className="cart blue-grey darken-1 white-text" onClick={basketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}

export default Cart
