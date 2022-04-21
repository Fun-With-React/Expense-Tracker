import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
//import {expenseSlice} from '../reducers/amountReducer'

const IncomeExpense = () => {
  const { expenses, income } = useSelector((state) => state.expenseSlice);

  return (
    <>
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Expenses:</h4>
            <p className="mt-1">{expenses}</p>
          </div>
          <TransactionList />
          <TransactionList />
          <TransactionList />
          <TransactionList />
        </Col>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Income:</h4>
            <p className="mt-1">{income}</p>
          </div>
          <TransactionList />
          <TransactionList />
          <TransactionList />
          <TransactionList />
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpense;
