import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './todo';

export const store = configureStore({
  reducer: {
    todo: toDoReducer
  },
})