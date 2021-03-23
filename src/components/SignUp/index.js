import React from "react";
import "./style.css";
import { Form, Button, Container } from "react-bootstrap";
export default function SignUp() {
  return (
    <div className="sign-up">
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control type="number" placeholder="Enter mobile no." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter date of birth" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Re-Type Password</Form.Label>
            <Form.Control type="password" placeholder="Re-Type password" />
          </Form.Group>

          <Button variant="primary" type="button">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
