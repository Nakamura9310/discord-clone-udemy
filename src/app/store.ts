import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/userSlice';

// @see https://redux.js.org/usage/usage-with-typescript

export const store = configureStore({
  reducer: useReducer,
});

// storeのdispatchの型をexport
export type AppDispatch = typeof store.dispatch;

// 現在の状態の方をexport
export type RootState = ReturnType<typeof store.getState>;
