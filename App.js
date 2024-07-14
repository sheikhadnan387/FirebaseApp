import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from './src/assets/logo.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  simple_text: {
    alignSelf: 'center',
    color: '#02989d',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
