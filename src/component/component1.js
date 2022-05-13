import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import { loadCSS } from "fg-loadcss";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import "./component1.css";
import { useState, usEffect } from "react";

// function appBarLabel(label) {
//   return (
//     <Toolbar>
//       <IconButton
//         edge="left"
//         sx={{ color: grey[900], mr: 1 }}
//         aria-label="menu"
//       >
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h7" noWrap component="div" sx={{ flexGrow: 1  }}>
//         {label}
//       </Typography>
//     </Toolbar>
//   );
// }
useEffect(() => {}, []);

function createData(name, calories, fat, carbs, protein, price, seats) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    seats,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label="expand row"
            size="small"
          >
            {open ? (
              <AddCircleIcon sx={{ color: green[500] }} />
            ) : (
              <AddCircleIcon sx={{ color: green[500] }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.seats}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <form>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault01"
                      placeholder="First name"
                      value="Mark"
                      required
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault02"
                      placeholder="Last name"
                      value="Otto"
                      required
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationDefaultUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend2">
                          @
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefaultUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault03">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault03"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationDefault04">State</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault04"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationDefault05">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault05"
                      placeholder="Zip"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </form>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99, 1),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99, 1),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79, 1),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5, 1),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5, 1),
];

export default function CollapsibleTable() {
  return (
    <div class="wrapper">
      <TableContainer component={Paper}>
        <div class="mb3">
          <nav class="navbar navbar-light block-example border border-dark">
            <div class="container-fluid">
              <p class="text-dark">Filter</p>
              <form>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
        <div class="mb3">
          <nav class="navbar navbar-light bg-dark block-example border border-dark">
            <div class="container-fluid">
              <p class="text-light">Conformed Trancsaction</p>
            </div>
          </nav>
        </div>
        <div class="mb3">
          <nav class="navbar navbar-light bg-light block-example border border-dark">
            <div class="container-fluid">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>

        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Refference Code</TableCell>
              <TableCell align="right">Ticket No</TableCell>
              <TableCell align="right">Date Time Requested</TableCell>
              <TableCell align="right">Contacts</TableCell>
              <TableCell align="right">Operator</TableCell>
              <TableCell align="right">No of Seats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
