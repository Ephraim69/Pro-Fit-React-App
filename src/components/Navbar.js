import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "122px", xs: "80px" },
        mt: { sm: "32px", xs: "8px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <div>
          <div className="logoContainer navbar-link">
            <img className="logo-img" src={Logo} alt="Logo" />
            <div className="logoText">Pro-Fit Fitness</div>
          </div>
        </div>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className="navbar-link home-link">
          Home
        </Link>
        <a href="#exercises" className="navbar-link">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
