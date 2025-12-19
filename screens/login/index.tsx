import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import InputFields from '../../components/InputFields'
import styles from './styles'
import { Link, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import colorScheme from '../../assets/colorScheme'
import { TextInput } from 'react-native'
import { ImageStyle } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

type loginDataType = {
    email: string,
    password: string,
};


function Login() {
    const [borderColor, setBorderColor] = useState<string>();
    const Navigation = useNavigation<any>();
    const [formData, setFormData] = useState({ 'email': '', 'password': '' });
    const [error, setError] = useState<any>(null);
    const [user, setUser] = useState<any>(null);

    const handleSubmitForm = async () => {
        try {
            const user = await validateForm(formData);
            setUser(user)
            console.log(user);
            Navigation.navigate('user', { user: user });
        } catch (e) {
            setError(e);
            console.log(e, 'error occurred');
        }
    }

    const getObjectValue = async (email: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(email);
            const returnValue = jsonValue != null ? JSON.parse(jsonValue) : null;
            console.log(returnValue);
            return returnValue
        } catch (e) {
            console.log(e, 'cannot login the user')

        }
    }

    const validateForm = async (formData: loginDataType) => {
        if (formData.email.length === 0 && formData.password.length === 0) {
            return new Error('Validation Failed, required Fields not filled')
        }
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))) {
            return new Error('validation Failed, email is not valid');
        }
        const user = await getObjectValue(formData.email);

        if (formData.password !== user.password) {
            return new Error('validation failed');
        }

        return user;
    }


    return (
        <ScrollView contentContainerStyle={styles.container} bounces={false} >
            <View style={[styles.section, { marginTop: 40 }]}>
                <Text style={styles.primaryText}> Login here</Text>
                <Text
                    style={[styles.text, { color: 'black', margin: 5 }]} >
                    Welcome back you've
                </Text>

                <Text style={[styles.text, { color: 'black' }]}>
                    been missed!
                </Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    placeholder='Email'
                    style={[styles.textInputStyle]}
                    autoCapitalize='none'
                    placeholderTextColor={colorScheme.placeholder}
                    onFocus={() => {
                        setBorderColor(colorScheme.border)
                    }}
                    onBlur={() => { setBorderColor(colorScheme.inputBg) }}
                    onChangeText={(e) => setFormData({ ...formData, email: e })}
                ></TextInput>

                <TextInput
                    placeholder='Password'
                    style={styles.textInputStyle}
                    placeholderTextColor={colorScheme.placeholder}
                    onFocus={() => {
                        setBorderColor(colorScheme.border)
                    }}
                    autoCapitalize='none'

                    onBlur={() => { setBorderColor(colorScheme.inputBg) }}
                    onChangeText={(e) => setFormData({ ...formData, password: e })}
                ></TextInput>
                <Text style={{ alignSelf: 'flex-end', margin: 10 }}> forgot your password?</Text>
            </View>

            <View style={[styles.section]}>

                <TouchableOpacity style={styles.button}
                    onPress={() => handleSubmitForm()}>
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>

                <Text onPress={() => Navigation.navigate('signup')}>create a new account</Text>


                <View style={[styles.section, { marginVertical: 120 }]}>
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

export default Login