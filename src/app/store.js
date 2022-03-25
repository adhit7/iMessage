import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice.js';
import chatReducer from '../features/chatSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
