import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    import Row from '../components/Row'
    import List from '../components/List'
 import Header from '../components/Header'


import Newdetail from './Newdetail';

const Main = (props) => {
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
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/dentists/city/'+id)
    //         .then(res=>{
    //             setDentists(res.data);
    //             setLoaded(true);
    //         })
    //         .catch(err => console.error(err));
    // },[]);

  
   
    const removeFromDom = dentistId => {
        setDentists(dentists.filter(dentist => dentist._id != dentistId))
    }

    return (
        <div>
            <Header></Header>
             {loaded && <List dentists={dentists} removeFromDom={removeFromDom}/>}
{/* <Newdetail></Newdetail> */}
           <hr/>

           
          
        </div>
    )
}
    
export default Main;

