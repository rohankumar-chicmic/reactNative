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
    },
    card: {
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
      },
      id: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
      },
      title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
      },
      description: {
        fontSize: 14,
        color: '#444',
      },

})

export default styles




