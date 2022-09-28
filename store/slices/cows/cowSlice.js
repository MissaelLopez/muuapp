import { createSlice } from "@reduxjs/toolkit";

export const cowSlice = createSlice({
  name: "cow",
  initialState: {
    cows: [],
    isLoading: false,
  },
  reducers: {
    startLoadingCows: (state) => {
      state.isLoading = true;
    },
    setCows: (state, action) => {
      state.cows = action.payload;
    },
    updateCows: (state, action) => {
      state.cows.push(action.payload);
    },
  },
});

export const { startLoadingCows, setCows, updateCows } = cowSlice.actions;
