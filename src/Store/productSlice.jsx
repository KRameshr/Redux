import { createSlice } from "@reduxjs/toolkit";
const intialStateValues = {
  cart:
    localStorage.getItem("mycart") != undefined
      ? JSON(localStorage.getItem("mycart"))
      : [],
};
export const productSlice = createSlice({
  name: "product",
  initialState: intialStateValues,
  reducers: {
    addCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export const { addCart } = productSlice.actions;
export default productSlice.reducer;
