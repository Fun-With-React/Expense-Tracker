import {createSlice} from '@reduxjs/toolkit'
export const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses : 0,
        income: 0,
        balance:0
    },
    reducers: {

        addExpense : (state,action) => {
           state.expenses += action.payload
    },

    addIncome: (state,action) => {
        state.income += action.payload
    }
}
})

export const {addExpense,addIncome} = expenseSlice.actions
export default expenseSlice.reducer