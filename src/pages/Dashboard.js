// src/pages/Dashboard.js

import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSyncAlt, FaSearch } from "react-icons/fa";



const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Container fluid>
      {/* 
      <Row className="mb-4">
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      */}
      <Row className="gx-2 gy-4">
        <Col md={5} className="gx-2 gy-4">
          <Card>
            <Card.Body style={{ padding: "20px" }}>
              <Card.Title>
                <div style={{ fontWeight: "bold" }}>Device Summary</div>
              </Card.Title>
              <Row className="gy-3">
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Total Device</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Active Device</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Inactive Device</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Available Device</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="gx-2 gy-4">
          <Card>
            <Card.Body style={{ padding: "20px" }}>
              <Card.Title>
                <div style={{ fontWeight: "bold" }}>Customer</div>
              </Card.Title>
              <Row className="gy-3">
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Client</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Origination</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Site</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    ###
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "250px" }}>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title>Job Status</Card.Title>
              <Card.Text>
                This is a dummy text for the third card. Showcase some more
                relevant details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gx-2 gy-4">
        <Col md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "355px", marginTop: "-95px" }}>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title>Recent Transactions</Card.Title>
              <Row></Row>
              <Row></Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "355px", marginTop: "-95px" }}>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title>Upcoming Payments</Card.Title>
              <Row></Row>
              <Row></Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "250px", marginTop: "8px" }}>
            <Card.Header as="h5">Tickets</Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title>Tickets</Card.Title>
              <Card.Text>
                This is a dummy text for the third card. Showcase some more
                relevant details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gx-2 gy-4">
        <Col md={8} className="gx-2 gy-4">
          <Card style={{ minHeight: "600px", marginTop: "10px" }}>
            <Card.Header
              as="h5"
              className="d-flex justify-content-between align-items-center"
            >
              <span>User Summary</span>
              <div className="d-flex align-items-center">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ width: "150px" }}
                  />
                  <span
                    className="input-group-text"
                    style={{ cursor: "pointer" }}
                  >
                  <FaSearch />
                  </span>
                  <button className="btn btn-primary ms-2">Create new User</button>
                </div>
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Row>
                {/* Nested row 1 */}
                <Col md={12}>
                  <Card style={{ minHeight: "100px", marginBottom: "0px" }}>
                    <Card.Body>
                      <Card.Title>Sub-Card 1</Card.Title>
                      <Card.Text>
                        Content for the first sub-card inside User Summary.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="g-0">
                {/* Nested Column 1 */}
                <Col md={6}>
                  <Card style={{ minHeight: "600px", marginTop: "0px" }}>
                    <Card.Body>
                      <Card.Title>Sub-Card 1</Card.Title>
                      <Card.Text>
                        Content for the first sub-card inside User Summary.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Nested Column 2 */}
                <Col md={6}>
                  <Card style={{ minHeight: "600px", marginTop: "0px" }}>
                    <Card.Body>
                      <Card.Title>Sub-Card 2</Card.Title>
                      <Card.Text>
                        Content for the second sub-card inside User Summary.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "775px", marginTop: "10px" }}>
            <Card.Header
              as="h5"
              className="d-flex align-items-center justify-content-between"
            >
              <span>Alert</span>
              <div className="d-flex justify-content-end align-items-center">
                <div className="col-4" style={{ marginRight: "15px" }}>
                  {" "}
                  {/* Custom margin */}
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="form-control"
                    placeholderText="From"
                  />
                </div>
                <div className="col-4">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="form-control"
                    placeholderText="To"
                    minDate={startDate}
                  />
                </div>

                {/* Refresh icon for both From and To date pickers */}
                <FaSyncAlt
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    setStartDate(null);
                    setEndDate(null);
                  }} // Reset both start and end date when clicked
                />
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Text>
              {/* Other card content here */}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
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

export default Dashboard;
