import { View, Text } from 'react-native'
import React from 'react'

interface IncomingJournalData {
 
        id:string,
        timeStamp:string,
        category:string,
        title:string

}

const JournalCards = ({id,timeStamp,category,title}:IncomingJournalData) => {
  return (
    <View className=''>
      <View className='bg-white p-4 rounded-lg'>
        <Text className='text-[14px] font-rregular text-coolGray60'>{timeStamp}</Text>
        <Text className='text-[18px] font-medium font-rmedium text-coolGray80'>{title}</Text>
        <Text className='text-[15px] font-rregular text-coolGray60'>{category}</Text>
      </View>
    </View>
  )
}

export default JournalCards