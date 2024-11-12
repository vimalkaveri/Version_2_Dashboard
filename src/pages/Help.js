import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSyncAlt, FaSearch } from "react-icons/fa";
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

  // Sample data and options for Line Chart 1
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
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

  return (
    <Container fluid>
      {/* Other rows here */}
      <Row className="gx-2 gy-4">
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
    </Container>
  );
};

export default Dashboard;
