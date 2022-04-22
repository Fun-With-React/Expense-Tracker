import React, { useRef, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addExpense, addIncome, addListExpense, addListIncome } from "../reducers/amountReducer";

const AddIncomeExpense = () => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const listDate = new Date(Date.now()).toLocaleString("en-US", { month: "short" }) + " " + new Date().getDate() + ", " + new Date().getFullYear();
  const dispatch = useDispatch();

  const amountRef = useRef();
  const textRef = useRef();
  const amountincRef = useRef();
  const textincRef = useRef();
  const expenseToDispatch = () => {
    if(!amount){
      <p>Please enter a transaction</p>
    } else{
    dispatch(addExpense(amount));
    dispatch(addListExpense({ text: type, money: amount, currentTime: listDate }));

    amountRef.current.value = "";
    textRef.current.value = "";
    setAmount(0);
    setType("");
    }
  };

  const incomeToDispatch = () => {
   if(!amount){
     <p>Please enter a transaction</p>
   } else{
    dispatch(addIncome(amount));
    dispatch(addListIncome({ text: type, money: amount, currentTime: listDate }));
    amountincRef.current.value = "";
    textincRef.current.value = "";
    setAmount(0);
    setType("");
   }
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Form style={{ padding: "20px",marginLeft:"70px" }}>
            <Form.Group controlId="name">
              <Form.Label> Add Expenses : </Form.Label>

              <Form.Control type="name" style={{ width: "25%", marginTop: "4px" }} ref={amountRef} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter amount"></Form.Control>
              <Form.Control className="my-2" type="name" style={{ width: "70%" }} ref={textRef} onChange={(e) => setType(e.target.value)} placeholder="Enter type of expenses"></Form.Control>
            </Form.Group>
            <Button className="my-3" onClick={() => expenseToDispatch()}>
              Add Expenses
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <Form style={{ padding: "20px" }}>
            <Form.Group controlId="name">
              <Form.Label> Add Income: </Form.Label>

              <Form.Control type="name" style={{ width: "25%", marginTop: "4px" }} placeholder="Enter amount" ref={amountincRef} onChange={(e) => setAmount(Number(e.target.value))}></Form.Control>
              <Form.Control className="my-2" type="name" style={{ width: "70%" }} ref={textincRef} onChange={(e) => setType(e.target.value)} placeholder="Enter type of income"></Form.Control>
            </Form.Group>
            <Button className="my-3" onClick={() => incomeToDispatch()}>
              Add Income
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddIncomeExpense;
