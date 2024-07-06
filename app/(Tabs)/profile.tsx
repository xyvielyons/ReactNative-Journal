import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { ScrollView } from '@gluestack-ui/themed'
import Button from '@/components/Button'
const Profile = () => {
  return (
    <SafeAreaView className='bg-primarycolor h-full'>
      <ScrollView>
      <View className='flex-row justify-center items-center space-x-4 p-4'>
          <View>
            <View className='w-[150px] h-[150px] bg-blue-400 rounded-full items-center justify-center'>
              <View className='w-[140px] h-[140px] bg-blue-100 rounded-full'>

              </View>

            </View>
          </View>


          <View>
            <Text className='text-[24px] font-rbold text-coolGray80'>Xyvie Lyons</Text>
            <Text className='text-[16px] font-rregular text-coolGray60'>xyvielyons@gmail.com</Text>

          </View>

      </View>

      <View className='p-4 space-y-4 bg-white '>
          <View>
              <FormField
                  label="username"
                  placeholder='John'
                  type="text"
              ></FormField>

          </View>

          <View>
              <FormField
                  label="password"
                  placeholder='*****************'
                  type='password'
              ></FormField>

          </View>
      </View>

      <View className='p-4'>
        <Button
        label="Update Credentials"
        route=""
        ></Button>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile