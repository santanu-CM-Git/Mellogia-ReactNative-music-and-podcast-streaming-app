import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import store from './src/store/store';
import "./ignoreWarnings";
import OfflineNotice from './src/utils/OfflineNotice';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    // Hide splash screen
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          translucent={false}
          backgroundColor="#000"
          barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
        />
        <OfflineNotice />
        <AuthProvider>
          <AppNav />
        </AuthProvider>
        <Toast 
          topOffset={Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 55}
        />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
