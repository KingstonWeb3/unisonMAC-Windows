import { AppRegistry } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { useState, useEffect } from 'react';

import theme from './theme/Theme';
import ThemeContext from './theme/themeContext';

import Welcome from './src/screens/onboarding/Welcome';
import Login from './src/screens/onboarding/Login';
import SeedPhrase from './src/screens/onboarding/seedPhraseprivateKey/SeedPhrase';
import Biometric from './src/screens/onboarding/security/Biometric';
import Difference from './src/screens/onboarding/Difference';
import NameWallet from './src/screens/onboarding/NameWallet';
import TCPP from './src/screens/onboarding/TCPP';
import Passcode from './src/screens/onboarding/security/Passcode';
import WhichMethod from './src/screens/onboarding/WhichMethod';
import PrivateKey from './src/screens/onboarding/seedPhraseprivateKey/PrivateKey';

import BottomScreen from './src/components/bottomScreens/BottomScreen';
import TabNav from './src/components/navigation/TabNav';

import SettingsScreen from './src/screens/settings/SettingsScreen';
import Wallet from './src/screens/settings/Wallet';
import Currency from './src/screens/settings/Currency';
import Notifications from './src/screens/settings/Notifications';
import Test from './src/screens/settings/Test';
import ChainSelection from './src/screens/settings/ChainSelection';
import Profile from './src/screens/settings/Profile';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const Stack = createNativeStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
      console.log(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName='Welcome' headerMode='none'>

          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="TCPP" component={TCPP} options={{ headerShown: false }} />
          <Stack.Screen name="SeedPhrase" component={SeedPhrase} options={{ headerShown: false }} />
          <Stack.Screen name="Difference" component={Difference} options={{ headerShown: false }} />
          <Stack.Screen name="NameWallet" component={NameWallet} options={{ headerShown: false }} />
          <Stack.Screen name="Biometric" component={Biometric} options={{ headerShown: false }} />
          <Stack.Screen name="Passcode" component={Passcode} options={{ headerShown: false }} />
          <Stack.Screen name="WhichMethod" component={WhichMethod} options={{ headerShown: false }} />
          <Stack.Screen name="PrivateKey" component={PrivateKey} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={TabNav} options={{ headerShown: false }} />
          <Stack.Screen name="BottomScreen" component={BottomScreen} />

          <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
          <Stack.Screen name="Currency" component={Currency} options={{ headerShown: false }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
          <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
          <Stack.Screen name="ChainSelection" component={ChainSelection} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>

  );
}
