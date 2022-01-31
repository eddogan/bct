import { useState, useEffect } from "react";
import "./styles.css";
// Material imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// Custom component imports
import BCTEntry from "./components/BCTEntry";
import OperatorNameEntry from "./components/OperatorNameEntry";
import QualityEntry from "./components/QualityEntry";
import BoxFreezerEntry from "./components/BoxFreezerEntry";
import Review from "./components/Review";

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [operatorName, setOperatorName] = useState({
    first: "",
    last: ""
  });
  const [bloodCollectionTube1, setBloodCollectionTube1] = useState({
    id: "",
    amount: ""
  });
  const [bloodCollectionTube2, setBloodCollectionTube2] = useState({
    id: "",
    amount: ""
  });
  const [bloodCollectionTube3, setBloodCollectionTube3] = useState({
    id: "",
    amount: ""
  });
  const [cryoTube1, setCryoTube1] = useState({
    id: "",
    amount: "",
    status: ""
  });
  const [cryoTube2, setCryoTube2] = useState({
    id: "",
    amount: "",
    status: ""
  });
  const [cryoTube3, setCryoTube3] = useState({
    id: "",
    amount: "",
    status: ""
  });
  const [storage, setStorage] = useState({
    boxId: "",
    freezerId: ""
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const steps = [
    {
      label: "Name",
      content: (
        <OperatorNameEntry
          operatorName={operatorName}
          setOperatorName={setOperatorName}
        />
      )
    },
    {
      label: "BCTs",
      content: (
        <BCTEntry
          setBloodCollectionTube1={setBloodCollectionTube1}
          setBloodCollectionTube2={setBloodCollectionTube2}
          setBloodCollectionTube3={setBloodCollectionTube3}
          handleNextMain={handleNext}
        />
      )
    },
    {
      label: "Quality",
      content: (
        <QualityEntry
          bloodCollectionTube1={bloodCollectionTube1}
          bloodCollectionTube2={bloodCollectionTube2}
          bloodCollectionTube3={bloodCollectionTube3}
          setCryoTube1={setCryoTube1}
          setCryoTube2={setCryoTube2}
          setCryoTube3={setCryoTube3}
          handleNextMain={handleNext}
        />
      )
    },
    {
      label: "Box/Freezer",
      content: <BoxFreezerEntry storage={storage} setStorage={setStorage} />
    },
    {
      label: "Review",
      content: (
        <Review
          operatorName={operatorName}
          bloodCollectionTube1={bloodCollectionTube1}
          bloodCollectionTube2={bloodCollectionTube2}
          bloodCollectionTube3={bloodCollectionTube3}
          cryoTube1={cryoTube1}
          cryoTube2={cryoTube2}
          cryoTube3={cryoTube3}
          storage={storage}
        />
      )
    }
  ];

  useEffect(() => {
    console.log(storage);
  }, [storage]);

  return (
    <div className="App">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 2 }}>{steps[activeStep].content}</Box>
      {activeStep !== 1 && activeStep !== 2 && (
        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNext}
            sx={{ m: 1, fontSize: "150%", fontWeight: 700 }}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      )}
    </div>
  );
}
