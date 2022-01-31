import { Fragment, useState, useEffect } from "react";
import InputMask from "react-input-mask";
// Material imports
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function BCT(props) {
  const { action } = props;
  const [id, setId] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    number6: 0
  });

  const [amount, setAmount] = useState({
    digit1: 0,
    digit2: 0
  });

  const handleIdChange = (prop) => (event) => {
    setId({ ...id, [prop]: event.target.value });
  };

  const handleAmountChange = (prop) => (event) => {
    setAmount({ ...amount, [prop]: event.target.value });
  };

  useEffect(() => {
    action({
      id: `BCT-${Object.values(id).join("").slice(0, 5)}-${Object.values(id)
        .join("")
        .slice(-1)}`,
      amount: parseInt(Object.values(amount).join(""), 10)
    });
  }, [amount, id]);

  useEffect(() => {
    setId({
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      number5: 0,
      number6: 0
    });
    setAmount({
      digit1: 0,
      digit2: 0
    });
  }, [action]);

  const fields = Object.entries(id).map((item, index) => {
    return (
      <Fragment key={item[0]}>
        <Paper elevation={2} sx={{ p: 0, m: 1 }}>
          <InputMask
            mask="9"
            value={item[1]}
            onChange={handleIdChange(item[0])}
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
        {index === 4 && (
          <Typography variant="h2" component="p">
            -
          </Typography>
        )}
      </Fragment>
    );
  });

  const digits = Object.entries(amount).map((item, index) => {
    return (
      <Paper key={item[0]} elevation={2} sx={{ p: 0, m: 1 }}>
        <InputMask
          mask="9"
          value={item[1]}
          onChange={handleAmountChange(item[0])}
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
          Enter the ID of the tube
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
            BCT-
          </Typography>
          {fields}
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="p">
          Enter the amount in the tube
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {digits}
          <Typography variant="h2" component="p">
            mL
          </Typography>
        </Box>
      </Box>
    </>
  );
}
