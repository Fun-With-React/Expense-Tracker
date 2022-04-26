import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
//import { useSelector } from 'react-redux'
import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";

import TransactionList from "./TransactionList";

const History = () => {
  const { expenses, income } = useSelector((state) => state.expenseSlice);
  return (
    <>
      <Balance />
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <Expense expense={expenses} />
        </Col>
        <Col md={6}>
          <Income income={income} />
        </Col>
      </Row>
      <Container className="mx-auto d-flex justify-content-center bg-light w-100">
        <Row className="w-100 d-block ">
          <Col className="my-5" md={3}>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={8}>
            <TransactionList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default History;
