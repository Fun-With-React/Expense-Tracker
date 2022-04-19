import React from "react";
import { Row, Col } from "react-bootstrap";

const IncomeExpense = () => {
  return (
    <>
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Expenses:</h4>
            <p className="mt-1">$100.00</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Income:</h4>
            <p className="mt-1">$1,500.00</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpense;
