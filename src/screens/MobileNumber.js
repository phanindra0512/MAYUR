import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';

function MobileNumber() {
	const [ isMobile, setIsMobile ] = useState('');

	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, backgroundColor: '#F48020', alignItems: 'center', justifyContent: 'center' }}>
				<MaterialCommunityIcons name="lock-question" size={50} color="#fff" />
				<Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold', paddingTop: 15, color: '#fff' }}>FORGET</Text>
				<Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold', paddingTop: 5, color: '#fff' }}>PASSWORD</Text>
				<Text
					style={{
						fontSize: 15,
						fontFamily: 'Ubuntu-Regular',
						textAlign: 'center',
						paddingTop: 5,
						color: '#F5F5F5'
					}}
				>
					Provide your account's mobile number for reset your password
				</Text>
			</View>
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<TextInput
					mode="outlined"
					label="Mobile Number"
					value={isMobile}
					style={{
						width: 280,
						height: 45,
						alignSelf: 'center',
						marginTop: 30,
						backgroundColor: '#F5F5F5',
						fontFamily: 'Ubuntu-Regular'
					}}
					onChangeText={(isMobile) => setIsMobile(isMobile)}
				/>
				<Button
					title="Next"
					containerStyle={{ width: 280, alignSelf: 'center', marginVertical: 20 }}
					buttonStyle={{ backgroundColor: '#F48020' }}
				/>
			</View>
		</View>
	);
}

export default MobileNumber;
