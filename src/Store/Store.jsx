import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
const Store = configureStore({
  reducer: {
    counter: counterReducer,
    producter: productReducer,
  },
});
export default Store;
