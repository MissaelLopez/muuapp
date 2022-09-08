import { createSlice } from '@reduxjs/toolkit';

export const ranchSlice = createSlice({
  name: 'ranch',
  initialState: {
    ranchs: [],
    isLoading: false,
  },
  reducers: {
    startLoadingRanch: (state) => {
      state.isLoading = true;
    },
    setRanch: (state, action) => {
      state.ranchs = action.payload;
    },
    updateRanch: (state, action) => {
      state.ranchs.push(action.payload);
    },
  }
});

export const { startLoadingRanch, setRanch, updateRanch} = ranchSlice.actions;