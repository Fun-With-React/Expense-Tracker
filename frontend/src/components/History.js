import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";

import TransactionList from "./TransactionList";

const History = () => {
  const { expenses, income, listToHistory } = useSelector((state) => state.expenseSlice);
  const [list, setList] = useState(listToHistory);

  let selectChange = [];
  const getSelection = (selected) => {
    selectChange.length = "";
    if (!selectChange.length) {
      selectChange.push(selected);
    }
  };

  const dateFilter = (list) => {
    let dayNumberList = new Date(list?.expense?.id || list?.income?.id).getDate();
    let monthNumberList = new Date(list?.expense?.id || list?.income?.id).getMonth() + 1;
    let yearNumberList = new Date(list?.expense?.id || list?.income?.id).getFullYear();

    if (selectChange[0] === "week") {
      if (new Date().getFullYear() === yearNumberList && new Date().getMonth() + 1 === monthNumberList && new Date().getDate() - 20 <= dayNumberList) {
        return list;
      }
    }

    if (selectChange[0] === "month") {
      if ((new Date().getFullYear() === yearNumberList && new Date().getMonth() + 1 === monthNumberList) || new Date().getMonth() + 1 !== monthNumberList) {
        return list;
      }
    }
    if (selectChange[0] === "year") {
      if (new Date().getFullYear() !== yearNumberList || new Date().getFullYear() === yearNumberList) {
        return list;
      }
    }

    return;
  };
  const selectList = (selected) => {
    getSelection(selected);
    if (selected === "week") {
      setList(listToHistory.filter(dateFilter));
    }

    if (selected === "month") {
      setList(listToHistory.filter(dateFilter));
    }
    if (selected === "year") {
      setList(listToHistory.filter(dateFilter));
    }
  };

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
            <Form.Select onChange={(e) => selectList(e.target.value)} aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </Form.Select>
          </Col>
          <Col md={8}>
            {list.map((historyList, index) => (
              <TransactionList key={index} id={historyList?.income?.id || historyList?.expense?.id} money={historyList?.income?.money || historyList?.expense?.money} date={historyList?.income?.currentTime || historyList?.expense?.currentTime} text={historyList?.income?.text || historyList?.expense?.text} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default History;
