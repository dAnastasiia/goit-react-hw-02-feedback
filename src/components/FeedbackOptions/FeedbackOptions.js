import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.scss';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return options.map(name => (
      <button
        type="button"
        className="button"
        name={name}
        onClick={onLeaveFeedback}
        key={name}
      >
        {name}
      </button>
    ));
  }
}

export default FeedbackOptions;
