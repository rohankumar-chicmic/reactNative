import { View, Text } from 'react-native'
import React from 'react'

export default function User({route}: any) {

  return (
    <View>
      <Text>
        email: {route.params.user.email}
        password {route.params.user.password}
      </Text>
    </View>
  )
}