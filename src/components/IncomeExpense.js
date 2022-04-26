import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Expense from "./Expense";
import Income from "./Income";
import TransactionList from "./TransactionList";

const IncomeExpense = () => {
  const { expenses, income, listExpense, listIncome } = useSelector((state) => state.expenseSlice);

  return (
    <>
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <Expense expense={expenses} />
          {listExpense.map((expense, index) => (
            <TransactionList key={index} id={expense.id} money={`-$${expense.money}`} date={expense.currentTime} text={expense.text} />
          ))}
        </Col>
        <Col md={6}>
          <Income income={income} />
          {listIncome.map((income, index) => (
            <TransactionList key={index} id={income.id} money={`$${income.money}`} date={income.currentTime} text={income.text} />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpense;
