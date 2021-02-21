import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Statistics.scss';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className="Statistics">
        <p className="Statistics__item">Good: {good}</p>
        <p className="Statistics__item">Neutral: {neutral}</p>
        <p className="Statistics__item">Bad: {bad}</p>

        <p className="Statistics__item">Total: {total}</p>
        <p className="Statistics__item">
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

export default Statistics;
