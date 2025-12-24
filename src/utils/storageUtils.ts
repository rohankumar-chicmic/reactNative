import AsyncStorage from "@react-native-async-storage/async-storage";

const getObjectValue = async (email: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(email);
        const returnValue = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log(returnValue);
        return returnValue
    } catch (e: any) {
        
        console.log(e, 'cannot login the user')

    }
}


const setObjectValue = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(value.email, jsonValue);
    }
    catch (e) {

      console.log(e, 'cannot signup the user')
    }
  }
  
export {getObjectValue, setObjectValue}