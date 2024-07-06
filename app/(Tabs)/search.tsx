import { View, Text,FlatList,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/searchbar'
import Journals from '@/components/Journals'
import { SearchIcon } from '@gluestack-ui/themed'
const Search = () => {
  return (
    <SafeAreaView className='bg-primarycolor h-full'>
     
      

        <View className='p-[16px]'>
          <SearchBar
          placeholder='search for a journal....'
          ></SearchBar>

        </View>

        <View>
          
              <View className='flex-row justify-center items-center'>
                <Text className='text-[20px] font-rmedium text-coolGray60 p-2'>Displaying results for:</Text>
                <Text className='text-[24px] font-bold text-coolGray80 p-2'>A journey</Text>
              </View>
          <ScrollView className='h-full'>
              
              <Journals></Journals>

          </ScrollView>

          
           

           


        </View>


    
    </SafeAreaView>
  )
}

export default Search