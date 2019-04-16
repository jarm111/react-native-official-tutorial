/* eslint react/prop-types: "off", no-console: "off" */

import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import robotDev from './assets/images/robot-dev.png';
import robotProd from './assets/images/robot-prod.png';
import spaceMono from './assets/fonts/SpaceMono-Regular.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([robotDev, robotProd]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
        'space-mono': spaceMono
      })
    ]);
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}
