import { Fragment, useState, useEffect } from "react";
import InputMask from "react-input-mask";
// Material imports
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CT(props) {
  const { action, id } = props;
  const [status, setStatus] = useState("rejected");
  const [amount, setAmount] = useState({
    digit1: 0
  });

  const handleStatusChange = (prop) => {
    setStatus(prop);
  };

  const handleAmountChange = (prop) => (event) => {
    setAmount({ ...amount, [prop]: event.target.value });
  };

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

  useEffect(() => {
    action({
      id: id.slice(1, id.length),
      amount: parseInt(Object.values(amount), 10),
      status: status
    });
  }, [amount, status]);

  useEffect(() => {
    setStatus("rejected");
    setAmount({
      digit1: 0
    });
  }, [action]);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="p">
          Did separation occur for the tube
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography variant="h3" component="p">
            {id.slice(1, id.length)}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            onClick={() => handleStatusChange("rejected")}
            color={status === "rejected" ? "secondary" : "primary"}
            variant="contained"
            sx={{ fontSize: "150%", fontWeight: 700, margin: 1 }}
          >
            No
          </Button>
          <Button
            onClick={() => handleStatusChange("accepted")}
            color={status === "accepted" ? "secondary" : "primary"}
            variant="contained"
            sx={{ fontSize: "150%", fontWeight: 700, margin: 1 }}
          >
            Yes
          </Button>
        </Box>
      </Box>
      {status === "accepted" && (
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" component="p">
            Enter the amount of plasma in the CryoTube
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
      )}
    </>
  );
}
