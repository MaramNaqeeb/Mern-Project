import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import { Card } from '@material-ui/core';

    
const Detail = (props) => {
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

       (<div>

<Card>
        <h1>This is content within my card</h1>
</Card>
            
            <p>Name: {dentist.fname} {dentist.lname} </p>
            <p>City: {dentist.city}</p>
            <p>Location: {dentist.location}</p>
            <p>Services: {dentist.services}</p>
            <p>Working Hours: {dentist.workingHours}</p>
            <p>Phone Number: {dentist.phoneNumber}</p>
           
            <p>Recommened: {dentist.recommened}</p>



            <p>Years of Experience: {dentist.yearsOfExperience}</p>
            <button onClick={(e)=>recommenedDentist(dentist._id)}>Recommened</button>




            <Link to={"/edit/" + dentist._id }><button>  
           Update </button></Link>



           

        </div>)
    )
}
else{return (<div></div>)}
}
export default Detail;

