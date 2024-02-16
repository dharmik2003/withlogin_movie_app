// import { configureStore } from "@reduxjs/toolkit";
// import LoginSlice from "../Slice/LoginSlice";
// import SignupSlice from "../Slice/SignupSlice";

// export const store=configureStore({

//     reducer:{
//         login:LoginSlice,
//         sign:SignupSlice
//     }
// })

// export type RootState = ReturnType<typeof store.getState>;

// export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginSlice from '../Slice/LoginSlice';
import SignupSlice from '../Slice/SignupSlice';

const rootReducer = combineReducers({
  login: LoginSlice,
  sign: SignupSlice
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;






