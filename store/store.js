import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user";
import { ranchSlice } from "./slices/ranchs";
import { cowSlice } from "./slices/cows";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ranchs: ranchSlice.reducer,
    cows: cowSlice.reducer,
  },
});
