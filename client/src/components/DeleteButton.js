import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { dentistId, successCallback } = props;
    
    const deletedentist = e => {
        axios.delete('http://localhost:8000/api/dentists/' + dentistId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletedentist}>
            Delete
        </button>
    )
}

