import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import images from '@/constants/images'
interface Tabstypes {
  name?:string
  focused:boolean
  color:string
  imageSource:any
}

const TabBarIconCreate = ({name,focused,imageSource,color}:Tabstypes)=>{
  return(
    
    <View className={`bg-white rounded-full w-24 h-24 -translate-y-7 items-center justify-center`}>
      <View className={`${focused ? "bg-[#2196F3]":"bg-coolGray80"} rounded-full w-20 h-20 border-2 items-center justify-center`}>
        <Image
        source={imageSource}
        tintColor="#ffffff"
        resizeMode='contain'
        className='w-[42px] h-[42px]'
        ></Image>
      </View>
    </View>
    
  )
}
const TabBarIcon = ({name,focused,color,imageSource}:Tabstypes)=>{
  return(
    <View className='items-center justify-center'>
      <Image
      source={imageSource}
      tintColor={color}
      resizeMode='contain'
      className='w-[32px] h-[32px]'
      ></Image>
      <Text className={`text-[16px] font-rmedium ${focused ? "text-[#2196F3]":"text-coolGray60"}`}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#2196F3',
      tabBarInactiveTintColor:'#697077',
      tabBarStyle:{
        backgroundColor:'#ffffff',
        height:75
      }
    }}
    >
      <Tabs.Screen
      name='home'
      options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabBarIcon
          name="Home"
          focused={focused}
          color={color}
          imageSource={images.homeIcon}
          ></TabBarIcon>
        )
      }}
      />
      <Tabs.Screen
      name='search'
      options={{
        title:"Search",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabBarIcon
          color={color}
          imageSource={images.searchIcon}
          focused={focused}
          name='Search'
          ></TabBarIcon>
        )
      }}
      />
      <Tabs.Screen
      name='create'
      options={{
        title:"Create",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabBarIconCreate
          imageSource={images.plusIcon}
          color={color}
          focused={focused}
          name='Create'
          ></TabBarIconCreate>
        )
      }}
      />
      <Tabs.Screen
      name='analytics'
      options={{
        title:"Analytics",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabBarIcon
          color={color}
          imageSource={images.analytics}
          focused={focused}
          name='Analytics'
          ></TabBarIcon>
        )
      }}
      />
      <Tabs.Screen
      name='profile'
      options={{
        title:"Profile",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabBarIcon
          color={color}
          imageSource={images.profile}
          focused={focused}
          name='Profile'
          ></TabBarIcon>
        )
      }}
      />
    </Tabs>
    </>
    
  )
}

export default TabsLayout