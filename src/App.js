import React, { Component } from "react";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter-container">
        <h2>Counter App</h2>
        <div className="counter">
          <p>{count}</p>
          <button onClick={this.decrementCount}>Decrement</button>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
