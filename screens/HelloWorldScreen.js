import React from 'react';
import { View } from 'react-native';
import HelloWorld from '../components/HelloWorld';
import Bananas from '../components/Bananas';

const HelloWorldScreen = () => {
  return (
    <View>
      <HelloWorld />
      <Bananas />
    </View>
  );
};

export default HelloWorldScreen;
