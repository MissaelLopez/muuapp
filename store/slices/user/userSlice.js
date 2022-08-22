import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuthenticated: false,
    token: null,
    id: null,
    isLoading: false,
  },
  reducers: {
    startLoadingUser: (state) => {
      state.isLoading = true;
    },
    setAuth: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.id = action.payload.user;
    },
    setUser: (state, action) => {
      const { email, fullname, username, version } = action.payload;
      state.user = { email, fullname, username, version };
    },
  },
});

export const { startLoadingUser, setAuth, setUser } = userSlice.actions;
