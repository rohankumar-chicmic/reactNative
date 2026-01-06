import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/home';
import Login from './src/screens/auth/login';
import Signup from './src/screens/auth/signup';
import User from './src/screens/auth/user';
import { RootStackParamList } from './src/types/RootStackParamList';
import ForgotPassword from './src/screens/auth/forgotPassword';
import { Provider, useSelector } from 'react-redux';
import { persistor, RootState, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import toastConfig from './src/utils/toast.config';



const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Stack.Navigator >
      {!token ? <Stack.Group>
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='forgotPassword' component={ForgotPassword} />
      </Stack.Group>
        : <Stack.Group>

          <Stack.Screen name='user' component={User} />
        </Stack.Group>}
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={{ backgroundColor: 'white' }} >
          <NavigationContainer >
            <RootStack />
          </NavigationContainer>
          <Toast position='bottom' config={toastConfig} />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
