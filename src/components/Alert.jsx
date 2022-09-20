import { useEffect } from 'react'

const Alert = (props) => {
  const { displayName = '', handleCloseAlert = Function.prototype } = props

  useEffect(() => {
    const timer = setTimeout(handleCloseAlert, 3000)

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
