import React from "react";
import "./Carousel.css";
import Icon from "../assets/icons/gym.png";
import Banner from "../assets/images/workout.png";
import { useState, useEffect } from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const Carousel = ({ data, bodyPart, setBodyPart }) => {
  const [clicked, setClicked] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const data_start = data.slice(0, 5);
    const data_end = data.slice(5, data.length);
    setDisplayData(clicked ? data_end : data_start);
  }, [clicked, data]);

  return (
    <>
      <section className="card-list">
        {displayData.map((item) => (
          <article
            onClick={() => {
              setBodyPart(item);
              window.scrollTo({
                top: window.innerHeight * 2,
                behavior: "smooth",
              });
            }}
            className="card"
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            <header className="card-header">
              <p>Exercises</p>
              <Typography variant="h2" textTransform="capitalize">
                {item}
              </Typography>
            </header>
            <img
              src={Banner}
              alt="carousel"
              style={{
                width: "150px",
                position: "absolute",
                right: 10,
                top: 60,
              }}
            ></img>
            <div className="card-author">
              <a className="author-avatar" href="#exercises">
                <img src={Icon} alt="carousel icon" />
              </a>
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div className="author-name">
                <div className="author-name-prefix">Type</div>
                {item} exercises
              </div>
            </div>

            <div className="tags">
              <a href="#">Gains</a>
              <a href="#">Bulk</a>
              <a href="#">Fitness</a>
            </div>
          </article>
        ))}
      </section>
      <Box sx={{ display: { lg: "block", xs: "none" } }}>
        <Button
          variant="outlined"
          sx={{ border: "2px solid grey", position: "absolute", right: 140 }}
          onClick={() => setClicked(false)}
        >
          <img src={LeftArrowIcon} alt="Left Arrow" />
        </Button>
        <Button
          variant="outlined"
          sx={{ border: "2px solid grey", position: "absolute", right: 65 }}
          onClick={() => setClicked(true)}
        >
          <img src={RightArrowIcon} alt="Right Arrow" />
        </Button>
      </Box>
      <Stack direction="row"></Stack>
    </>
  );
};

export default Carousel;
