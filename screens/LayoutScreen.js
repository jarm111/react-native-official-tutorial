import React from 'react';
import FixedDimensionsBasics from '../components/FixedDimensionsBasics';
import FlexDimensionsBasics from '../components/FlexDimensionsBasics';
import JustifyContentBasics from '../components/JustifyContentBasics';

const LayoutScreen = () => {
  const layouts = [
    <FixedDimensionsBasics />,
    <FlexDimensionsBasics />,
    <JustifyContentBasics />
  ];

  return layouts[2];
};

export default LayoutScreen;
