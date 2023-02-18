import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface inputState {
  name: string;
  date: Array<string>;
}

const initialState: inputState = {
  name: "",
  date: [],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeDate: (state, action: PayloadAction<Array<string>>) => {
      state.date = action.payload;
    },
  },
});

export const { changeName, changeDate } = inputSlice.actions;

export default inputSlice.reducer;
