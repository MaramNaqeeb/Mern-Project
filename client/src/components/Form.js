// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import Header from './Header'



const Form=(props) =>{


const cityName=["","Nablus","Jenin","Tulkarm","Hebrew","Jerico","Ramallah","Jerusalem"," Qalqilya","Bethlehem","Salfit"];
    const { initialFname,initialLname,initialLocation, initialServices,initialPhoneNumber,initialFrom,initialTo,initialYearsOfExperience, onSubmitProp,initialCity } = props;
    const [fname, setFname] = useState(initialFname);
    const [lname, setLname] = useState(initialLname);
    const [city,setCity] = useState(initialCity);
    const [location, setLocation] = useState(initialLocation);
    const [services, setServices] = useState(initialServices);
    const [from, setFrom] = useState(initialFrom);
    const [to, setTo] = useState(initialTo);

    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    const [yearsOfExperience, setYearsOfExperience] = useState(initialYearsOfExperience);


   

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({fname,lname,city,location,services,from,to,phoneNumber,yearsOfExperience});
    }
    <Form onSubmitProp={props.createDentist} initialFname="" initialLname="" initialLocation="" initialServices="" 
    initialFrom=""   initialTo="" initialPhoneNumber="" initialYearsOfExperience="" initialCity=""/>

const theme = createTheme();



  return (
  <div className='pict'  >
    <ThemeProvider    theme={theme}>
      <Container  component="main" maxWidth="xs" >
      <Header/>

        <form onSubmit={onSubmitHandler} >
        {props.errors.map((err, index) => <p  style={{color:"red"}} key={index}>*{err}</p>)}
       
        <Typography component="h1" variant="h5" >
    Add Dentist
  </Typography> 
            <TextField
            style={{backgroundColor:"#dde7ed"}}
              margin="normal"
              // required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
            //   autoComplete="fname"
              autoFocus
              onChange={(e)=>setFname(e.target.value)} value={fname}
            />

<TextField
style={{backgroundColor:"rgb(188 221 240)"}}
              margin="normal"
              // required
              fullWidth
              id="lname"
              label="last Name"
              name="lname"
              
            //   autoComplete="lname"
              autoFocus
              onChange={(e)=>setLname(e.target.value)} value={lname}
            />

<TextField style={{width:'390px',backgroundColor:"rgb(240 205 205)"}}
          id="outlined-select-currency"
          select
          label="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        >
                {cityName.map( (cityNames, idx) => (
          
            <MenuItem key={idx} value={cityNames}>
              {cityNames}
            </MenuItem>
          ))}
        </TextField>

        {/* <Select
        labelId="demo-select-small"d
        id="demo-select-small"
        value={city}
        label="City"
        onChange={e => setCity(e.target.value)}
      >
        {cityName.map( (cityNames, idx) => (
          
          <MenuItem key={idx} value={cityNames}>
            {cityNames}
          </MenuItem>
        ))}
      </Select> */}

<TextField
style={{backgroundColor:"#dde7ed"}}
              margin="normal"
              // required
              fullWidth
              id="location"
              label="location"
              name="location"
            //   autoComplete="location"
              autoFocus
              onChange={(e)=>setLocation(e.target.value)} value={location}
            />

<TextField
style={{backgroundColor:"rgb(188 221 240)"}}
              margin="normal"
              // required
              fullWidth
              id="from"
              label="Start Time"
              name="from"
              type="time"
            //   autoComplete="workingHours"
              autoFocus
              onChange={(e)=>setFrom(e.target.value)} value={from}
              
            />


            
            <TextField
style={{backgroundColor:"rgb(188 221 240)"}}
              margin="normal"
              // required
              fullWidth
              id="to"
              label="End Time "
              name="to"
              type="time"
            //   autoComplete="workingHours"
              autoFocus
              onChange={(e)=>setTo(e.target.value)} value={to}
              
            />
            
            <TextField
style={{backgroundColor:"rgb(240 205 205)"}}
              margin="normal"
              // required
              fullWidth
              id="services"
              label="services"
              name="services"
            //   autoComplete="yearsOfExperience"
              autoFocus
              onChange={(e)=>setServices(e.target.value)} value={services}
            />
            <TextField
style={{backgroundColor:"#dde7ed"}}
              margin="normal"
              // required
              fullWidth
              id="phoneNumber"
              label="Phone Number "
              name="phoneNumber"
            //   autoComplete="yearsOfExperience"
              autoFocus
              onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}
            />

<TextField
style={{backgroundColor:"rgb(188 221 240)"}}
              margin="normal"
              // required
              fullWidth
              id="yearsOfExperience"
              label="Years of Experience "
              name="yearsOfExperience"
            //   autoComplete="yearsOfExperience"
              autoFocus
              onChange={(e)=>setYearsOfExperience(e.target.value)} value={yearsOfExperience}
            />
           
          
            <Button
              type="submit"
              fullWidth

              
            //   sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
      </form>
          
        
      </Container>

    </ThemeProvider>
</div>
  );
}


export default Form;