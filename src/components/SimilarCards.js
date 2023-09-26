import React from "react";
import "./Carousel.css";
import Icon from "../assets/icons/gym.png";
import Banner from "../assets/images/workout.png";
import { useState, useEffect } from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

const SimilarCards = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const [transitioning, setTransitioning] = useState(false);

  const onArrowClick = (newState) => {
    setTransitioning(true);
    setClicked(newState);

    setTimeout(() => {
      setTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const data_start = data.slice(0, 4);
    const data_end = data.slice(3, 7);
    setDisplayData(clicked ? data_end : data_start);
  }, [clicked, data]);

  return (
    <>
      <Stack
        className={transitioning ? "transitioning" : ""}
        sx={{ width: { lg: "80%" } }}
        gap="20px"
        display="flex"
        direction={{ xs: "column", md: "column", lg: "row" }}
        alignItems="center"
      >
        {displayData.map((item) => (
          <ExerciseCard exercise={item} />
        ))}
      </Stack>
      <Box sx={{ mt: { lg: "20px", xs: "30px" } }} position="relative">
        <Button
          variant="outlined"
          sx={{
            border: "2px solid grey",
            position: "absolute",
            right: { lg: 140, xs: "75vw" },
          }}
          onClick={() => onArrowClick(false)}
        >
          <img src={LeftArrowIcon} alt="Left Arrow" />
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "2px solid grey",
            position: "absolute",
            right: { lg: 65, xs: "10vw" },
          }}
          onClick={() => onArrowClick(true)}
        >
          <img src={RightArrowIcon} alt="Right Arrow" />
        </Button>
      </Box>
      <Stack direction="row"></Stack>
    </>
  );
};

export default SimilarCards;
