import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {PiUserCircleLight} from 'react-icons/pi'
import {CgLock} from 'react-icons/cg'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, isChecked} = this.state
    const passShowHide = isChecked ? 'text' : 'password'
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>

        <div className="user-pass-input-container">
          <CgLock />
          <input
            type={passShowHide}
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <div className="user-pass-input-container">
          <PiUserCircleLight className="user-icon" />
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={this.onChangeUsername}
          />
        </div>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, isChecked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://i.ibb.co/zfS2zQr/Logo-2.png"
            className="login-website-logo"
            alt="login website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="checkbox-container">
            <input
              id="check-box"
              type="checkbox"
              onChange={this.onChangeCheckBox}
              checked={isChecked}
            />
            <label htmlFor="check-box" className="input-label">
              Show Password
            </label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
