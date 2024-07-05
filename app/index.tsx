import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import images from '@/constants/images'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router'
const App = () => {
  return (
      <ScrollView className='w-full h-full bg-primarycolor'>
          <View className='w-full'>
             <Image
             source={images.mainimage}
             resizeMode='cover'
             className='w-full h-[450px] border-2 border-red-500'
             
             ></Image>
          </View>

          <View className='p-[24px] space-y-2 items-center justify-center relative'>
            <View>
              <Text className='text-[20px] font-rbold text-coolGray80'>Take your personal notes to another level</Text>
            </View>

            <View>
              <Text className='text-[16px] font-rmedium text-coolGray60'>Get ready for a revolution in note-taking!</Text>
            </View>
            <View className='absolute top-[87px] right-16'>
              <Image
              source={images.pen}
              resizeMode='contain'
              className='w-[80px] h-[20px] '
              />
            </View>

          </View>

          <View className='mb-4' >
                <TouchableOpacity
                className='bg-coolGray90 p-4 rounded-xl items-center ml-10 mr-10 flex-row justify-center space-x-2'
                activeOpacity={0.8}
                onPress={()=>router.push('/home')}
                >
                  <View>
                    <Text className='text-white font-rmedium text-[16px]'>Create Account</Text>
                  </View>

                  <View>
                    <AntDesign name="arrowright" size={20} color="white" />
                  </View>

                </TouchableOpacity>
            </View>

          
      </ScrollView>
   
  )
}

export default App


