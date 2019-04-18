import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Hello {name}!</Text>
    </View>
  );
};

export default Greeting;

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
