import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const SplashScreen = () => {
  const { setSplashComplete } = useContext(AuthContext);

  useEffect(() => {
    // Mark splash as complete after 2 seconds
    // This will trigger AppNav to show the main app
    setTimeout(() => {
      setSplashComplete(true);
    }, 2000);
  }, [setSplashComplete]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mellogia</Text>
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
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1DB954',
  },
});

export default SplashScreen;

