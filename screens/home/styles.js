import colorScheme from "../../assets/colorScheme";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        backgroundColor: colorScheme.white,
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        padding: 20,
    },
    button:{
        height: 50,
        width: 150,
        backgroundColor: colorScheme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: '',
        shadowOpacity: 0.3,
        margin: 5, 
        
        
    }, 
    registerButton:{
        height: 'auto',
        width: '100%',
        backgroundColor: colorScheme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOpacity: 0.3,
        margin: 5
    }, 
    text:{
        color: colorScheme.white, 
        justifyContent: 'center',
        alignSelf: 'center', 
        fontSize: 20, 
        fontWeight: '500', 
        margin:3        
    },
    image:{
        height: 300,
        width: '100%', 
        marginTop: 50, 

    },
    primaryText:{
        fontSize: 35,
        color: colorScheme.primary, 
        fontWeight:'bold', 
        margin: 3
    }, 
    section:{
        justifyContent:'center',
        alignItems:'center'
    }

})

export default styles