// src/pages/Dashboard.js

import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSyncAlt, FaSearch, FaBell } from "react-icons/fa";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
// Register required chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState(null); // Set initial data state as null

  // Sample data and options for Line Chart 1
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 9, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data and options for Line Chart 2
  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const handleRefresh = () => {
    // Simulate fetching data (you can replace this with actual API call)
    setData(null); // Reset to null to simulate 'No Data' state
    /*setTimeout(() => {
      setData("Some job status data here..."); // Simulate data fetching
    }, 1000); // Simulate delay for fetching data
    */
  };

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
            <Card.Header>
              {" "}
              <div style={{ fontWeight: "bold" }}>Device Summary</div>
            </Card.Header>
            <Card.Body style={{ padding: "20px" }}>
              <Card.Title></Card.Title>
              <Row className="gy-3">
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Total</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    122
                  </div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Active</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>
                    121
                  </div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Inactive</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>01</div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Available</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>0</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="gx-2 gy-4">
          <Card>
            <Card.Header>
              {" "}
              <div style={{ fontWeight: "bold" }}>Alert</div>
            </Card.Header>
            <Card.Body style={{ padding: "20px" }}>
              <Card.Title></Card.Title>
              <Row className="gy-3">
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Alert</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>10</div>
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>Calls</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>08</div>
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: "bold" }}>SMS</div>
                  <div style={{ fontSize: "1.5em", marginTop: "10px" }}>06</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="gx-2 gy-4">
          <Card
            style={{
              minHeight: "250px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card.Header>
              <div style={{ fontWeight: "bold" }}>Job Status</div>
            </Card.Header>
            <Card.Body
              style={{
                padding: "10px",
                display: "flex", // Use flexbox to center content
                flexDirection: "column", // Stack text and button vertically
                justifyContent: "center", // Center content vertically
                alignItems: "center", // Center horizontally
                textAlign: "center", // Center the text
                height: "100%", // Ensure the body takes full height of the card
              }}
            >
              {data ? (
                <>
                  <Card.Title>Job Status Information</Card.Title>
                  <Card.Text>{data}</Card.Text>
                </>
              ) : (
                <>
                  <Card.Text>No Data Found</Card.Text>
                  <Button variant="link" onClick={handleRefresh}>
                    Refresh
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gx-2 gy-2">
        <Col xs={12} md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "355px", marginTop: "-95px" }}>
            <Card.Header>
              {" "}
              <div style={{ fontWeight: "bold" }}>Transactions</div>
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title></Card.Title>
              <Row></Row>
              <Row></Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "355px", marginTop: "-95px" }}>
            <Card.Header>
              {" "}
              <div style={{ fontWeight: "bold" }}>Upcoming Payments</div>
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title></Card.Title>
              <Row></Row>
              <Row></Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="gx-2 gy-2">
          <Card style={{ minHeight: "268px", marginTop: "8px" }}>
            <Card.Header
              as="h5"
              style={{
                display: "flex", // Use flexbox to align the content
                justifyContent: "space-between", // Space between title and icon
                alignItems: "center", // Center align items vertically
              }}
            >
              Tickets
              <FaBell style={{ cursor: "pointer" }} />
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
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
                  <button className="btn btn-primary ms-2">
                    Create new User
                  </button>
                </div>
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Row>
                {/* Nested row 1 */}
                <Col md={12}>
                  <Card
                    style={{
                      minHeight: "100px",
                      marginBottom: "0px",
                      border: "none",
                    }}
                  >
                    <Card.Body>
                      <Card.Text>
                        <Row className="gy-3">
                          <Col md={2} style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: "bold" }}>Client</div>
                            <div
                              style={{ fontSize: "1.5em", marginTop: "10px" }}
                            >
                              03
                            </div>
                          </Col>
                          <Col md={2} style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: "bold" }}>
                              Origination
                            </div>
                            <div
                              style={{ fontSize: "1.5em", marginTop: "10px" }}
                            >
                              05
                            </div>
                          </Col>
                          <Col md={2} style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: "bold" }}>Site</div>
                            <div
                              style={{ fontSize: "1.5em", marginTop: "10px" }}
                            >
                              10
                            </div>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="g-0">
                {/* Nested Column 1 */}
                <Col md={6}>
                  <Card
                    style={{
                      minHeight: "600px", // Ensure minimum height for uniformity
                      marginTop: "0px",
                      display: "flex", // Make card a flex container
                      flexDirection: "column", // Stack content vertically
                    }}
                  >
                    <Card.Body
                      style={{
                        flex: 1, // Allow body to take remaining space
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", // Center content vertically
                        padding: "20px",
                      }}
                    >
                      
                    </Card.Body>
                  </Card>
                </Col>

                {/* Nested Column 1 */}
                <Col md={6}>
                  <Card
                    style={{
                      minHeight: "600px", // Ensure minimum height for uniformity
                      marginTop: "0px",
                      display: "flex", // Make card a flex container
                      flexDirection: "column", // Stack content vertically
                    }}
                  >
                    <Card.Body
                      style={{
                        flex: 1, // Allow body to take remaining space
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", // Center content vertically
                        padding: "20px",
                      }}
                    >
                     
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
                <FaSyncAlt
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    setStartDate(null);
                    setEndDate(null);
                  }}
                />
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title>Line Chart 1</Card.Title>
              <Line data={data1} options={options1} />

              <Card.Title className="mt-4">Line Chart 2</Card.Title>
              <Line data={data2} options={options2} />
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
