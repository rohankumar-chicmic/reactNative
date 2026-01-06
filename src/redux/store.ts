import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import { apiSlice } from '../features/apiSlice'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();  

const rootReducer = combineReducers({
    auth: authReducer,
    [apiSlice.reducerPath] : apiSlice.reducer  
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
        serializableCheck: false,
    }).concat(apiSlice.middleware)
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export {store}