import { useEffect, useContext } from 'react'
import { API_URL, API_KEY } from '../config'
import Cart from './Cart'
import GoodsList from './GoodsList'
import Preloader from './Preloader'
import BasketList from './BasketList'
import Alert from './Alert'
import { ShopContext } from '../context'

const Shop = () => {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext)

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop)
      })
    // eslint-disable-next-line
  }, [])

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  )
}

export default Shop
