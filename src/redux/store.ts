import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";


const rootReducer = combineReducers({
    auth: authReducer
})

const persistConfig ={
    key: 'root', 
    storage: AsyncStorage, 
    whiteList: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);    

const store = configureStore({
    reducer: persistedReducer, 
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export {store}