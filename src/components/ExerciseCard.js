import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ index, exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      sx={{ position: "relative" }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        Loading="lazy"
        sx={{ mt: { lg: "50px" } }}
      />
    </Link>
  );
};

export default ExerciseCard;
