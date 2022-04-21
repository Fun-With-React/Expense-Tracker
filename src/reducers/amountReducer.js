import { createSlice } from "@reduxjs/toolkit";
export const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: 0,
    income: 0,
    balance: 0,
    listExpense: [],
    listIncome: []
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses += action.payload;
      state.balance -= action.payload;
    },

    addIncome: (state, action) => {
      state.income += action.payload;
      state.balance += action.payload;
    },
    addListExpense: (state, action) => {
      state.listExpense.push(action.payload);
    },
    addListIncome:(state,action) => {
      state.listIncome.push(action.payload)
    }
  },
});

export const { addExpense, addIncome, addListExpense, addListIncome } = expenseSlice.actions;
export default expenseSlice.reducer;
