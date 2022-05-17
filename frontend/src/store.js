import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./reducers/amountReducer";
import loginSlice from "./reducers/userReducer";
export default configureStore({
  reducer: {
    loginSlice: loginSlice,
    expenseSlice: expenseSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
