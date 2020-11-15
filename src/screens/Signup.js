import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';

function Signup() {
	const [ isName, setIsName ] = useState('');
	const [ isMobile, setIsMobile ] = useState('');
	const [ isPassword, setIsPassword ] = useState('');
	const [ isConfirmPassword, setIsConfirmPassword ] = useState('');
	const [ isShopName, setIsShopName ] = useState('');
	const [ isAddress, setIsAddress ] = useState('');

	return (
		<View style={{ flex: 1, backgroundColor: '#F48020' }}>
			<View style={{ flex: 1, alignItems: 'center', paddingTop: 40 }}>
				<Image
					source={{ uri: 'https://logopond.com/logos/dd168ec9abb0d5bf6743ee73bd0ced8d.png' }}
					style={{ width: 100, height: 90, borderRadius: 20 }}
				/>
			</View>
			<View
				style={{
					height: 400,
					backgroundColor: '#fff',
					position: 'absolute',
					bottom: 0,
					left: 10,
					right: 10,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					elevation: 10
				}}
			>
				<ScrollView>
					<Text style={{ fontSize: 23, fontFamily: 'Ubuntu-Bold', paddingLeft: 20, paddingTop: 20 }}>
						Create an account
					</Text>

					<Text style={{ fontSize: 17, fontFamily: 'Ubuntu-Regular', paddingLeft: 20, paddingTop: 5 }}>
						Signup to continue
					</Text>

					<TextInput
						mode="outlined"
						label="Full Name"
						value={isName}
						style={{
							width: 280,
							height: 45,
							alignSelf: 'center',
							marginTop: 15,
							backgroundColor: '#F5F5F5',
							fontFamily: 'Ubuntu-Regular'
						}}
						onChangeText={(isName) => setIsName(isName)}
					/>
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
						secureTextEntry={true}
						label="Password"
						value={isPassword}
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
					<TextInput
						mode="outlined"
						label="Confirm Password"
						secureTextEntry={true}
						value={isConfirmPassword}
						style={{
							width: 280,
							height: 45,
							alignSelf: 'center',
							marginTop: 15,
							backgroundColor: '#F5F5F5',
							fontFamily: 'Ubuntu-Regular'
						}}
						onChangeText={(isConfirmPassword) => setIsConfirmPassword(isConfirmPassword)}
					/>
					<TextInput
						mode="outlined"
						label="Shop Name"
						value={isShopName}
						style={{
							width: 280,
							height: 45,
							alignSelf: 'center',
							marginTop: 15,
							backgroundColor: '#F5F5F5',
							fontFamily: 'Ubuntu-Regular'
						}}
						onChangeText={(isShopName) => setIsShopName(isShopName)}
					/>
					<TextInput
						mode="outlined"
						label="Shop Address"
						value={isAddress}
						style={{
							width: 280,
							height: 45,
							alignSelf: 'center',
							marginTop: 15,
							backgroundColor: '#F5F5F5',
							fontFamily: 'Ubuntu-Regular'
						}}
						onChangeText={(isAddress) => setIsAddress(isAddress)}
					/>

					<Button
						title="Sign Up"
						containerStyle={{ width: 280, alignSelf: 'center', marginVertical: 20 }}
						buttonStyle={{ backgroundColor: '#F48020' }}
					/>
				</ScrollView>
			</View>
		</View>
	);
}

export default Signup;
