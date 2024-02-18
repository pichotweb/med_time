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
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomePage from './src/pages/HomePage';
import Form from './src/components/Form';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        />
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <Tab.Navigator
            screenOptions={ ({route}) => ({
              tabBarIcon: ( {focused, color, size} ) => {
                let iconName;

                switch (route.name) {
                  case 'Home':
                    iconName = 'ios-information-circle'
                    break;
                  case 'New':
                    return <TouchableOpacity style={styles.roundButton}></TouchableOpacity>;
                
                  case 'List':
                    iconName = 'ios-information-circle'
                  default:
                    break;
                }

                return <Ionicons name="md-checkmark-circle" size={32} color="green" />
              },  
              
            })}>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="New" component={Form} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="List" component={HomePage} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
  }
});

export default App;
