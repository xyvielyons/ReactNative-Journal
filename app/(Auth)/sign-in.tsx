import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import FormField from '@/components/FormField';
import Button from '@/components/Button';

const SignIn = () => {
  return (
    <SafeAreaView className='h-full bg-primarycolor'>
      <ScrollView className='w-full h-full space-y-4'>

        <View className='p-4 mt-[8px]'>
          <TouchableOpacity
          onPress={()=>router.push('/')}
          >
             <Ionicons name="arrow-back" size={36} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <Text className='text-[42px] font-rbold pl-[16px] pr-[16px] text-coolGray80'>welcome Back 😁</Text>
        </View>

        <View>
          <Text className='text-[16px] font-rmedium pl-[16px] pr-[16px] text-coolGray60'>Sign-in to your account by providing your email and password</Text>
        </View>

        <View className='pr-[16px] pl-[16px] mt-2 space-y-2'>
          
          <View>
          <FormField
              label="email"
              placeholder='enter your email address'
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

          <View className='flex flex-row'>
            <Text className='text-[16px] text-coolGray60 font-rmedium'>Dont Have an Account ? </Text>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=>router.push('/sign-up')}>
                <Text className='text-[16px] text-[#0C87F3] font-rmedium'>Sign-up</Text>

            </TouchableOpacity>
          </View>
          

        </View>

        <View className='pl-[16px] pr-[16px]'>
          <Button
          label='sign in'
          route='/home'
          ></Button>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn