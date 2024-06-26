/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import { MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'cyan',
    secondary: 'orange'
  }
}

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
          />
        <NavigationContainer>
          <SafeAreaView style={backgroundStyle}>
            <BottomTabNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
