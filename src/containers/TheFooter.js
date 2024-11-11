import React from "react";
import { Container } from "react-bootstrap";

const TheFooter = ({ isSidebarCollapsed }) => {
  // Dynamically adjust the footer's width based on sidebar state
  const footerWidth = isSidebarCollapsed
    ? "calc(100% - 80px)"
    : "calc(100% - 250px)";

  return (
    <footer
      className="text-black text-left py-2"
      style={{
        width: footerWidth, // Dynamically adjust width based on sidebar state
        backgroundColor: "#FFFFFF", // Background color applied directly
        paddingBottom: "10px", // Ensure footer is not too close to the edge
        transition: "width 0.3s ease", // Smooth transition on width change
        marginLeft: isSidebarCollapsed ? "80px" : "250px", // Adjust margin for footer based on sidebar state
        position: "relative", // Make sure footer is placed at the bottom without overlapping content
      }}
    >
      <Container fluid>
        <span>&copy; 2024 My App. All rights reserved.</span>
      </Container>
    </footer>
  );
};

export default TheFooter;
