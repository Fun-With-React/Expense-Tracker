import AddIncomeExpense from "./components/AddIncomeExpense";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Header from "./components/Header";
import History from "./components/History";

function App() {
  return (
    <>
    <Header/>
    <History/>
    <Balance />
    <IncomeExpense />
    <AddIncomeExpense />
    </>
  );
}

export default App;
