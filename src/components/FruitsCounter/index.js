import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {bananaCount: 0, mangoCount: 0}

  mangoIncrease = () => {
    const {mangoCount} = this.state
    this.setState({mangoCount: mangoCount + 1})
  }

  bananaIncrease = () => {
    const {bananaCount} = this.state
    this.setState({bananaCount: bananaCount + 1})
  }

  render() {
    const {bananaCount, mangoCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="main-heading">
            Bob ate <span className="fruit-color">{mangoCount}</span> mangoes{' '}
            <span className="fruit-color">{bananaCount}</span> bananas
          </h1>
          <div className="fruits">
            <div className="fruit-direction">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                onClick={this.mangoIncrease}
                className="fruit-button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-direction">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                onClick={this.bananaIncrease}
                className="fruit-button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
