import React from "react";
import { Card } from "react-bootstrap";

const Balance = () => {
  return (
    <>
      <Card className="balance">
        <div className="d-flex gap-3">
          <h3>Balance:</h3>
          <p className="mt-2">$2,000.00</p>
        </div>
      </Card>
    </>
  );
};

export default Balance;
