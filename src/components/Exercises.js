import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

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

    window.scrollTo({ top: 1800, behaviour: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
      setSearch("");
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        mb="46px"
        textTransform="capitalize"
        sx={{
          borderRadius: "10px",
          background: "#17141d",
          boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.5)",
          mb: { lg: "70px" },
        }}
        p="20px"
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
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
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