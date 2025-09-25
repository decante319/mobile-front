// mobile/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import CropScan from './src/screens/CropScan';
import Marketplace from './src/screens/Marketplace';
import Finance from './src/screens/Finance';
import Logs from './src/screens/Logs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CropScan" component={CropScan} />
        <Stack.Screen name="Marketplace" component={Marketplace} />
        <Stack.Screen name="Finance" component={Finance} />
        <Stack.Screen name="Logs" component={Logs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
