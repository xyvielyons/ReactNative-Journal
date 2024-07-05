import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Feather from '@expo/vector-icons/Feather';

interface formtypes {
  label:string
  placeholder:string
  type:string

}
const FormField = ({label,placeholder,type}:formtypes) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)
  return (
    <View className=''>

        <View>
          <Text className='text-[16px] font-rmedium text-coolGray60'>{label}</Text>
        </View>
        <View className='border-2 border-slate-400 focus:border-slate-800 p-2 rounded-md flex-row'>
          <TextInput
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className='flex-1'
          cursorColor="blueviolet"
          secureTextEntry={showPassword ? false : true}
          />
          {type === "password" && (
          <TouchableOpacity onPress={()=>showPassword === true ? setShowPassword(false) : setShowPassword(true)}>
            {showPassword ? (
              <Feather name="eye" size={24} color="black" />
            ):(
              <Feather name="eye-off" size={24} color="black" />

            )}
             
          </TouchableOpacity>
        )}
        </View>
        
      
    </View>
  )
}

export default FormField