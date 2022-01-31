// Material imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function OperatorNameEntry(props) {
  const { operatorName, setOperatorName } = props;

  const handleNameChange = (prop) => (event) => {
    setOperatorName({ ...operatorName, [prop]: event.target.value });
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <TextField
        id="operator-first-name"
        label="First Name"
        variant="outlined"
        value={operatorName.first}
        sx={{ m: 1 }}
        onChange={handleNameChange("first")}
      />
      <TextField
        id="operator-last-name"
        label="Last Name"
        variant="outlined"
        sx={{ m: 1 }}
        onChange={handleNameChange("last")}
        value={operatorName.last}
      />
    </Box>
  );
}
