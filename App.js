import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.simple_text}>{`Welcome to \nCode With Adnan`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
