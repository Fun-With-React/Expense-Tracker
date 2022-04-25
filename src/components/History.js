import React from 'react'
//import { useSelector } from 'react-redux'
import Balance from './Balance'

import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'


const History = (expenses,income) => {
    // const { expenses, income} = useSelector((state) => state.expenseSlice);
  return (
    <>
    <Balance/>
    <IncomeExpense expense={expenses} income={income}  />
    <TransactionList />
    
    </>
  )
}

export default History