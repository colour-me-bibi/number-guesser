import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [number, setNumber] = useState(randomNumber(1, 100));

  return (
    <div className="App">
      <Container width={12}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter a number between 1 and 100</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter a number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </Form.Group>
        </Form>

        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                if (number === randomNumber(1, 100)) {
                  alert("You guessed the number!");
                } else if (number > randomNumber(1, 100)) {
                  alert("Your guess is too high!");
                } else {
                  alert("Your guess is too low!");
                }
              }}
            >
              Submit
            </Button>
          </Col>

          <Col>
            <Button
              variant="secondary"
              onClick={() => {
                setNumber(randomNumber(1, 100));
              }}
            >
              New Number
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
