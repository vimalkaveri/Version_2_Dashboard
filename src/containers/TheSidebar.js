import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaQuestionCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { TbDeviceHeartMonitor } from 'react-icons/tb';

import logo from "../assets/logo.png";

const TheSidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`bg-#adc5cf ${isCollapsed ? "collapsed" : ""}`}
      style={{
        width: isCollapsed ? "80px" : "250px",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        paddingTop: "20px",
        paddingLeft: "10px",
        zIndex: "1000",
        transition: "width 0.3s ease",
        backgroundColor: "#E6E6E7",
      }}
    >
      {/* Logo inside sidebar */}
      <div
        className="text-center mb-4"
        style={{
          backgroundColor: "#E6E6E7",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <img
          src={logo}
          alt="SiFe"
          width={isCollapsed ? "50" : "120"} // Adjust logo size on collapse
          height={isCollapsed ? "15" : "30"}
          className="d-inline-block align-top"
        />
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column">
        <Nav.Link
          as={Link}
          to="/dashboard"
          className="text-black d-flex align-items-center"
          style={{ paddingLeft: isCollapsed ? "10px" : "20px" }}
        >
          <FaHome
            style={{
              marginRight: isCollapsed ? "0" : "10px",
              fontSize: isCollapsed ? "20px" : "24px",
            }}
          />
          {!isCollapsed && "Dashboard"}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/device"
          className="text-black d-flex align-items-center"
          style={{ paddingLeft: isCollapsed ? "10px" : "20px" }}
        >
          <TbDeviceHeartMonitor
            style={{
              marginRight: isCollapsed ? "0" : "10px",
              fontSize: isCollapsed ? "20px" : "24px",
            }}
          />
          {!isCollapsed && "Device"}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/user"
          className="text-black d-flex align-items-center"
          style={{ paddingLeft: isCollapsed ? "10px" : "20px" }}
        >
          <FaUser
            style={{
              marginRight: isCollapsed ? "0" : "10px",
              fontSize: isCollapsed ? "20px" : "24px",
            }}
          />
          {!isCollapsed && "User"}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/help"
          className="text-black d-flex align-items-center"
          style={{ paddingLeft: isCollapsed ? "10px" : "20px" }}
        >
          <FaQuestionCircle
            style={{
              marginRight: isCollapsed ? "0" : "10px",
              fontSize: isCollapsed ? "20px" : "24px",
            }}
          />
          {!isCollapsed && "Help"}
        </Nav.Link>
      </Nav>

      {/* Button to toggle sidebar width */}
      <div
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "80%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
      >
        {isCollapsed ? (
          <FaChevronRight style={{ color: "#0d6efd", fontSize: "20px" }} />
        ) : (
          <FaChevronLeft style={{ color: "#0d6efd", fontSize: "20px" }} />
        )}
      </div>
    </div>
  );
};

export default TheSidebar;
