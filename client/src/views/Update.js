import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';


const Update = (props) => {
    const { id } = props;
    const [dentist, setDentist] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/dentists/' + props.id)
            .then(res => {
                setDentist(res.data);
                 setLoaded(true);
            })
    }, [props.id])
    
    const updatedentist = dentist => {
        axios.put('http://localhost:8000/api/dentists/' + id, dentist)
            .then(res => {
                navigate("/")
                }
                )
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
           
  
        {loaded && (
            <>
    
                <Form
                    onSubmitProp={updatedentist}
                    initialFname={dentist.fname}
                    initialLname={dentist.lname}
                    initialCity={dentist.city}

                    initialLocation={dentist.location}
                    initialServices={dentist.services}
                    intialFrom={dentist.from}
                    intialTo={dentist.to}

                    initialPhoneNumber={dentist.phoneNumber}
                    initialYearsOfExperience={dentist.yearsOfExperience}

                    errors={errors}
                />
                {/* <DeleteButton dentistId={dentist._id} successCallback={() => navigate("/")} /> */}
            </>
    )}
    </div>
    )
}

    
export default Update;

