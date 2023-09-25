import React from "react";
import { Box, Stack, Typography, Button, useTheme } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import ChevronDown from "../assets/icons/down-arrow.png";

const HeroBanner = () => {
  const theme = useTheme();

  const handleScrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll by the height of the viewport (approx. next section/page)
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "140px" },
        ml: { sm: "50px" },
        mb: { lg: "0px", xs: "0px" },
        p: { lg: "20px", xs: "30px" },
        height: { lg: "673.5px", xs: "80vh" },
      }}
      position="relative"
    >
      <Typography
        color="#FF2625"
        fontWeight="600"
        sx={{ fontSize: { xs: "20px", lg: "26px" } }}
      >
        Pro-Fit Fitness
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          mb: { lg: "23px", xs: "10px" },
          mt: { lg: "30px", xs: "20px" },
        }}
      >
        Your Goals. Our Expertise.
        <br /> Let's Get Fit.
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        LineHeight="35px"
        mb={4}
      >
        Dive into routines that bring results.
      </Typography>
      <Button
        variant="contained"
        onClick={handleScrollToNextSection}
        sx={{ backgroundColor: "#1604b8", padding: "10px" }}
      >
        Get Started
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <Box
        position="absolute"
        bottom="70px"
        left="47%"
        transform="translateX(-50%)"
        sx={{
          display: { xs: "block", lg: "none" }, // Display only on mobile
          animation: "bounce 1s infinite",
        }}
        onClick={handleScrollToNextSection}
      >
        <img
          src={ChevronDown}
          style={{ width: "30px", height: "auto" }}
          alt="down arrow"
        />
      </Box>

      {/* Keyframe animations */}
      <style jsx>
        {`
          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroBanner;
