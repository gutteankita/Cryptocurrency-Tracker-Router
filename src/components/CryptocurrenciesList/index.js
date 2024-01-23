// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  render() {
    const {cryptocurrencyList} = this.props
    return (
      <div className="cryptocurrency-list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />

        <div className="item-container">
          <div className="headers">
            <li className="head">Coin Type</li>
            <div className="coin-types">
              <li className="head head1">USD</li>
              <li className="head head2">EURO</li>
            </div>
          </div>
          <ul>
            {cryptocurrencyList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                cryptocurrencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyList
