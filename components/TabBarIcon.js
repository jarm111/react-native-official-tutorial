import React from 'react';
import { Icon } from 'expo';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const TabBarIcon = ({ name, focused }) => {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};
