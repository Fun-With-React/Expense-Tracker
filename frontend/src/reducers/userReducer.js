import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    serverMessage: "",
    user: 0,
  },
  reducers: {
    loginSubmit: (state, action) => {
      state.serverMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSubmit } = loginSlice.actions;

export default loginSlice.reducer;
