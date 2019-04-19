import React from 'react';
import { View } from 'react-native';

const AlignItemsBasics = () => {
  return (
    // Try setting `alignItems` to 'flex-start' or 'stretch'.
    // Try setting `justifyContent` to `flex-end` or 'center'.
    // Try setting `flexDirection` to `row` or 'column'.
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      <View style={{ height: 50, backgroundColor: 'skyblue' }} />
      <View style={{ height: 100, backgroundColor: 'steelblue' }} />
    </View>
  );
};

export default AlignItemsBasics;
