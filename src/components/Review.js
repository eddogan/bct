import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Review(props) {
  const {
    operatorName,
    bloodCollectionTube1,
    cryoTube1,
    bloodCollectionTube2,
    cryoTube2,
    bloodCollectionTube3,
    cryoTube3,
    storage
  } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Tube1</TableCell>
            <TableCell>Tube2</TableCell>
            <TableCell>Tube3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell scope="row">ID</TableCell>
          <TableCell>{bloodCollectionTube1.id}</TableCell>
          <TableCell>{bloodCollectionTube2.id}</TableCell>
          <TableCell>{bloodCollectionTube3.id}</TableCell>
        </TableBody>
        <TableBody>
          <TableCell scope="row">Amount</TableCell>
          <TableCell>{bloodCollectionTube1.amount}mL</TableCell>
          <TableCell>{bloodCollectionTube2.amount}mL</TableCell>
          <TableCell>{bloodCollectionTube3.amount}mL</TableCell>
        </TableBody>
        <TableBody>
          <TableCell scope="row">Quality</TableCell>
          <TableCell>{cryoTube1.status}</TableCell>
          <TableCell>{cryoTube2.status}</TableCell>
          <TableCell>{cryoTube3.status}</TableCell>
        </TableBody>
        <TableBody>
          <TableCell scope="row">ID</TableCell>
          <TableCell>{cryoTube1.id}</TableCell>
          <TableCell>{cryoTube2.id}</TableCell>
          <TableCell>{cryoTube3.id}</TableCell>
        </TableBody>
        <TableBody>
          <TableCell scope="row">Amount</TableCell>
          <TableCell>{cryoTube1.amount}mL</TableCell>
          <TableCell>{cryoTube2.amount}mL</TableCell>
          <TableCell>{cryoTube3.amount}mL</TableCell>
        </TableBody>
        <TableBody>
          <TableCell scope="row">Box</TableCell>
          <TableCell colspan={3} align="center">
            {storage.boxId}
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell scope="row">Freezer</TableCell>
          <TableCell colspan={3} align="center">
            {storage.freezerId}
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
