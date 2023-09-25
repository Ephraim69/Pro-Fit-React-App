import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Carousel from "./Carousel";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ContactSupportOutlined } from "@mui/icons-material";

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  search,
  setSearch,
}) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=-1",
        exerciseOptions
      );
      console.log("Exercise Data");
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
        );
      });

      setExercises(searchedExercises);
      console.log("Search State");
      console.log(search);
      console.log("Searched Exercises");
      console.log(searchedExercises);
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
    }
  };

  return (
    <Stack
      alignItems="center"
      sx={{ mt: { lg: "37px", xs: "0px" } }}
      justifyContent="center"
      p="20px"
    >
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "20px" },
          fontWeight: { lg: 700, xs: 700 },
        }}
        mb="50px"
        textAlign="center"
      >
        Find Your Next Exercise
        <br />
        for the Perfect Workout Plan
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: { lg: "40px", xs: "20px" },
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
            borderTopRightRadius: { lg: "5px", xs: "20px" },
            borderBottomRightRadius: { lg: "5px", xs: "20px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: { lg: "100%", xs: "100vw" },
          p: "20px",
        }}
      >
        <Carousel
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
