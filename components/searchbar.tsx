import { View, TextInput,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import images from '@/constants/images'
interface searchtypes {
placeholder:string
}

const SearchBar = ({placeholder}:searchtypes) => {
  return (
    <View className='w-full flex flex-row justify-center items-center pl-5 pr-5'>
       
            <TouchableOpacity className='w-full'>
                <View className='border-2 flex-1 w-full border-slate-300 focus:border-blue-500 p-2 rounded-bl-md rounded-tl-md'>
                    <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    className='flex-1'
                    cursorColor="blueviolet"
                    />

                </View>
            </TouchableOpacity>
        

      
            <TouchableOpacity className=''>
                <View className='w-[50px] h-[50px] bg-blue-500 rounded-tr-md rounded-br-md items-center justify-center'>
                  <Image
                  source={images.searchIcon}
                  resizeMode='contain'
                  tintColor="#ffffff"
                  className='w-[40px] h-[40px]'
                  
                  />

                </View>
            </TouchableOpacity>

     

    </View>
    

  )
}

export default SearchBar