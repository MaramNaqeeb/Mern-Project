import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Header from './Header'


function Row(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment >
    {/* <Header></Header> */}

      <TableRow >
        <TableCell >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        </TableCell>
       
      </TableRow>
      <TableRow  style={{width:"200px"}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, width:'200px'}} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit >
            <Box margin={1} >
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases" >
                <TableHead>
                  <TableRow >
                    {/* <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
  {props.dentists.map((dentist, idx) => (
                  
                    <TableRow key={idx} >
                      <TableCell component="th" scope="row">
                        {dentist.fname}
                      </TableCell>
                      <TableCell>{dentist.lname}</TableCell>
                      <TableCell align="right">{dentist.city}</TableCell>
                      <TableCell align="right">
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Dentist (100g serving)</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Recommeneded</TableCell>
            <TableCell align="right">Actions</TableCell>

          </TableRow>
        </TableHead>

      </Table>
    </TableContainer>

export default Row;