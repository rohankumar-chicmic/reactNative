import colorScheme from "../../../assets/colorScheme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        backgroundColor: colorScheme.white,
        height: '100%',
        alignItems: 'center', 
        justifyContent: 'space-around',
        padding: 20,
    },
    button:{
        height: 50,
        width: '95%',
        backgroundColor: colorScheme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: '',
        shadowOpacity: 0.3,
        margin: 5, 
    },
    text:{
        color: colorScheme.white, 
        justifyContent: 'center',
        alignSelf: 'center', 
        fontSize: 20, 
        fontWeight: '500', 
        margin:2        
    },
    image:{
        height: 40,
        width: 40 ,
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: colorScheme.inputBg,
        borderRadius: 10, 
        padding : 6
    },
    primaryText:{
        fontSize: 35,
        color: colorScheme.primary, 
        fontWeight:'bold', 
        margin: 15
    }, 
    section:{
        justifyContent:'space-evenly',
        alignItems:'center',
        height: '30%', 
        width: '100%'
    },
    textInputStyle:{
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: 'black', 
        height: '20%',
        width: '95%', 
        borderColor: colorScheme.inputBg,
        margin: 10,
        padding: 20,
        backgroundColor: colorScheme.inputBg
    }, 
    inputView:{
        height: '40%', 
        width: '100%',
    }

})

export default styles