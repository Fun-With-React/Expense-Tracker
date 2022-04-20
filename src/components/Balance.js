import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux"

const Balance = () => {
  const {balance} = useSelector((state) => state.expenseSlice)
  return (
    <>
      <Card className="balance">
        <div className="d-flex gap-3">
          <h3>Balance:</h3>
          <p className="mt-2">{balance}</p>
        </div>
      </Card>
    </>
  );
};

export default Balance;
