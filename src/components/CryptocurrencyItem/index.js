// Write your JS code here

import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {cryptocurrencyDetails} = this.props
    const {id, currencyLogo, currencyName, euroValue, usdValue} =
      cryptocurrencyDetails

    return (
      <div className="cryptocurrency-item-container">
        <div className="logo-name">
          <img src={currencyLogo} className="logo" alt={currencyName} />
          <p className="name">{currencyName}</p>
        </div>
        <div className="coin-type">
          <p className="value">{usdValue}</p>
          <p className="value">{euroValue}</p>
        </div>
      </div>
    )
  }
}
export default CryptocurrencyItem
