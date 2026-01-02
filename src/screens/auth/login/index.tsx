import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import InputFields from '../../../components/atoms/InputFields'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ImageStyle } from 'react-native'
import { getObjectValue } from '../../../utils/storageUtils'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../../features/authSlice'

type loginDataType = {  
    email: string,
    password: string,
};


function Login() {
    const Navigation = useNavigation<any>();
    const [formData, setFormData] = useState({ 'email': '', 'password': '' });
    const [error, setError] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const dispatch = useDispatch();

    const handleSubmitForm = async () => {
        try {
            const user = await validateForm(formData);
            setUser(user)
            console.log(user);
            dispatch(login({email: user.email}));
            Navigation.navigate('user', { user: formData });

        } catch (e: any) {
            setError(e);
            alert(e.message);
            console.log(e, 'error occurred');
        }
    }

    const validateForm = async (formData: loginDataType) => {
        if (formData.email.length == 0 || formData.password.length == 0) {
            
            throw new Error('please fill all the required fields')
        }
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))) {
            
            throw new Error('validation Failed, email is not valid');
        }
        const user = await getObjectValue(formData.email);

        if(!user){

            throw new Error('user not found')
        }

        if (formData.password !== user.password) {
            throw new Error('validation failed');
        }

        return user;
    }


    return (
        <ScrollView contentContainerStyle={styles.container} bounces={true} style={{ backgroundColor: 'white' }} >
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
                <InputFields
                    placeholder={'Email'}
                    onChangeText={(e: string) => {setFormData({ ...formData, email: e })}}
                ></InputFields>

                <InputFields
                    placeholder={'Password'}
                    onChangeText={(e: string) => setFormData({ ...formData, password: e })}
                ></InputFields>


                <Text style={{ alignSelf: 'flex-end', margin: 10 }} onPress={() => Navigation.navigate('forgotPassword')}> forgot your password?</Text>
            </View>

            <View style={[styles.section, { justifyContent: 'space-around', height: '20%' }]}>

                <TouchableOpacity style={styles.button}
                    onPress={() => handleSubmitForm()}>
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>

                <Text onPress={() => Navigation.replace('signup')}>create a new account</Text>


                <View style={[styles.section, { marginVertical: 120, marginBottom: 170 }]}>
                    <Text >or continue with</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch' }}>
                        <Image source={require('../../../assets/google.png')} style={styles.image as ImageStyle} />
                        <Image source={require('../../../assets/facebook.png')} style={styles.image as ImageStyle} />
                        <Image source={require('../../../assets/apple.png')} style={styles.image as ImageStyle} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login