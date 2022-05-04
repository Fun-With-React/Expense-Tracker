import { configureStore } from '@reduxjs/toolkit'
import expenseSlice from './reducers/amountReducer'
export default configureStore({
    reducer : {
        expenseSlice: expenseSlice
    }
})