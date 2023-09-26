import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({
  exercises,
  setExercises,
  bodyPart,
  search,
  setSearch,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  console.log("Log Exercises");
  console.log(exercises);

  const lastExerciseIndex = currentPage * exercisesPerPage;
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage;
  const currentExercises = exercises.slice(
    firstExerciseIndex,
    lastExerciseIndex
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: window.innerHeight * 2, behaviour: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=-1",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=-1`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
      setSearch("");
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px", xs: "30px" } }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant="h4"
        mb="46px"
        textTransform="capitalize"
        sx={{
          borderRadius: "10px",
          background: "#17141d",
          boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.5)",
          mb: { lg: "70px", xs: "60px" },
          fontSize: { lg: "34px", xs: "20px" },
          p: { lg: "20px", xs: "10px" },
          textAlign: { xs: "center", lg: "left" },
        }}
        pl="50px"
        fontFamily={"DM Mono"}
      >
        {search && `"${search}" results`}
        {!search && `${bodyPart} exercises`}
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.length ? (
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        ) : (
          <Loader />
        )}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            className="pagination"
            variant="outlined"
            color="primary"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{ color: "white" }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
