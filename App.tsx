import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/home';
import Login from './screens/login';
import { HeaderTitle } from '@react-navigation/elements';
import Signup from './screens/signup';
import User from './screens/user';
import { RootStackParamList } from './types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName='home'  >
      <Stack.Screen name='home' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={Signup} />
      <Stack.Screen name='user' component={User} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
