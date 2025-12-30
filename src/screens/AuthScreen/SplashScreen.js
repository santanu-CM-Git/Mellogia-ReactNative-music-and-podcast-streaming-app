import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { rf } from '../../utils/responsive';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to sign up screen after 2 seconds
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, [navigation]);

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
    fontSize: rf(6),
    fontWeight: 'bold',
    color: '#1DB954',
  },
});

export default SplashScreen;

