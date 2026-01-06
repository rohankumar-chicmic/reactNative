import { View, Text, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'
import { OtpInput } from "react-native-otp-entry";
import React from 'react';
import InputFields from '../../../components/atoms/InputFields'
import styles from './styles';
import { getObjectValue, setObjectValue } from '../../../utils/storageUtils';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/RootStackParamList';
import Toast from 'react-native-toast-message';

const showToast = (e: any) => {
    Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: e ? e.message : 'Some error occured'
    });
}

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const otpref = useRef(-1);


    const validateEmail = async (email: string) => {
        if (email.length === 0) {
            throw new Error('Please enter the Email')
        }
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
            throw new Error('Please enter the valid email');
        }

        const user = await getObjectValue(email);

        if (!user) {
            throw new Error('user not found');
        }

        return user;
    }

    const handleSubmit = async () => {
        try {
            const user = await validateEmail(email);
            otpref.current = getRandomInt();
            alert('your otp is' + otpref.current);
            setOtpSent(true);
        }
        catch (e: any) {
            showToast(e);
        }

    }

    function getRandomInt() {
        const minCeiled = Math.ceil(111111);
        const maxFloored = Math.floor(1000000);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
    const EnterEmail = (
        <>
            <InputFields placeholder='Email' onChangeText={(e: string) => setEmail(e)}> </InputFields>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.text}> get OTP</Text>
            </TouchableOpacity>
        </>)

    return (
        <View style={styles.container}>

            {!otpSent && (EnterEmail)}

            {otpSent && !otpVerified && <OtpComponent otpRef={otpref} setOtpVerified={setOtpVerified}></OtpComponent>}

            {otpVerified && <ConfirmPasswordComponent email={email}></ConfirmPasswordComponent>}

        </View>
    )

}

const OtpComponent = (props: { otpRef: { current: number }, setOtpVerified: Function }) => {
    const [otp, setOtp] = useState('');


    const handleSubmit = () => {
        if (otp === props.otpRef.toString()) {
            props.setOtpVerified(true);
            console.log(otp, props.otpRef)
        }
        else {
            showToast({ message: '' })
        }
    }

    function getRandomInt() {
        const minCeiled = Math.ceil(111111);
        const maxFloored = Math.floor(1000000);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const resentOtp = () => {
        setOtp('');
        props.otpRef.current = getRandomInt();
        alert('your otp is' + props.otpRef.current);
    }

    return (
        <>
            <OtpInput numberOfDigits={6} onTextChange={(e: string) => setOtp(e)} />
            <Text style={{ alignSelf: 'flex-end' }} onPress={resentOtp}> resend OTP</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.text}> submit OTP</Text>
            </TouchableOpacity>
        </>

    )
}

const ConfirmPasswordComponent = (props: { email: string }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const Navigation = useNavigation<any>();


    const submitNewPassword = async () => {
        if (password !== confirmPassword) {
            showToast({message:'Password do not match'})
            return;
        }
        const user = await getObjectValue(props.email);
        await setObjectValue({ ...user, 'password': password });
        Navigation.navigate('login');
    }

    return (
        <>
            <InputFields placeholder='New Password' onChangeText={(e: string) => setPassword(e)}></InputFields>
            <InputFields placeholder='Confirm Password' onChangeText={(e: string) => setConfirmPassword(e)}></InputFields>
            <TouchableOpacity
                style={styles.button}
                onPress={submitNewPassword}
            >
                <Text style={styles.text}>Set Password</Text>
            </TouchableOpacity>
        </>
    )


}