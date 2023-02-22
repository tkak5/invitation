import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface inputState {
  name: string;
  date: Array<{ [index: string]: number | number[] }>;
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
    changeDate: (
      state,
      action: PayloadAction<{
        index: number;
        unit: string;
        value: number | number[];
      }>
    ) => {
      state.date[action.payload.index][action.payload.unit] =
        action.payload.value;
    },
    pushDate: (state) => {
      state.date = [...state.date, {}];
    },
    popDate: (state) => {
      // let a = [];
      // for (let i = 0; i < state.date.length; i++) {
      //   a.push(state.date[i]);
      // }
      // state.date = a;
      state.date.pop();
    },
  },
});

export const { changeName, changeDate, pushDate, popDate } = inputSlice.actions;

export default inputSlice.reducer;
