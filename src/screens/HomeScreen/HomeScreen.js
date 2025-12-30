import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { rf, hp } from '../../utils/responsive';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mellogia</Text>
      <Text style={styles.subtitle}>Your Music Streaming App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: rf(4),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1.2),
  },
  subtitle: {
    fontSize: rf(2.25),
    color: '#b3b3b3',
  },
});

export default HomeScreen;

