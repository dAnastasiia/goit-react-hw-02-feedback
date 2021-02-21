import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className="Section">
        <p className="Section__title">{title}</p>
        <div>{children}</div>
      </div>
    );
  }
}

export default Section;
