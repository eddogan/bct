import { useState } from "react";
// Material imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// Custom component imports
import BCT from "./BCT";

export default function BCTEntry(props) {
  const {
    setBloodCollectionTube1,
    setBloodCollectionTube2,
    setBloodCollectionTube3,
    handleNextMain
  } = props;
  const [activeTube, setActiveTube] = useState(0);

  const handleNext = () => {
    activeTube + 1 !== tubes.length
      ? setActiveTube((prevActiveTube) => prevActiveTube + 1)
      : handleNextMain();
  };

  const tubes = [
    {
      label: "1",
      content: <BCT action={setBloodCollectionTube1} />
    },
    {
      label: "2",
      content: <BCT action={setBloodCollectionTube2} />
    },
    {
      label: "3",
      content: <BCT action={setBloodCollectionTube3} />
    }
  ];

  return (
    <div>
      <Stepper activeStep={activeTube} alternativeLabel>
        {tubes.map((tube) => (
          <Step key={tube.label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 2 }}>{tubes[activeTube].content}</Box>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNext}
          sx={{ m: 1, fontSize: "150%", fontWeight: 700 }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}
