import { configureStore } from "@reduxjs/toolkit";
import authReducer from "components/Authentication/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
