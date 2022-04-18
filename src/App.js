import AddIncomeExpense from "./components/AddIncomeExpense";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";


function App() {
  return (
    <>
    <h1 className='heading'>Expense Tracker</h1>
    <Balance />
    <IncomeExpense />
    <AddIncomeExpense />
    </>
  );
}

export default App;
