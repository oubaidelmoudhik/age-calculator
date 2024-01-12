import { configureStore } from '@reduxjs/toolkit';
import dayReducer from './slices/daySlice';
import monthSlice from './slices/monthSlice';
import yearSlice from './slices/yearSlice';

export const store = configureStore({
  reducer: {
    day: dayReducer,
    month: monthSlice,
    year: yearSlice,
  },
});
