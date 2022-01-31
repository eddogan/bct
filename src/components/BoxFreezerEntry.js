import { Fragment, useState, useEffect } from "react";
import InputMask from "react-input-mask";
// Material imports
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function BoxFreezerEntry(props) {
  const { setStorage } = props;
  const [boxId, setBoxId] = useState({
    digit1: 0,
    digit2: 0,
    digit3: 0,
    digit4: 0
  });
  const [freezerId, setFreezerId] = useState({
    digit1: 0,
    digit2: 0
  });

  const handleBoxIdChange = (prop) => (event) => {
    setBoxId({ ...boxId, [prop]: event.target.value });
  };

  const handleFreezerIdChange = (prop) => (event) => {
    setFreezerId({ ...freezerId, [prop]: event.target.value });
  };

  useEffect(() => {
    setStorage({
      boxId: `BOX-${Object.values(boxId).join("")}`,
      freezerId: `FREEZER-${Object.values(freezerId).join("")}`
    });
  }, [boxId, freezerId]);

  const fields = Object.entries(boxId).map((item, index) => {
    return (
      <Fragment key={item[0]}>
        <Paper elevation={2} sx={{ p: 0, m: 1 }}>
          <InputMask
            mask="9"
            value={item[1]}
            onChange={handleBoxIdChange(item[0])}
          >
            {() => (
              <TextField
                id="tube-`item[0]`"
                variant="outlined"
                sx={{
                  width: "3em",
                  "& input": {
                    fontWeight: 700,
                    fontSize: "175%",
                    textAlign: "center"
                  }
                }}
              />
            )}
          </InputMask>
        </Paper>
      </Fragment>
    );
  });

  const digits = Object.entries(freezerId).map((item, index) => {
    return (
      <Paper key={item[0]} elevation={2} sx={{ p: 0, m: 1 }}>
        <InputMask
          mask="9"
          value={item[1]}
          onChange={handleFreezerIdChange(item[0])}
        >
          {() => (
            <TextField
              id="tube-`item[0]`"
              variant="outlined"
              sx={{
                width: "3em",
                "& input": {
                  fontWeight: 700,
                  fontSize: "175%",
                  textAlign: "center"
                }
              }}
            />
          )}
        </InputMask>
      </Paper>
    );
  });

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="p">
          Enter the ID of the Box
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography variant="h2" component="p">
            BOX-
          </Typography>
          {fields}
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="p">
          Enter the ID of the Freezer
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography variant="h2" component="p">
            FREEZER-
          </Typography>
          {digits}
        </Box>
      </Box>
    </>
  );
}
