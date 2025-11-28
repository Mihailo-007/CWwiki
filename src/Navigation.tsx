import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomeScreen';
import BattleScreen from './screens/BattleScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>

        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Головний екран" }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Битви клонів' }}
        />

        <Stack.Screen
          name="Battle"
          component={BattleScreen}
          options={{ title: 'Інформація про битву' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
