import { View, Text } from 'react-native'
import React from 'react'
import {Stack,SplashScreen} from 'expo-router'

const _layout = () => {
  return (
    <Stack>
     <Stack.Screen name='sign-in' options={{headerShown:false}}></Stack.Screen>
     <Stack.Screen name='sign-up' options={{headerShown:false}}></Stack.Screen>

    </Stack>
  )
}

export default _layout