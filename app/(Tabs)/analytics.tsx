import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Analytics = () => {
  return (
    <SafeAreaView className='bg-primarycolor h-full'>
      <View className='bg-white justify-center items-center p-4'>
        <Text className='text-[36px] font-rbold text-coolGray80'>Number of uploaded Journals</Text>
        <Text className='text-[64px] font-rbold text-blue-500'>70</Text>

      </View>

    </SafeAreaView>
  )
}

export default Analytics