import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    counter: counterSlice,
  },
})