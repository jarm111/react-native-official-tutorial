import React from 'react';
import FixedDimensionsBasics from '../components/FixedDimensionsBasics';
import FlexDimensionsBasics from '../components/FlexDimensionsBasics';
import JustifyContentBasics from '../components/JustifyContentBasics';
import AlignItemsBasics from '../components/AlignItemsBasics';

const LayoutScreen = () => {
  const layouts = [
    <FixedDimensionsBasics />,
    <FlexDimensionsBasics />,
    <JustifyContentBasics />,
    <AlignItemsBasics />
  ];

  return layouts[3];
};

export default LayoutScreen;
