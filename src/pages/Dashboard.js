// src/pages/Dashboard.js

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSyncAlt, FaSearch, FaBell } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState(null); // Set initial data state as null

  // Sample data and options for Bar Chart 1
  const alert = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Alert",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        barThickness: 30, // Adjusted bar thickness
      },
    ],
  };

  const alertoptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data and options for Bar Chart 2 with unique colors and bar thickness
  const callSMS = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Call",
        data: [28, 48, 40, 19, 86, 27, 60],
        borderColor: "rgba(57,108,47,1)",
        backgroundColor: "rgba(57,108,47, 0.6)",
        barThickness: 20,
      },
      {
        label: "SMS",
        data: [20, 48, 40, 25, 84, 20, 65],
        borderColor: "rgba(163,198,100,1)",
        backgroundColor: "rgba(163,198,100,0.6)",
        barThickness: 20,
      },
    ],
  };

  const callSMSoptions = {
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
const pieData = {
  labels: ["Active", "Inactive", "Availed", "On Progress"],
  datasets: [
    {
      data: [30, 20, 25, 25], // Example values
      backgroundColor: ["#28a745", "#dc3545", "#ffc107", "#007bff"], // Colors
      hoverBackgroundColor: [
        "#28a745cc",
        "#dc3545cc",
        "#ffc107cc",
        "#007bffcc",
      ], // Hover colors
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allow custom size without keeping the aspect ratio
  plugins: {
    legend: {
      position: "top", // Position legend to the right
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.raw}`, // Display raw value only
      },
    },
    datalabels: {
      color: "#fff", // Label color
      font: {
        size: 14, // Font size
        weight: "bold",
      },
      formatter: (value, context) => value, // Display raw value inside chart
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
            <Card.Header
              style={{
                fontWeight: "bold",
                backgroundColor: "#0D6EFD", // Set your desired background color here
                color: "#ffffff", // Set your desired text color here
              }}
            >
              <div>Device Summary</div>
            </Card.Header>
            <Card.Body style={{ padding: "20px", backgroundColor: "#f7f8fa" }}>
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
            <Card.Body style={{ padding: "20px", backgroundColor: "#f7f8fa" }}>
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
                backgroundColor: "#f7f8fa",
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
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
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
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
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
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
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
              className="text-bg-primary d-flex justify-content-between align-items-center"
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
                  <button class="btn btn-primary">Create new User</button>
                </div>
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
              <Row>
                <Col md={12}>
                  <Card style={{ minHeight: "100px", marginBottom: "0px" }}>
                    <Card.Body>
                      <Card.Text>
                        <Row className="gy-3">
                          {/* Statistics */}
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

                          {/* Adding the dropdowns aligned to the right */}
                          <Col
                            md={6}
                            className="d-flex justify-content-end align-items-center"
                            style={{ paddingRight: 0 }}
                          >
                            <div className="d-flex justify-content-end align-items-center w-100">
                              <div className="mx-2">
                                <Dropdown className="me-2">
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown1"
                                  >
                                    Client
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Client 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Client 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Client 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mx-2">
                                <Dropdown className="me-2">
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown2"
                                  >
                                    All Organization
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Organization 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Organization 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Organization 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mx-2">
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown3"
                                  >
                                    All Site
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Site 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Site 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Site 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mx-2">
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
                            </div>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Nested Column 1 */}
              <Row className="g-0">
                <Col md={7} style={{ height: "600px" }}>
                  {" "}
                  {/* Set fixed height for the column */}
                  <Card
                    style={{
                      height: "100%", // Make the card take the full height of the column
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
                        justifyContent: "flex-start", // Align items at the top
                        padding: "20px",
                        overflowY: "auto", // Make content scrollable if it exceeds the height
                      }}
                    >
                      <Row className="mb-3 g-1">
                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              SiFe Engineering
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>100</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                01-01-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>

                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              BASICE ELEMENT
                            </div>
                            <div>ignicop</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>95</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>

                      <Row className="mb-3  g-1">
                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              KALPATARU INDUSTRIES
                            </div>
                            <div>Kalpataru</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>117</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                16-02-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>

                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              INDIAN IOL CORPORATION
                            </div>
                            <div>IOCL</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>1</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>

                      <Row className="mb-3  g-1">
                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              Indian Oil Corporation
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>1</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>

                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              Indian Oil Corporation
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>1</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mb-3  g-1">
                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              Indian Oil Corporation
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>1</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>

                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              Indian Oil Corporation
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>1</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mb-3  g-1">
                        <Col>
                          <Card
                            style={{
                              padding: "15px",
                              textAlign: "left",
                              width: "280px", // Set the width of the Card
                              height: "120px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              Indian Oil Corporation
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>1</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Nested Column 2 */}
                <Col md={5} style={{ height: "600px" }}>
                  {" "}
                  {/* Set fixed height for the column */}
                  <Card
                    style={{
                      height: "100%", // Make the card take the full height of the column
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
                        justifyContent: "flex-start", // Align items at the top
                        padding: "20px",
                        overflowY: "auto", // Make content scrollable if it exceeds the height
                      }}
                    >
                      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                        SiFe Engineering
                      </div>
                      <div
                        style={{
                          marginTop: "-8px",
                          padding: "0px",
                        }}
                      >
                        <div style={{ fontSize: "18px", marginTop: "10px" }}>
                          Client Name
                        </div>
                        <div style={{ fontSize: "18px" }}>+91 9976006560</div>
                        <div style={{ fontSize: "18px" }}>support@sife.in</div>
                      </div>
                      {/* Different section for additional details */}
                      <div>
                        <div style={{ width: "400px", height: "300px" }}>
                          <Pie data={pieData} options={pieOptions} />
                        </div>

                        <div
                          style={{
                            display: "flex", // Use Flexbox for layout
                            flexWrap: "wrap", // Allow content to wrap to the next line
                            gap: "10px", // Space between the columns
                          }}
                        >
                          <Row className="gy-3">
                            {/* First Row, Column 1 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div style={{ fontWeight: "bold" }}>Device</div>
                              <div
                                style={{ fontSize: "1.5em", marginTop: "10px" }}
                              >
                                100
                              </div>
                            </Col>
                            {/* First Row, Column 2 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div style={{ fontWeight: "bold" }}>
                                Organization
                              </div>
                              <div
                                style={{ fontSize: "1.5em", marginTop: "10px" }}
                              >
                                10
                              </div>
                            </Col>
                            {/* First Row, Column 3 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div style={{ fontWeight: "bold" }}>Sites</div>
                              <div
                                style={{ fontSize: "1.5em", marginTop: "10px" }}
                              >
                                30
                              </div>
                            </Col>
                            {/* Second Row, Column 1 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div style={{ fontWeight: "bold" }}>Alerts</div>
                              <div
                                style={{ fontSize: "1.5em", marginTop: "10px" }}
                              >
                                80
                              </div>
                            </Col>
                            {/* Second Row, Column 2 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div style={{ fontWeight: "bold" }}>Calls</div>
                              <div
                                style={{ fontSize: "1.5em", marginTop: "10px" }}
                              >
                                350
                              </div>
                            </Col>
                            {/* Second Row, Column 3 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div style={{ fontWeight: "bold" }}>SMS</div>
                              <div
                                style={{ fontSize: "1.5em", marginTop: "10px" }}
                              >
                                300
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "780px", marginTop: "10px" }}>
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
              <Card.Title>Alert</Card.Title>
              <Bar data={alert} options={alertoptions} />

              <Card.Title className="mt-4">Call & SMS</Card.Title>
              <Bar data={callSMS} options={callSMSoptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <h3>Recent User</h3>
          <ul>
            <li>User Activity 1</li>
            <li>User Activity 2</li>
            <li>User Activity 3</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
