import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
