import { createSlice } from '@reduxjs/toolkit';

const daySlice = createSlice({
  initialState: '',
  name: 'daySlice',
  reducers: {
    setDay: (state, action) => {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export const { setDay } = daySlice.actions;
export default daySlice.reducer;
