import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { BottomSheet, Button, Checkbox, Column, ElevatedCard, Header, HorizontalDivider, HorizontalSpacer, InputField, Row, Tag, Toggle, VerticalSpacer } from '@cred/neopop-web/lib/components';
import { showToast } from '@cred/neopop-web/lib/components';
import { FontType, FontWeights } from "@cred/neopop-web/lib/types";
import { FontVariant, colorGuide, colorPalette, fontNameSpaces, getButtonConfig, mainColors } from "@cred/neopop-web/lib/primitives";
import { hexToRGBA } from "@cred/neopop-web/lib/utils";
import { colorConfig } from "@/components/Common";
import { FontOverflowType } from "@cred/neopop-web/lib/components/Typography/types";
import { Box, Modal, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  serial_number: number,
  description: string,
  amount: number
) {
  return { serial_number, description, amount };
}

const rows = [
  createData(1, "Test", 6.0),
  createData(2, "Test", 9.0),
  createData(3, "Test", 16.0),
  createData(4, "Test", 3.7),
  createData(5, "Test", 16.0),
];

export default function Expense() {
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const textStyleConfig = {
    fontType: FontType.HEADING,
    fontSize: 15,
    fontWeight: FontWeights.EXTRA_BOLD,
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
  const handleChange = (event: any) => {
    setIsChecked(event.target.checked);
};

    // const handleClose = () => {
    //     setOpen(false);
    // };

  useEffect(() => {
  console.log("hey..", isConnected)
    if (isConnected && address) {
      setUserAddress(address);
      // showToastNotif(address)
    }
  }, [address, isConnected]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Header heading="Group" onBackClick={() => {}} /> */}
      <Button
            variant="primary"
            kind="elevated"
            size="medium"
            colorMode="dark"
            colorConfig={colorConfig}
            textStyle={textStyleConfig}
            onClick={() => setOpen(e => !e)}
        >
            Add Expense
        </Button>
        
         <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <InputField
                type="text"
                label="Description"
                placeholder="Enter Description"
                id="text_field"
                autoFocus
            />
            <HorizontalSpacer n={3} />
            {/* <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
                        ₹
                    </Typography> */}
            <InputField
                type="number"
                label="Amount"
                placeholder="Enter Amount in ₹"
                id="text_field"
                // autoFocus
            />
            <HorizontalSpacer n={5} />
             <Button
            variant="primary"
            kind="elevated"
            size="medium"
            colorMode="dark"
            colorConfig={colorConfig}
            textStyle={textStyleConfig}
            onClick={() => setOpen(e => !e)}
            fullWidth={true}
        >
            Add
        </Button>
        </Box>
      </Modal>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SI #</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.serial_number}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.serial_number}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
