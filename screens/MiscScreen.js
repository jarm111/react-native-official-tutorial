import React from 'react';
import PizzaTranslator from '../components/PizzaTranslator';
import ButtonBasics from '../components/ButtonBasics';
import Touchables from '../components/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from '../components/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from '../components/FlatListBasics';
import SectionListBasics from '../components/SectionListBasics';

const MiscScreen = () => {
  const components = [
    <PizzaTranslator />,
    <ButtonBasics />,
    <Touchables />,
    <IScrolledDownAndWhatHappenedNextShockedMe />,
    <FlatListBasics />,
    <SectionListBasics />
  ];

  return components[5];
};

export default MiscScreen;
