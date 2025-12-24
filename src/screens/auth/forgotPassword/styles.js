import { StyleSheet } from "react-native";
import colorScheme from "../../../assets/colorScheme";


const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent:'center',
        backgroundColor: 'white', 
        height: '100%'
    },
    button: {
        height: 50,
        width: '50%',
        alignSelf:'center',
        backgroundColor: colorScheme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowOffset: '',
        shadowOpacity: 0.3,
        margin: 5,
    },
    text: {
        color: colorScheme.white,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '500',
        margin: 2
    }
})

export default styles