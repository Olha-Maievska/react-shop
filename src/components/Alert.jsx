import { useEffect, useContext } from 'react'
import { ShopContext } from '../context'

const Alert = () => {
  const { alertName: displayName = '', closeAlert } = useContext(ShopContext)

  useEffect(() => {
    const timer = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line
  }, [displayName])

  return (
    <div className="toast-container toast-box">
      <div className="toast">{displayName} добавлен в корзину</div>
    </div>
  )
}

export default Alert
