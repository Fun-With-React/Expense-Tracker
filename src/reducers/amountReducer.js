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
      : localStorage.setItem(
          "listExpenseHistory",
          JSON.stringify([
            { expense: { id: 1619582100000, text: "aa", money: "-$11", currentTime: "Apr 28, 2021" } },
            { income: { id: 1619582102000, text: "aa", money: "$11", currentTime: "Apr 28, 2021" } },
            { expense: { id: 1648439702000, text: "bb", money: "-$22", currentTime: "Mar 28, 2022" } },
            { income: { id: 1648439703000, text: "bb", money: "$22", currentTime: "Mar 28, 2022" } },
            { income: { id: 1649303703000, text: "cc", money: "$33", currentTime: "Apr 07, 2022" } },
            { expense: { id: 1651108247885, text: "cc", money: "-$33", currentTime: "Apr 28, 2022" } },
            { expense: { id: 1651062145000, text: "cc", money: "-$33", currentTime: "Apr 27, 2022" } },
            { expense: { id: 1650889345000, text: "cc", money: "-$33", currentTime: "Apr 25, 2022" } },
            { expense: { id: 1651234945000, text: "cc", money: "-$33", currentTime: "Apr 29, 2022" } },
          ]),
        ),
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
