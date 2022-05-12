import React from "react";
import AddIncomeExpense from "./AddIncomeExpense";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";

const Home = () => {
  return (
    <>
      <Balance />
      <IncomeExpense />
      <AddIncomeExpense />
    </>
  );
};

export default Home;
