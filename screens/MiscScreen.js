import React from 'react';
import PizzaTranslator from '../components/PizzaTranslator';
import ButtonBasics from '../components/ButtonBasics';
import Touchables from '../components/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from '../components/IScrolledDownAndWhatHappenedNextShockedMe';

const MiscScreen = () => {
  const components = [
    <PizzaTranslator />,
    <ButtonBasics />,
    <Touchables />,
    <IScrolledDownAndWhatHappenedNextShockedMe />
  ];

  return components[3];
};

export default MiscScreen;
