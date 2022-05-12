import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Register from "./Register";

const Guest = () => {
  const { serverMessage } = useSelector((state) => state.loginSlice);
  return (
    <>
      {serverMessage === "Succesful Login" ? (
        ""
      ) : (
        <Container className="my-5 w-100">
          <Row>
            <Col sm={6}>
              <h1>Welcome to Expense Tracker</h1>
              <p>Expense Management Technology (EMT) EMT is a software that allows businesses to track their expenses and generate reports. This helps them keep a better eye on how much money they are spending and where it's going. EMT provides a detailed report of your company's finances, including income, expenses, cash flow, and balance sheet.</p>
            </Col>
            <Col className="p-0" sm={6}>
              <Register />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Guest;
