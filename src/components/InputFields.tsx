import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colorScheme from '../assets/colorScheme'


export default function InputFields(props: any) {

  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(false);

  return (
  <>
    <TextInput placeholder={props.placeholder}
      autoCapitalize='none'
      style={[styles.textInputStyle, isFocused ? { borderColor: colorScheme.border } : {}]}
      placeholderTextColor={colorScheme.placeholder}
      onChangeText={(e) => props.onChangeText(e)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)} />
  </>
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    borderRadius: 10,
    borderWidth: 1,
    height: 60,
    width: '95%',
    borderColor: colorScheme.inputBg,
    margin: 10,
    padding: 20,
    backgroundColor: colorScheme.inputBg
  }
})