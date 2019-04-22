import React from 'react';
import PizzaTranslator from '../components/PizzaTranslator';
import ButtonBasics from '../components/ButtonBasics';

const MiscScreen = () => {
  const components = [<PizzaTranslator />, <ButtonBasics />];

  return components[1];
};

export default MiscScreen;
