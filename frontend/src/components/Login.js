import axios from "axios";
import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

const Login = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data: formDataObj,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setMessage(response.data.status);

        //handle success
      })
      .catch(function (err) {
        setMessage(err.response.data.status);
        //handle error
      });
  };
  return (
    <>
      {message === "Succesful Login" ? (
        ""
      ) : (
        <Form onSubmit={handleSubmit}>
          <Stack direction="horizontal" className="" gap={3}>
            {message ? (
              <div className="alert alert-warning mb-0 p-2" role="alert">
                {message}
              </div>
            ) : (
              ""
            )}
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
      )}
    </>
  );
};

export default Login;
