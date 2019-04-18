import React from 'react';
import { View } from 'react-native';
import HelloWorld from '../components/HelloWorld';
import Bananas from '../components/Bananas';
import LotsOfGreetings from '../components/LotsOfGreetings';
import BlinkLines from '../components/BlinkLines';

const HelloWorldScreen = () => {
  return (
    <View>
      <HelloWorld />
      <Bananas />
      <LotsOfGreetings />
      <BlinkLines />
    </View>
  );
};

export default HelloWorldScreen;
