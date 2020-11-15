import React, { useRef, useEffect, useState } from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button } from 'react-native-paper';

function Login({ navigation }) {
	const [ isMobile, setIsMobile ] = useState('');
	const [ isPassword, setIsPassword ] = useState('');

	return (
		<View style={{ flex: 1, backgroundColor: '#F48020' }}>
			<StatusBar backgroundColor="#F0750F" barStyle="dark-content" />
			<View style={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
				<Image
					source={{ uri: 'https://logopond.com/logos/dd168ec9abb0d5bf6743ee73bd0ced8d.png' }}
					style={{ width: 100, height: 90, borderRadius: 20 }}
				/>
			</View>

			<View
				style={{
					height: 320,
					position: 'absolute',
					bottom: 0,
					left: 10,
					right: 10,
					backgroundColor: '#fff',
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					elevation: 10
				}}
			>
				<Text style={{ fontSize: 23, fontFamily: 'Ubuntu-Bold', paddingLeft: 20, paddingTop: 20 }}>
					Hello There,
				</Text>
				<Text style={{ fontSize: 18, fontFamily: 'Ubuntu-Regular', paddingLeft: 20, paddingTop: 5 }}>
					Login to your account
				</Text>

				<TextInput
					mode="outlined"
					label="Mobile Number"
					value={isMobile}
					style={{
						width: 280,
						height: 45,
						alignSelf: 'center',
						marginTop: 15,
						backgroundColor: '#F5F5F5',
						fontFamily: 'Ubuntu-Regular'
					}}
					onChangeText={(isMobile) => setIsMobile(isMobile)}
				/>

				<TextInput
					mode="outlined"
					label="Password"
					value={isPassword}
					secureTextEntry={true}
					style={{
						width: 280,
						height: 45,
						alignSelf: 'center',
						marginTop: 15,
						backgroundColor: '#F5F5F5',
						fontFamily: 'Ubuntu-Regular'
					}}
					onChangeText={(isPassword) => setIsPassword(isPassword)}
				/>
				<TouchableOpacity onPress={() => navigation.navigate('MobileNumber')}>
					<Text
						style={{ fontFamily: 'Ubuntu-Medium', alignSelf: 'flex-end', paddingRight: 35, paddingTop: 5 }}
					>
						Forgot Password ?
					</Text>
				</TouchableOpacity>
				<Button
					mode="contained"
					compact={false}
					color="#F48020"
					style={{ width: 280, height: 45, alignSelf: 'center', marginTop: 10 }}
					labelStyle={{ color: '#fff', paddingTop: 4, fontFamily: 'Ubuntu-Bold' }}
					onPress={() => console.log('Pressed')}
				>
					Login
				</Button>

				<View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
					<Text style={{ fontFamily: 'Ubuntu-Regular' }}>Don't have an account ? </Text>
					<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
						<Text style={{ fontFamily: 'Ubuntu-Bold', color: '#F48020' }}>Signup</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Login;
