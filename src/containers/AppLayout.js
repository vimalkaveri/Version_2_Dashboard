import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Help from "../pages/Help";
import { Container } from "react-bootstrap";

const AppLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? "80px" : "250px"; // Dynamically set the sidebar width

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TheHeader />
      <div style={{ display: "flex", flex: 1 }}>
        <TheSidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div
          style={{
            marginLeft: sidebarWidth, // Dynamically adjust content based on sidebar state
            width: `calc(100% - ${sidebarWidth})`, // Ensure content takes up remaining space
            transition: "margin-left 0.3s ease", // Smooth transition for content shift
            paddingTop: "20px",
          }}
        >
          <Container fluid>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Container>
        </div>
      </div>
      <TheFooter isSidebarCollapsed={isSidebarCollapsed} />{" "}
      {/* Pass sidebar state to footer */}
    </div>
  );
};

export default AppLayout;
