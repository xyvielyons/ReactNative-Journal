import {Stack,SplashScreen} from 'expo-router'
import { useEffect } from 'react'
import {useFonts} from 'expo-font'
import { NativeBaseProvider, Text, Box } from "native-base";
import {
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync()


const RootLayout = () => {
    let [fontsLoaded,error] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic,
    })
    useEffect(()=>{
        if(error) throw error
        if(fontsLoaded) SplashScreen.hideAsync();
    
      },[fontsLoaded,error])
      if(!fontsLoaded && !error) return null
  return (
    <NativeBaseProvider>
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}></Stack.Screen>
    </Stack>
    </NativeBaseProvider>
  )
}

export default RootLayout