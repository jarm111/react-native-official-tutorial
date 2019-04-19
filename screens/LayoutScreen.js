import React from 'react';
import { View } from 'react-native';
import FixedDimensionsBasics from '../components/FixedDimensionsBasics';
import FlexDimensionsBasics from '../components/FlexDimensionsBasics';

const LayoutScreen = () => {
  const layouts = [<FixedDimensionsBasics />, <FlexDimensionsBasics />];

  return <View style={{ flex: 1 }}>{layouts[0]}</View>;
};

export default LayoutScreen;
