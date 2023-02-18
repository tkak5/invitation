import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "@features/inputs/inputSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export type Appstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
