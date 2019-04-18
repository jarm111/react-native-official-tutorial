import React from 'react';
import { View } from 'react-native';
import HelloWorld from '../components/HelloWorld';
import Bananas from '../components/Bananas';
import LotsOfGreetings from '../components/LotsOfGreetings';
import BlinkLines from '../components/BlinkLines';
import LotsOfStyles from '../components/LotsOfStyles';

const HelloWorldScreen = () => {
  return (
    <View>
      <HelloWorld />
      <Bananas />
      <LotsOfGreetings />
      <BlinkLines />
      <LotsOfStyles />
    </View>
  );
};

export default HelloWorldScreen;
