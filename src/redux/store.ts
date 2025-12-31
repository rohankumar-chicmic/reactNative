import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import apiReducer from '../features/apiSlice'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();  

const rootReducer = combineReducers({
    auth: authReducer,
    api: apiReducer
})

const persistConfig ={
    key: 'root', 
    storage: AsyncStorage, 
    whiteList: ['auth', 'api'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);    

const store = configureStore({
    reducer: persistedReducer, 
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export {store}