import { createSlice } from '@reduxjs/toolkit';

const monthSlice = createSlice({
  initialState: '',
  name: 'monthSlice',
  reducers: {
    setMonth: (state, action) => {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export const { setMonth } = monthSlice.actions;
export default monthSlice.reducer;
