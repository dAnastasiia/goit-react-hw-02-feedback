import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = e => {
    const a = e.target.name;

    this.setState(prevState => ({
      [a]: prevState[a] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    return values.reduce((total, value) => {
      total += value;
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    const good = this.state.good;
    const total = this.countTotalFeedback();

    if (total !== 0) {
      percentage = Math.round((good / total) * 100);
    }

    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <p>Please leave feedback</p>
        <button type="button" name="good" onClick={this.handleButtonClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleButtonClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleButtonClick}>
          Bad
        </button>

        <p>Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>

        <p>Total: {total}</p>
        <p>Positive feedback: {positive}%</p>
      </>
    );
  }
}

export default App;
