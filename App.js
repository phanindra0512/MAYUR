import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MobileNumber from './src/screens/MobileNumber';
import Verification from './src/screens/Verification';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MobileNumber">
        <Stack.Screen name="MobileNumber" component={MobileNumber} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
