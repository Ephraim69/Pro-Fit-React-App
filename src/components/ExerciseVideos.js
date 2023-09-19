import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const ExerciseVideos = ({ youtubeData, name }) => {
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
    const data_start = youtubeData.contents.slice(0, 3);
    const data_end = youtubeData.contents.slice(3, 6);
    setDisplayData(clicked ? data_end : data_start);
  }, [clicked, youtubeData]);

  return (
    <>
      <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
        <Typography variant="h3" mb="33px" textTransform="capitalize">
          Watch <span style={{ color: "#ff2625" }}>{name}</span> exercise videos
        </Typography>
        <Stack
          className={transitioning ? "transitioning" : ""}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
        >
          {displayData.map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={`{item.video.title} video`}
              />
            </a>
          ))}
        </Stack>
      </Box>
      <Box>
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
    </>
  );
};

export default ExerciseVideos;
