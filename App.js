import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import MobileNumber from './src/screens/MobileNumber';

import Verification from './src/screens/Verification';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
				<Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
				<Stack.Screen name="Verification" component={Verification} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
