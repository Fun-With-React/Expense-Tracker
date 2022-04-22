import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";

const IncomeExpense = () => {
  const { expenses, income, listExpense ,listIncome} = useSelector((state) => state.expenseSlice);

  return (
    <>
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Expenses:</h4>
            <p className="mt-1">${expenses}</p>
          </div>
          {listExpense.map((expen, index) => (
            <TransactionList key={index} money={expen.money} date={expen.currentTime} text={expen.text} />
          ))}
        </Col>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Income:</h4>
            <p className="mt-1">${income}</p>
          </div>
        {listIncome.map((expen,index) => (
          <TransactionList key={index} money={expen.money} data={expen.currentTime} text={expen.text}/>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpense;
