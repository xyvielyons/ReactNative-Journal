import { View, Text,FlatList,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/searchbar'
import Journals from '@/components/Journals'
const Home = () => {
  return (
    <SafeAreaView className='bg-primarycolor h-full'>
     
        <View className='bg-white flex flex-row justify-between p-4'>
            <View>
              <Text className='text-[16px] font-rmedium text-coolGray60'>Hello</Text>
              <Text className='text-[20px] font-rbold text-coolGray80'>Mbugua 👋</Text>
            </View>
            <View>
              <View className='bg-coolGray60 w-[50px] h-[50px] rounded-full'>
              </View>
            </View>
        </View>

        <View className='p-[16px]'>
          <SearchBar
          placeholder='search by title name....'
          ></SearchBar>

        </View>

        <View>
          
              <View>
                <Text className='text-[20px] font-rmedium text-coolGray60 p-2'>My Journals</Text>
              </View>
          <ScrollView className='h-full'>
              
              <Journals></Journals>

          </ScrollView>

          
           

           


        </View>


    
    </SafeAreaView>
  )
}

export default Home