import { View, Text,ScrollView,FlatList } from 'react-native'
import React from 'react'
import JournalCards from './JournalCards'

const Journals = () => {
  return (
    
          <FlatList
          className='mb-[300px]'
            data={[
              {id:"1",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"2",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"3",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"4",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"5",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"6",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"7",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"8",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
              {id:"9",timeStamp:"12th august 12.00AM",category:"Adventure",title:"How I discovered Gold in congo "},
            ]}
            keyExtractor={(item:any)=>item.id}
            
            renderItem={({item})=>(
              <View className='pl-[8px] pr-[8px] mb-4'>
                <JournalCards
                id = {item.id}
                timeStamp={item.timeStamp}
                category={item.category}
                title={item.title}

               />

              </View>
              
      
            )}

            />
           
  )

}


export default Journals