import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

const LotsOfGreetings = () => {
  return (
    <View style={{ alignItems: 'center', top: 50 }}>
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
