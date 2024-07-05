import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import images from '@/constants/images'
import AntDesign from '@expo/vector-icons/AntDesign';
const App = () => {
  return (
    <SafeAreaView className="h-full bg-white
    ">
      <ScrollView className='w-full h-full'>
          <View className='w-full'>
             <Image
             source={images.mainimage}
             resizeMode='cover'
             className='w-full h-[400px] border-2 border-red-500'
             
             ></Image>
          </View>

          <View className='p-[24px] space-y-2 items-center justify-center'>
            <View>
              <Text className='text-[20px] font-rbold text-coolGray80'>Take your personal notes to another level</Text>
            </View>

            <View>
              <Text className='text-[14px] font-rmedium text-coolGray60'>Get ready for a revolution in note-taking!</Text>
            </View>

          </View>

          <View className='mb-4'>
                <TouchableOpacity
                className='bg-coolGray90 p-3 rounded-xl items-center ml-10 mr-10 flex-row justify-center space-x-2'
                activeOpacity={0.8}

                >
                  <View>
                    <Text className='text-white font-rmedium'>Create account</Text>
                  </View>

                  <View>
                    <AntDesign name="arrowright" size={20} color="white" />
                  </View>

                </TouchableOpacity>
            </View>

          
      </ScrollView>
    </SafeAreaView>
  )
}

export default App


