import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

interface buttonTypes {
  label:string
  route:string
}

const Button = ({label,route}:buttonTypes) => {
  return (
    <View>
      <TouchableOpacity
                className='bg-coolGray90 p-4 rounded-lg items-center w-full flex-row justify-center space-x-2'
                activeOpacity={0.8}
                onPress={()=>router.push(route)}
                >
                  <View>
                    <Text className='text-white font-rmedium text-[18px]'>{label}</Text>
                  </View>

                  <View>
                    <AntDesign name="arrowright" size={20} color="white" />
                  </View>

                </TouchableOpacity>
    </View>
  )
}

export default Button