import React from 'react';
import PizzaTranslator from '../components/PizzaTranslator';
import ButtonBasics from '../components/ButtonBasics';
import Touchables from '../components/Touchables';

const MiscScreen = () => {
  const components = [<PizzaTranslator />, <ButtonBasics />, <Touchables />];

  return components[2];
};

export default MiscScreen;
