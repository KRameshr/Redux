import { createSlice } from "@reduxjs/toolkit";
const intialStateValues = {
  count: 230,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: intialStateValues,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
