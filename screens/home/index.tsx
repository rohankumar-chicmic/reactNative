import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { ImageStyle } from 'react-native';

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'home'
>;

function Home() {

    const Navigation = useNavigation<NavigationProp>();
    return (
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
            <Image source={require('../../assets/easyName.png')} style={styles.image as ImageStyle} />

            <View style={styles.section}>

                <Text style={styles.primaryText}>
                    Discover Your

                </Text>
                <Text style={styles.primaryText}>
                    Dream Job here
                </Text>

                <View >
                    <Text style={[styles.text, { color: 'black', fontSize: 15, marginTop: 25 }]}>
                        Explore all the existing job roles based on
                    </Text>
                    <Text style={[styles.text, { color: 'black', fontSize: 15 }]}>
                        your interest and study major
                    </Text>
                </View>
            </View>

            <View style={[{ flexDirection: 'row' }]}>

                <TouchableOpacity onPress={() => Navigation.navigate('login')}
                    style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Navigation.navigate('signup')} style={[styles.button, {
                    shadowColor: 'white',
                    backgroundColor: 'white'
                }]}>
                    <Text style={[styles.text, { color: 'black' }]}>Register</Text>
                </TouchableOpacity>

            </View>
        </ScrollView >
    )
}

export default Home