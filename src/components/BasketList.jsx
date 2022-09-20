import React from 'react'
import BasketItem from './BasketItem'

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    deleteFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props

  const totalPrice = order.reduce((sum, item) => {
    const { finalPrice } = item.price
    return sum + finalPrice * item.quantity
  }, 0)

  return (
    <div className="basket-wrapper">
      <ul className="collection basket-list">
        <li className="collection-item active" style={{ fontSize: '1.5rem' }}>
          Корзина
        </li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.mainId}
              {...item}
              deleteFromBasket={deleteFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость:{' '}
          <span style={{ fontSize: '1.3rem', fontWeight: 600 }}>
            {totalPrice} грн.
          </span>
        </li>
        <li className="collection-item center-align">
          <button className="btn btn-small">Оформить</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  )
}

export default BasketList
