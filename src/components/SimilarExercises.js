import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SimilarCards from "./SimilarCards";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscle, equipment }) => {
  console.log("Target Muscle and Equipment");
  console.log(targetMuscle);
  console.log(equipment);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" }, mb: { lg: 0, xs: "100px" } }}>
      <Typography
        variant="h3"
        mb="33px"
        sx={{
          fontSize: { lg: "48px", xs: "30px" },
          textAlign: { lg: "left", xs: "center" },
          p: { lg: 0, xs: "0 20px" },
        }}
      >
        Exercises that target the same Muscle group:{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {targetMuscle.length && targetMuscle[0].target}
        </span>
      </Typography>

      <Stack mt="50px" direction="column" sx={{ p: "2", position: "relative" }}>
        {targetMuscle.length ? (
          <SimilarCards data={targetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        mb="33px"
        mt="150px"
        textTransform="capitalize"
        sx={{
          fontSize: { lg: "48px", xs: "30px" },
          textAlign: { lg: "left", xs: "center" },
          p: { lg: 0, xs: "0 20px" },
          mt: { lg: "150px", xs: "110px" },
        }}
      >
        Exercises that use the same equipment:{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {equipment.length && equipment[0].equipment}
        </span>
      </Typography>

      <Stack mt="50px" direction="column" sx={{ p: "2", position: "relative" }}>
        {equipment.length ? <SimilarCards data={equipment} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
