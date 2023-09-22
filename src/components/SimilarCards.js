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
        width="80%"
        gap="20px"
        direction={{ xs: "column", md: "column", lg: "row" }}
      >
        {displayData.map((item) => (
          <ExerciseCard exercise={item} />
        ))}
      </Stack>
      <Box mt="20px">
        <Button
          variant="outlined"
          sx={{ border: "2px solid grey", position: "absolute", right: 140 }}
          onClick={() => onArrowClick(false)}
        >
          <img src={LeftArrowIcon} alt="Left Arrow" />
        </Button>
        <Button
          variant="outlined"
          sx={{ border: "2px solid grey", position: "absolute", right: 65 }}
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
