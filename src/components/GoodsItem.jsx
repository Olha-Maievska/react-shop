import React from 'react'

const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props
  const { finalPrice } = price
  const { full_background } = displayAssets[0]
  const name = displayName[0].toUpperCase() + displayName.slice(1).toLowerCase()

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{displayDescription || 'Нет описания'} </p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ mainId, displayName, price })}
        >
          Купить
        </button>
        <span
          className="right"
          style={{ fontSize: '1.8rem', color: '#dd2c00' }}
        >
          {finalPrice} грн.
        </span>
      </div>
    </div>
  )
}

export default GoodsItem
