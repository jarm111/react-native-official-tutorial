import React from 'react';
import { View } from 'react-native';
import Blink from './Blink';

const BlinkLines = () => {
  return (
    <View>
      <Blink text="I love to blink" />
      <Blink text="Yes blinking is so great" />
      <Blink text="Why did they ever take this out of HTML" />
      <Blink text="Look at me look at me look at me" />
    </View>
  );
};

export default BlinkLines;
