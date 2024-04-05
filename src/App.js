import React, { Component } from "react";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  decrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h2>Counter App</h2>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;
