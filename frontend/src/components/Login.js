import { Button, Form, Stack } from "react-bootstrap";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack direction="horizontal" className="" gap={3}>
        <Form.Group className="mb-0" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-0" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Stack>
    </Form>
  );
};

export default Login;
