//src/pages/Profile.js

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h1>Profile</h1>
          <p>Welcome to your dashboard! Here you can manage everything.</p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                This is a dummy text for the first card. You can use this
                section to display some information.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                This is a dummy text for the second card. Displaying additional
                information in your dashboard.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                This is a dummy text for the third card. Showcase some more
                relevant details here.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Recent Activity</h3>
          <ul>
            <li>Activity 1: Dummy event occurred</li>
            <li>Activity 2: Another dummy event</li>
            <li>Activity 3: Yet another event</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
