// // import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import React, { useState } from 'react'



// const Form=(props) =>{


// const cityName=["","Nablus","Jenin","Tulkarm","Hebrew","Jerico","Ramallah","Jerusalem","Qalqilia","Bethlehem","Salfit"];
//     const { initialFname,initialLname,initialLocation, initialServices,initialPhoneNumber,initialWorkingHours,initialYearsOfExperience, onSubmitProp,initialCity } = props;
//     const [fname, setFname] = useState(initialFname);
//     const [lname, setLname] = useState(initialLname);
//     const [city,setCity] = useState(initialCity);
//     const [location, setLocation] = useState(initialLocation);
//     const [services, setServices] = useState(initialServices);
//     const [workingHours, setWorkingHours] = useState(initialWorkingHours);
//     const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
//     const [yearsOfExperience, setYearsOfExperience] = useState(initialYearsOfExperience);


//     // const [errors, setErrors] = useState([]); no need for this as i sent props from one of the files in the views
   

//     const onSubmitHandler = e => {
//         e.preventDefault();
//         onSubmitProp({fname,lname,city,location,services,workingHours,phoneNumber,yearsOfExperience});
//     }
//     <Form onSubmitProp={props.createDentist} initialFname="" initialLname="" initialLocation="" initialServices="" 
//     initialWorkingHours="" initialPhoneNumber="" initialYearsOfExperience="" initialCity=""/>

// const theme = createTheme();



//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
       
       
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="fname"
//               label="First Name"
//               name="fname"
//               autoComplete="fname"
//               autoFocus
//               onChange={(e)=>setFname(e.target.value)} value={fname}
//             />

// <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="lname"
//               label="last Name"
//               name="lname"
//               autoComplete="lname"
//               autoFocus
//               onChange={(e)=>setFname(e.target.value)} value={lname}
//             />

// <TextField style={{width:'200px'}}
//           id="outlined-select-currency"
//           select
//           label="City"
//           value={city}
//           onChange={e => setCity(e.target.value)}
//         >
//                 {cityName.map( (cityNames, idx) => (
          
//             <MenuItem key={idx} value={cityNames}>
//               {cityNames}
//             </MenuItem>
//           ))}
//         </TextField>

// <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="location"
//               label="location"
//               name="location"
//               autoComplete="location"
//               autoFocus
//               onChange={(e)=>setLocation(e.target.value)} value={location}
//             />

// <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="workingHours"
//               label="Working Hours "
//               name="workingHours"
//               autoComplete="workingHours"
//               autoFocus
//               onChange={(e)=>setLocation(e.target.value)} value={workingHours}
//             />

// <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="yearsOfExperience"
//               label="Years of Experience "
//               name="yearsOfExperience"
//               autoComplete="yearsOfExperience"
//               autoFocus
//               onChange={(e)=>setYearsOfExperience(e.target.value)} value={yearsOfExperience}
//             />
           
          
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Submit
//             </Button>
          
               
          
//       </Container>
//     </ThemeProvider>
//   );
// }


// export default Form;