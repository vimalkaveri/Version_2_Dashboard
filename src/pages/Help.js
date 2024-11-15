import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSyncAlt } from "react-icons/fa";
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

  const resetDatePickers = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Alert",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        barThickness: 30,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Value" },
      },
      x: {
        title: { display: true, text: "Month" },
      },
    },
  };

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Calls",
        data: [28, 48, 40, 19, 86, 27, 60],
        borderColor: "rgba(51, 0, 0, 1)",
        backgroundColor: "rgba(51, 0, 0, 0.6)",
        barThickness: 20,
      },
      {
        label: "SMS",
        data: [20, 48, 40, 25, 84, 20, 65],
        borderColor: "rgba(115,96,91,1)",
        backgroundColor: "rgba(115,96,91,0.6)",
        barThickness: 20,
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Value" },
      },
      x: {
        title: { display: true, text: "Month" },
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
  plugins: {
    legend: {
      position: "right", // Position legend to the right
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


  return (
    <Container fluid>
      <Row className="gx-2 gy-4">
        <Col md={4}>
          <Card>
            <Card.Header>
              <span>Alert</span>
              <div className="d-flex align-items-center">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="From"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="To"
                  minDate={startDate}
                />
                <FaSyncAlt
                  onClick={resetDatePickers}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Card.Header>
            <Card.Body>
              <Bar data={data1} options={options1} />
              <Bar data={data2} options={options2} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header as="h5">Simple Pie Chart</Card.Header>
            <Card.Body>
              <Pie data={pieData} options={pieOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;