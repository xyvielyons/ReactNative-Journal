import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { Textarea } from '@gluestack-ui/themed'
import Button from '@/components/Button'
const Create = () => {
  return (
    <SafeAreaView className='bg-primarycolor h-full'>
      <ScrollView>
        <View className='p-4'>
          <Text className='text-[28px] font-rbold text-coolGray80'>Create a journal</Text>
        </View>

        <View>
        <View className='p-4 space-y-4'>
          <View>
              <FormField
                  label="Title"
                  placeholder='My Adventure'
                  type="text"
              ></FormField>

          </View>

          <View>
              <FormField
                  label="category"
                  placeholder='Lifestyle'
                  type='text'
              ></FormField>

          </View>
          <View>
            <Text className='text-[18px] font-rmedium text-coolGray60'>Content</Text>
              <Textarea
  
              ></Textarea>

          </View>


      </View>
        </View>

        <View className='p-4'>
            <Button
            label='submit journal'
            route=''
            ></Button>

        </View>



      </ScrollView>
    </SafeAreaView>
  )
}

export default Create