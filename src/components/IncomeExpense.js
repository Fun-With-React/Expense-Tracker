import React,{useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {expenseSlice} from '../reducers/amountReducer'

const IncomeExpense = () => {
  const dispatch = useDispatch()
 const {expenses} = useSelector((state) => state.expenseSlice)
 
  return (
    <>
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Expenses:</h4>
            <p className="mt-1">{expenses}</p>
          </div>
          
        </Col>
        {/* <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Income:</h4>
            <p className="mt-1">$1,500.00</p>
          </div>
        </Col> */}
      </Row>
    </>
  );
};

export default IncomeExpense;
