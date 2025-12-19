import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import InputFields from '../../components/InputFields'
import styles from './styles'
import { Link, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import colorScheme from '../../assets/colorScheme'
import { TextInput } from 'react-native'
import { ImageStyle } from 'react-native'
import { RootStackParamList } from '../../types/RootStackParamList'
import AsyncStorage from '@react-native-async-storage/async-storage'


function Signup() {
  const [borderColor, setBorderColor] = useState<string>();
  const Navigation = useNavigation<any>();

  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);


  const validateForm = async (fromData: typeof formData) => {
    if (!formData.email ||
      !formData.password || formData.password !== formData.confirmPassword) {
      console.log(formData)
      throw new Error('signup failed, invalid form submission');
    }
    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))) {
      throw new Error('validation Failed, email is not valid');
    }
    await setObjectValue(formData);
  }


  const handleSubmitForm = async () => {
    try {
      setError(null);
      await validateForm(formData);
      console.log('user made successfully')
      Navigation.navigate('user', {user: formData});
    } catch (e: any) {
      setError(e.message);
      console.log(e, 'error occurred');
    }
  }

  const setObjectValue = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(value.email, jsonValue);
    }
    catch (e) {
      console.log(e, 'cannot signup the user')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false} >
      <View style={[styles.section, { marginTop: 40 }]}>
        <Text style={styles.primaryText}> Create Account</Text>
        <Text
          style={[styles.text, { color: 'black', margin: 5 }]} >
          create an account so you can explore
        </Text>

        <Text style={[styles.text, { color: 'black' }]}>
          all the existing job
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput placeholder='Email' style={[styles.textInputStyle]}
          placeholderTextColor={colorScheme.placeholder}
          onFocus={() => {
            setBorderColor(colorScheme.border)
          }}
          autoCapitalize='none'
          onBlur={() => { setBorderColor(colorScheme.inputBg) }}
          onChangeText={(e) => setFormData({ ...formData, 'email': e })}
        ></TextInput>

        <TextInput
          placeholder='Password'
          secureTextEntry
          style={styles.textInputStyle}
          placeholderTextColor={colorScheme.placeholder}
          onFocus={() => {
            setBorderColor(colorScheme.border)
          }}
          autoCapitalize='none'

          onBlur={() => { setBorderColor(colorScheme.inputBg) }}
          onChangeText={(e) => setFormData({ ...formData, 'password': e })}
        ></TextInput>

        <TextInput
          placeholder='Confirm Password'
          style={styles.textInputStyle}
          secureTextEntry
          placeholderTextColor={colorScheme.placeholder}
          onFocus={() => {
            setBorderColor(colorScheme.border)
          }}
          autoCapitalize='none'

          onBlur={() => { setBorderColor(colorScheme.inputBg) }}
          onChangeText={(e) => setFormData({ ...formData, 'confirmPassword': e })}
        ></TextInput>
      </View>

      <View style={[styles.section]}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmitForm()}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>

        <Text onPress={() => Navigation.navigate('login')}>already have an account?</Text>
        <View style={[styles.section, { marginVertical: 90 }]}>
          <Text >or continue with</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch' }}>
            <Image source={require('../../assets/google.png')} style={styles.image as ImageStyle} />
            <Image source={require('../../assets/facebook.png')} style={styles.image as ImageStyle} />
            <Image source={require('../../assets/apple.png')} style={styles.image as ImageStyle} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Signup