import React from "react";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
  CImage,
} from "@coreui/react";
import {
  FaHome,
  FaUser,
  FaQuestionCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const TheSidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <CSidebar
      unfoldable
      visible={!isCollapsed}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: isCollapsed ? "80px" : "250px",
        backgroundColor: "#E6E6E7",
        transition: "width 0.3s ease",
        zIndex: "1000",
        boxShadow: "2px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div className="text-center my-3">
        <CImage
          src={logo}
          alt="SiFe"
          width={isCollapsed ? "50" : "120"}
          height={isCollapsed ? "15" : "30"}
        />
      </div>

      <CSidebarNav
        style={{
          padding: 15, // Removes any default padding
          listStyleType: "none", // Removes the bullets from the list
        }}
      >
        {/* Dashboard Link */}
        <CNavItem>
          <Link to="/dashboard">
            <CNavLink
              className="d-flex align-items-center text-black"
              style={{
                padding: isCollapsed ? "10px" : "15px 20px",
                fontWeight: "500",
                textDecoration: "none", // Removes underline
                transition: "background-color 0.3s ease",
              }}
            >
              <FaHome
                style={{
                  marginRight: isCollapsed ? "0" : "10px",
                  fontSize: isCollapsed ? "20px" : "22px",
                }}
              />
              {!isCollapsed && "Dashboard"}
            </CNavLink>
          </Link>
        </CNavItem>

        {/* Device Link */}
        <CNavItem>
          <Link to="/device">
            <CNavLink
              className="d-flex align-items-center text-black"
              style={{
                padding: isCollapsed ? "10px" : "15px 20px",
                fontWeight: "500",
                textDecoration: "none", // Removes underline
                transition: "background-color 0.3s ease",
              }}
            >
              <TbDeviceHeartMonitor
                style={{
                  marginRight: isCollapsed ? "0" : "10px",
                  fontSize: isCollapsed ? "20px" : "22px",
                }}
              />
              {!isCollapsed && "Device"}
            </CNavLink>
          </Link>
        </CNavItem>

        {/* User Link */}
        <CNavItem>
          <Link to="/user">
            <CNavLink
              className="d-flex align-items-center text-black"
              style={{
                padding: isCollapsed ? "10px" : "15px 20px",
                fontWeight: "500",
                textDecoration: "none", // Removes underline
                transition: "background-color 0.3s ease",
              }}
            >
              <FaUser
                style={{
                  marginRight: isCollapsed ? "0" : "10px",
                  fontSize: isCollapsed ? "20px" : "22px",
                }}
              />
              {!isCollapsed && "User"}
            </CNavLink>
          </Link>
        </CNavItem>

        {/* Help Link */}
        <CNavItem>
          <Link to="/help">
            <CNavLink
              className="d-flex align-items-center text-black"
              style={{
                padding: isCollapsed ? "10px" : "15px 20px",
                fontWeight: "500",
                textDecoration: "none", // Removes underline
                transition: "background-color 0.3s ease",
              }}
            >
              <FaQuestionCircle
                style={{
                  marginRight: isCollapsed ? "0" : "10px",
                  fontSize: isCollapsed ? "20px" : "22px",
                }}
              />
              {!isCollapsed && "Help"}
            </CNavLink>
          </Link>
        </CNavItem>
      </CSidebarNav>

      {/* Toggle Button */}
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
          <FaChevronRight
            style={{
              color: "#0d6efd",
              fontSize: "20px",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
          <FaChevronLeft
            style={{
              color: "#0d6efd",
              fontSize: "20px",
              transition: "transform 0.3s ease",
            }}
          />
        )}
      </div>
    </CSidebar>
  );
};

export default TheSidebar;
