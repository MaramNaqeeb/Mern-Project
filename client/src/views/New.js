import React from 'react'
import Form from '../components/Form';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';


import  { useEffect, useState } from 'react';
import axios from 'axios';
const New = (props) => {
    const [dentists, setDentists] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/dentists')
            .then(res=>{
                setDentists(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
            
    },[]);
    const creatDentist = dentist => {
        axios.post('http://localhost:8000/api/dentists', dentist)
            .then(res=>{
              
                setDentists([...dentists, res.data],navigate("/"));
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                
                setErrors(errorArr);
            })
            
    }
  return (
  
    <div>

       <Form onSubmitProp={creatDentist} initialFname="" initialLname="" initialLocation="" initialServices="" initialFrom="" initialTo="" initialPhoneNumber="" initialYearsOfExperience="" initialCity=""  errors={errors} />
    </div>
  )
}

export default New
