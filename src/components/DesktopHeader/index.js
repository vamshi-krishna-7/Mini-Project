import {Link, withRouter} from 'react-router-dom'

import {CiLogout} from 'react-icons/ci'
import Cookies from 'js-cookie'

import './index.css'

const DesktopHeader = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://i.ibb.co/zfS2zQr/Logo-2.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <ul className="list-items-container">
        <li className="list-item">
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/cart" className="link-item">
            Cart
          </Link>
        </li>
        <li className="list-item">
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            <CiLogout /> Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(DesktopHeader)
