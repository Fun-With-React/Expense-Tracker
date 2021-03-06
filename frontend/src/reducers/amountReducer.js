import { createSlice } from "@reduxjs/toolkit";
export const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: 0,
    income: 0,
    balance: 0,
    listExpense: localStorage.getItem("listExpense") ? JSON.parse(localStorage.getItem("listExpense")) : [],
    listIncome: localStorage.getItem("listIncome") ? JSON.parse(localStorage.getItem("listIncome")) : [],
    listToHistory: localStorage.getItem("listExpenseHistory")
      ? JSON.parse(localStorage.getItem("listExpenseHistory"))
        : []
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
      state.listToHistory.push({ expense: action.payload });
      localStorage.setItem("listExpense", JSON.stringify(state.listExpense));
      localStorage.setItem("listToHistory", JSON.stringify(state.listToHistory));
    },
    addListIncome: (state, action) => {
      state.listIncome.push(action.payload);
      state.listToHistory.push({ income: action.payload });
      localStorage.setItem("listIncome", JSON.stringify(state.listIncome));
      localStorage.setItem("listToHistory", JSON.stringify(state.listToHistory));
    },
    deleteExpenseFromLocalStorage: (state, action) => {
      const newList = JSON.parse(localStorage.getItem("listExpense"));
      state.listExpense = newList.filter((each) => {
        return each.id !== action.payload;
      });
      localStorage.setItem("listExpense", JSON.stringify(state.listExpense));
    },
    deleteIncomeFromLocalStorage: (state, action) => {
      const newList = JSON.parse(localStorage.getItem("listIncome"));
      state.listIncome = newList.filter((each) => {
        return each.id !== action.payload;
      });
      localStorage.setItem("listIncome", JSON.stringify(state.listIncome));
    },
  },
});

export const { addExpense, addIncome, addListExpense, addListIncome, deleteExpenseFromLocalStorage, deleteIncomeFromLocalStorage } = expenseSlice.actions;
export default expenseSlice.reducer;
