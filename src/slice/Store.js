
import {persistReducer ,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './UserSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

let rootReducer= combineReducers({
  user:userReducer
})
const persistConfig={
  key:"root",
  storage,
  whitelist:['user'],

}
let persistedreducer=persistReducer(persistConfig,rootReducer)
let store = configureStore({
  reducer:persistedreducer
})
let persist=persistStore(store)
export  {store,persist}


