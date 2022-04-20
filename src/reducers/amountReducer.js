import {createSlice} from '@reduxjs/toolkit'
export const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses : 0
    },
    reducers: {

        addExpense : (state,action) => {
           state.expenses += action.payload
    }
}
})

export const {addExpense} = expenseSlice.actions
export default expenseSlice.reducer