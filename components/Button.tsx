import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

interface buttonTypes {
  label:string
}

const Button = ({label}:buttonTypes) => {
  return (
    <View>
      <TouchableOpacity
                className='bg-coolGray90 p-4 rounded-lg items-center w-full flex-row justify-center space-x-2'
                activeOpacity={0.8}
             
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