import React from 'react'
import GoodsItem from './GoodsItem'

const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props

  if (!goods.length) {
    return <h2>Nothing here</h2>
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} addToBasket={addToBasket} {...item} />
      ))}
    </div>
  )
}

export default GoodsList
