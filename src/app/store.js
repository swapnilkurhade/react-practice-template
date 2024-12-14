import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/statemangers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
