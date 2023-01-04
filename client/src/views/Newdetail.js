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
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react'


function Newdetail(props) {
    const [dentist, setDentist] = useState("")
    // const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = React.useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/dentists/'+props.id)
            .then(res => {setDentist(res.data);console.log(res.data);})
            .catch(err => console.error(err));
    }, [props.id]);

    const recommenedDentist=(id)=>{
    
        axios.put('http://localhost:8000/api/dentists/' + props.id,{recommened:dentist.recommened+1})
        .then(res=>{
            setDentist(res.data)})
            navigate("/")
            .catch(err => console.error(err));
             
     }
        
  
    
    // if(loaded){
  return (
    <React.Fragment>
        
      <TableRow>
        
        <TableCell>
            
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </TableCell>
        <TableCell component="th" scope="row">
          {dentist.fname}
        </TableCell>
        <TableCell align="right">{dentist.city}</TableCell>
        <TableCell align="right">{dentist.recommened}</TableCell>
      </TableRow>
       
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow>
                     
                      <TableCell align="right">
                      </TableCell>
                    </TableRow>
                </TableBody>
                <TableCell component="th" scope="row">
                        {dentist.fname}
                      </TableCell>
                      <p>{dentist.lname}</p>
                      <p>{dentist.city}</p>
            <button onClick={(e)=>recommenedDentist(dentist._id)}>Recommened</button>

              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );





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
}

export default Newdetail;