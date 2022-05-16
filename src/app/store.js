import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
// slice importing 
import AddToCart from './Slices/AddToCart';


const reducers = combineReducers({
  cart: AddToCart,
  products: '',
  auth: ''
});

const persistconfig = {
  key: 'go_noise',
  storage,
}

const persistReducers = persistReducer(persistconfig, reducers)

// store 
export const store = configureStore({
  reducer: persistReducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

// persist store 
export const persistStr = persistStore(store);
