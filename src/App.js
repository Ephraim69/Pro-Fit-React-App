import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";

const App = () => {
  let loggedIn = true;

  return (
    <>
      <Box width={{ xl: "1488px" }} m="auto">
        {!loggedIn ? (
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default App;
