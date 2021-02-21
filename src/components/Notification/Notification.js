import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  state = {
    visible: true,
  };

  render() {
    const { message } = this.props;
    return <p className="Notification">{message}</p>;
  }
}

export default Notification;
