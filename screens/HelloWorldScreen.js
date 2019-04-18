import React from 'react';
import { View } from 'react-native';
import HelloWorld from '../components/HelloWorld';
import Bananas from '../components/Bananas';
import LotsOfGreetings from '../components/LotsOfGreetings';

const HelloWorldScreen = () => {
  return (
    <View>
      <HelloWorld />
      <Bananas />
      <LotsOfGreetings />
    </View>
  );
};

export default HelloWorldScreen;
