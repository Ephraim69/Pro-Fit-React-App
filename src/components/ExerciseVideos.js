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
      <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
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
            <Box key={index}>
              <a
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={`{item.video.title} video`}
                />
                <Box sx={{ pl: "10px", pr: "10px" }}>
                  <Typography variant="h6" color="#e3e3e3">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h7" color="#b3b3b3">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            mt: { lg: "-50px" },
            border: "2px solid grey",
            position: "absolute",
            right: { lg: 375 },
          }}
          onClick={() => onArrowClick(false)}
        >
          <img src={LeftArrowIcon} alt="Left Arrow" />
        </Button>
        <Button
          variant="outlined"
          sx={{
            mt: { lg: "-50px" },
            border: "2px solid grey",
            position: "absolute",
            right: { lg: 305, xs: -20 },
          }}
          onClick={() => onArrowClick(true)}
        >
          <img src={RightArrowIcon} alt="Right Arrow" />
        </Button>
      </Box>
    </>
  );
};

export default ExerciseVideos;
