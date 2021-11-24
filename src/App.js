import React from "react"
import './App.css';
import reactDom from 'react-dom';
import { Button, Form } from "react-bootstrap"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit" controlId="loginButton">Login</Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
