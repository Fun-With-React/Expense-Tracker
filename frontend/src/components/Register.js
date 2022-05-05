import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };
  return (
    <Container className="w-100">
      <Row>
        <Col md="0">
          <Form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">New Account Sign up Please.</p>
            <Form.Label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </Form.Label>
            <FormControl name="name" type="text" id="defaultFormRegisterNameEx" className="form-control" />
            <br />
            <Form.Label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </Form.Label>
            <FormControl type="email" id="defaultFormRegisterEmailEx" name="email" className="form-control" />
            <br />
            <Form.Label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </Form.Label>
            <FormControl type="email" id="defaultFormRegisterConfirmEx" name="confirmEmail" className="form-control" />
            <br />
            <Form.Label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
              Your password
            </Form.Label>
            <FormControl type="password" id="defaultFormRegisterPasswordEx" name="password" className="form-control" />
            <div className="text-center mt-4">
              <Button className="w-100" color="unique" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
