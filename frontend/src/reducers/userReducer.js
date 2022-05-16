import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    serverMessage: "",
    user: 0,
    token:JSON.parse(localStorage.getItem('token'))
  },
  reducers: {
    loginSubmit: (state, action) => {
      state.serverMessage = action.payload;
      
    },
    saveToken: (state,action) => {
      state.token = action.payload
    },
    logOut: (state) =>{
        state.token = localStorage.removeItem('token')
    }
  },
});

// Action creators are generated for each case reducer function
export const { loginSubmit,saveToken,logOut } = loginSlice.actions;

export default loginSlice.reducer;
