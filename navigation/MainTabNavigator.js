/* eslint react/prop-types: off */

import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import LayoutScreen from '../screens/LayoutScreen';
import MiscScreen from '../screens/MiscScreen';
import FetchExample from '../components/FetchExample';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const HelloWorldStack = createStackNavigator({
  HelloWorld: HelloWorldScreen
});

HelloWorldStack.navigationOptions = {
  tabBarLabel: 'Hello World',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-globe${focused ? '' : '-outline'}`
          : 'md-globe'
      }
    />
  )
};

const LayoutStack = createStackNavigator({
  Layout: LayoutScreen
});

LayoutStack.navigationOptions = {
  tabBarLabel: 'Layout',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-grid${focused ? '' : '-outline'}`
          : 'md-grid'
      }
    />
  )
};

const MiscStack = createStackNavigator({
  Misc: MiscScreen
});

MiscStack.navigationOptions = {
  tabBarLabel: 'Misc',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-gift${focused ? '' : '-outline'}`
          : 'md-gift'
      }
    />
  )
};

const NetworkingStack = createStackNavigator({
  Networking: FetchExample
});

NetworkingStack.navigationOptions = {
  tabBarLabel: 'Network',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cloud-circle${focused ? '' : '-outline'}`
          : 'md-cloud-circle'
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  HelloWorldStack,
  LayoutStack,
  MiscStack,
  NetworkingStack,
  LinksStack,
  SettingsStack
});
