import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/loginSlice";
import getSessionSlice from "./features/getSession";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    session: getSessionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
