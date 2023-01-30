// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increaseSpeed = () => {
    this.setState(lastValue => {
      if (lastValue.count === 200) {
        return {count: lastValue.count}
      }
      return {count: lastValue.count + 10}
    })
  }

  decreaseSpeed = () => {
    this.setState(lastValue => {
      if (lastValue.count === 0) {
        return {count: lastValue.count}
      }
      return {count: lastValue.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="countText">Speed Is {count}mph</h1>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonContainer">
          <button
            className="button incrementButton"
            type="button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="button decrementButton"
            type="button"
            onClick={this.decreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
