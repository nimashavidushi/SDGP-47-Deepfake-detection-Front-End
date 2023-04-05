import React from "react";
import "./reviewPage.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function reviewPg() {
  return (
    <div className="reviewContainer">
      <header>
        <h1>DeepZeroX</h1>
        <nav className="nav-buttons">
          <ul>
            <li>
              <Link to="/">
                <Button className="home-button" variant="primary">Home</Button>
              </Link>
            </li>
            <li>
              <Link to="/UseScannerPg">
                <Button className="scanner-button" variant="primary">Scanner</Button>
              </Link>
            </li>
            <li>
              <Link to="/reviewPg">
                <Button className="review-button" variant="primary">Review</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="reviewPgMain">
        <Form className="form">
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" name="firstname" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" name="lastname" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Review:</Form.Label>
            <Form.Control className="review" as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </main>
    </div>
  );
}

export default reviewPg;