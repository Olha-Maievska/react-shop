import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="indigo lighten-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/Olha-Maievska/react-shop">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
