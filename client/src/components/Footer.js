import React from "react";

// Styles
const footerStyles = {
  background: "#000",
  color: "#fff",
  padding: "20px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontSize: "14px",
  marginTop: "100px",
};

const linkStyles = {
  textDecoration: "none",
  color: "#fff",
  margin: "0 15px",
  hover: {
    textDecoration: "underline",
  },
};

// Component
const Footer = () => (
  <footer style={footerStyles}>
    <div style={{ marginBottom: "10px" }}>
      <a href="https://github.com/Ephraim69" style={linkStyles}>
        About me
      </a>
      <a href="/privacy" style={linkStyles}>
        Privacy Policy
      </a>
      <a href="/terms" style={linkStyles}>
        Terms & Conditions
      </a>
    </div>
    <div>
      © {new Date().getFullYear()} Ephraim Igbinosa. All rights reserved.
    </div>
  </footer>
);

export default Footer;
