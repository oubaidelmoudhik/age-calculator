import { createSlice } from '@reduxjs/toolkit';

const yearSlice = createSlice({
  initialState: '',
  name: 'yearSlice',
  reducers: {
    setYear: (state, action) => {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export const { setYear } = yearSlice.actions;
export default yearSlice.reducer;
