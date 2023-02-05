import { Component } from "react";

class AppCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.startCount,
      min: -10,
      max: 10,
    };
  }

  increment = () => {
    this.setState((state) => {
      if (state.counter < state.max) {
        return {
          counter: state.counter + 1,
        };
      }
    });
  };

  decrement = () => {
    this.setState((state) => {
      if (state.counter > state.min) {
        return {
          counter: state.counter - 1,
        };
      }
    });
  };

  getRandomInt = () => {
    const min = Math.ceil(this.state.min);
    const max = Math.floor(this.state.max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  random = () => {
    this.setState(() => ({
      counter: this.getRandomInt(),
    }));
  };

  reset = () => {
    this.setState(() => ({
      counter: this.props.startCount,
    }));
  };

  render() {
    return (
      <div className="mb-3">
        <div>{this.state.counter}</div>

        <button className="me-3" onClick={this.decrement}>
          Decrement
        </button>

        <button className="me-3" onClick={this.increment}>
          Increment
        </button>

        <button className="me-3" onClick={this.random}>
          Random
        </button>

        <button className="me-3" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default AppCounter;
