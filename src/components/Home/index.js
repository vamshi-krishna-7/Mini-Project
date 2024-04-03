import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import DesktopHeader from '../DesktopHeader'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const api = 'https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4'

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(api, options)
  }

  render() {
    return <DesktopHeader />
  }
}

export default Home
