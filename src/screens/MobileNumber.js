import React from 'react'
import { Text, View, Button } from 'react-native'

function MobileNumber({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30 }}>MobileNumber</Text>
            <Text style={{ fontFamily: 'Anton-Regular', fontSize: 30 }}>MobileNumber</Text>
            <Button
                title="next"
                onPress={() => navigation.navigate('Verification')}
            />
        </View>
    )
}

export default MobileNumber
