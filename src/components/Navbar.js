import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const styles = {
  logoContainer: {
    position: "relative",
    display: "inline-block", // Ensures container fits content
  },
  logoText: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)", // Center the text horizontally
    color: "white", // Change the color as per your design
    fontWeight: "bold",
    fontSize: "12px", // Adjust size as needed
    whiteSpace: "nowrap",
  },
};

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <div>
          {/* ... other navbar items */}
          <div style={styles.logoContainer} className="navbar-link">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "70px", height: "50px", margin: "0 20px" }}
            />
            <div style={styles.logoText}>Pro-Fit Fitness</div>
          </div>
          {/* ... other navbar items */}
        </div>
      </Link>
      <Stack direction="row" gap="40px" fontsize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            borderBottom: "3px solid #fff",
          }}
          className="navbar-link"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="navbar-link"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
