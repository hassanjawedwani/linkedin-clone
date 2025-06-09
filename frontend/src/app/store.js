import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx';
import userReducer from '../features/auth/authSlice.jsx';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})