// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencyList: [],
    isSpinning: true,
  }

  componentDidMount = () => {
    this.getcryptocurrencyList()
  }

  getcryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedCryptocurrencyList = data.map(eacItem => ({
      id: eacItem.id,
      currencyLogo: eacItem.currency_logo,
      currencyName: eacItem.currency_name,
      euroValue: eacItem.euro_value,
      usdValue: eacItem.usd_value,
    }))
    this.setState({
      cryptocurrencyList: updatedCryptocurrencyList,
      isSpinning: false,
    })
  }

  render() {
    const {cryptocurrencyList, isSpinning} = this.state
    return (
      <div className="cryptocurrency-tracker-container">
        {isSpinning ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              className="loader"
            />
          </div>
        ) : (
          <CryptocurrencyList cryptocurrencyList={cryptocurrencyList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
