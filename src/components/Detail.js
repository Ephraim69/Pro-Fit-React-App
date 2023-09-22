import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { useEffect } from "react";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  console.log("Instructions");
  console.log(instructions);

  return (
    <Stack gap="100px">
      <Stack
        marginTop="50px"
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <div className="detail-card">
          <img src={gifUrl} alt={name} loading="lazy" />
        </div>
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            variant="h3"
            textTransform="capitalize"
            style={{
              opacity: 0, // start from fully transparent
              animation: "fadeIn 0.5s ease-in forwards", // apply the fadeIn animation
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="h6"
            style={{
              opacity: 0, // start from fully transparent
              animation: "fadeIn 1s ease-in forwards", // apply the fadeIn animation
            }}
          >
            Ah, the {name}, a classic in the realm of fitness and a gem for
            targeting your {target}. Whether you're a fitness aficionado or just
            starting your journey, you've stumbled upon a pivotal exercise that
            can redefine your workout routine.
            <br />
            <br />
            The charm of {name} isn't just in its effectiveness, but also in its
            versatility. Suitable for everyone, from weekend warriors to
            professional athletes, this exercise aims to engage, challenge, and
            ultimately fortify your {target}.
          </Typography>

          {extraDetail.map((item) => (
            <Stack
              className="detail-icons"
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
              width="230px"
            >
              <Button>
                <img src={item.icon} alt="workout-icon" />
              </Button>
              <Typography variant="h6" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack gap="15px">
        <Typography mb="35px" variant="h3">
          Instructions
        </Typography>

        {instructions &&
          instructions.map((paragraph, index) => (
            <Typography
              key={index}
              variant="h5"
              style={{
                opacity: 0,
                animation: `fadeIn 1s ease-in ${index * 0.5}s forwards`,
              }}
            >
              • {paragraph}
            </Typography>
          ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
