import { useContext } from 'react'
import { ShopContext } from '../context'
import GoodsItem from './GoodsItem'

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext)

  if (!goods.length) {
    return <h2>Nothing here</h2>
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  )
}

export default GoodsList
