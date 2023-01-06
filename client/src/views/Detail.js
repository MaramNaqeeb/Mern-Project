


// import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
// import { Card } from '@material-ui/core';


 function Table(props) {
  // const theme = useTheme();
  const { id } = props;

    const [dentist, setDentist] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/dentists/'+props.id)
            .then(res => {setDentist(res.data);console.log(res.data);setLoaded(true);})
            .catch(err => console.error(err));
    }, [props.id]);

    const recommenedDentist=(id)=>{
    
        axios.put('http://localhost:8000/api/dentists/' + props.id,{recommened:dentist.recommened+1})
        .then(res=>{
            setDentist(res.data)})
            navigate("/")
            .catch(err => console.error(err));
             
     }
                
     if(loaded){

  return (
    (<div className='contain'>
    
    <Header></Header>

    <Card sx={{ display: 'flex',width:"580px",height:"450px",marginLeft:"540px" ,boxShadow:20,fontFamily: "Times New Roman"
 }}>
       
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div style={{textAlign:"start",width:"280px"}}><Typography component="div">
          <h6>Name: {dentist.fname} {dentist.lname}</h6>
          </Typography>
          <br/>
          
          <Typography   component="div">
          <h6>City: {dentist.city}</h6>
          </Typography>
          <br/>
          <Typography   component="div">
          <h6>Location: {dentist.location}</h6>
          </Typography>
          <br/>
          <Typography   component="div">
          <h6>Services: {dentist.services}</h6>
          </Typography>
          <br/>
          <Typography   component="div">
         <h6> Working Hours: {dentist.from} _ {dentist.to}</h6>
        
          </Typography>
          <br/>
          <Typography   component="div">
         <h6>Phone Number:{dentist.phoneNumber}</h6>  
          </Typography>
          <br/>
          <Typography   component="div">
         <h6>Years of Experience: {dentist.yearsOfExperience}</h6> 
        
          </Typography>
          <br/>
          <Typography   component="div">
        
          <Button style={{backgroundColor:"rgb(118 194 239)"}} variant="contained" onClick={(e)=>recommenedDentist(dentist._id)}>Recommened</Button>
          </Typography>
          
</div>
          <br/>
        </CardContent>
     
      <CardMedia
        component="img"
        sx={{ width: 350 }}
        image="/pastep.jpeg"
        
        alt="Live from space album cover"
      />
      
    </Card>
    </div>)
    
  );
}
else{return (<div></div>)}

}
export default Table;
