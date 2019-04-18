import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    );
  }

  render() {
    const { isShowingText } = this.state;
    const { text } = this.props;

    if (!isShowingText) {
      return null;
    }

    return <Text>{text}</Text>;
  }
}

Blink.propTypes = {
  text: PropTypes.string.isRequired
};
