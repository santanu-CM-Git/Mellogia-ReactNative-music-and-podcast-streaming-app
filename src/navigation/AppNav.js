//import liraries
import React, { useContext } from 'react';
import { View, ActivityIndicator,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../context/AuthContext';
import { getNavigationRef } from './NavigationService'; // Import the navigation ref

const linking = {
  prefixes: ['https://mellogia.com', 'mellogia://'],
  config: {
    screens: {
      // Add deep linking screens here as needed
    },
  },
};

const AppNav = () => {
    const { isLoading, userToken, splashComplete } = useContext(AuthContext)

    if (isLoading && !splashComplete) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    
    return (
        <NavigationContainer ref={getNavigationRef()} linking={linking}>
            {!splashComplete ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    );
};

export default AppNav;
