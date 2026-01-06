import colorScheme from "../../../assets/colorScheme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        backgroundColor: colorScheme.white,
        height: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
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
        justifyContent:'space-between',
        alignItems:'center',
        height: '30%', 
        width: '100%', 
    },
    
    inputView:{
        height: '40%', 
        width: '100%',
    }

})

export default styles