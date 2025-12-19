import { View, TextInput } from 'react-native'
import React from 'react'


export default function InputFields(props: any) {
  return (

    <TextInput placeholder={props.placeHolder}
      onFocus={props.onFocus}
      style={props.textInputStyle}
      placeholderTextColor={props.placeHolderColor} />

  )
}
