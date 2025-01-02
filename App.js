import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import InfoScreen from './src/screens/InfoScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import AuthorScreen from './src/screens/AuthorScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Calculate BMI' }} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'How to Calculate BMI' }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Calculation History' }} />
        <Stack.Screen name="Author" component={AuthorScreen} options={{ title: 'Author Information' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
