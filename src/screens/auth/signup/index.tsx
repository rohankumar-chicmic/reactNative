import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import InputFields from '../../../components/InputFields'
import styles from './styles'
import { Link, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { setObjectValue } from '../../../utils/storageUtils'
import { ImageStyle } from 'react-native'



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
      !formData.password) {
      console.log(formData)
      throw new Error('please fill all the required fields');
    }

    if (formData.password !== formData.confirmPassword) {
      throw new Error('passwords do not match');
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
      Navigation.navigate('login');
    } catch (e: any) {
      alert(e);

      setError(e.message);
      console.log(e, 'error occurred');
    }
  }



  return (
    <ScrollView contentContainerStyle={styles.container} bounces={true} style={{ backgroundColor: 'white' }} >
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
        <InputFields placeholder='Email'
          onChangeText={(e: string) => setFormData({ ...formData, 'email': e })}
        ></InputFields>

        <InputFields
          placeholder='Password'
          onChangeText={(e: string) => setFormData({ ...formData, 'password': e })}
        ></InputFields>

        <InputFields
          placeholder='Confirm Password'
          onChangeText={(e: string) => setFormData({ ...formData, 'confirmPassword': e })}
        ></InputFields>
      </View>

      <View style={[styles.section]}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmitForm()}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>

        <Text onPress={() => Navigation.replace('login')}>already have an account?</Text>
        <View style={[styles.section, { marginVertical: 90 }]}>
          <Text >or continue with</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Image source={require('../../../assets/google.png')} style={styles.image as ImageStyle} />
            <Image source={require('../../../assets/facebook.png')} style={styles.image as ImageStyle} />
            <Image source={require('../../../assets/apple.png')} style={styles.image as ImageStyle} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Signup