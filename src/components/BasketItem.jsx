const BasketItem = (props) => {
  const {
    mainId,
    displayName,
    price,
    quantity,
    deleteFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props
  const { finalPrice } = price

  return (
    <li className="collection-item">
      {displayName}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(mainId)}
      >
        remove
      </i>
      x{quantity}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(mainId)}
      >
        add
      </i>{' '}
      = {finalPrice * quantity} грн.
      <span
        className="secondary-content"
        onClick={() => deleteFromBasket(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  )
}

export default BasketItem
