import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const ButtonBasics = () => {
  const onPressButton = () => {
    Alert.alert('You tapped the button!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressButton} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressButton} title="Press Me" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={onPressButton} title="This looks great!" />
        <Button onPress={onPressButton} title="OK!" color="#841584" />
      </View>
    </View>
  );
};

export default ButtonBasics;
