import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';


const Dashboard = () => {
const[loggedUser,setLoggedUser]=useState(null)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/loggedin", {withCredentials:true})
        .then((res)=>{
           

        setLoggedUser(res.data.user);
        console.log(res);
    })
        .catch((err) => {
            console.log(err);
            navigate("/home");
          });
      }, []);
    
   const logout=async(e)=>{
    await axios.get("http://localhost:8000/api/users/logout",{withCredentials:true})
   .then(res=>{
    console.log(res)

    navigate("/home")
})
    .catch(err=>{
        console.log(err);
});
   };
    
  return (
    <div>
    {loggedUser?(
<div>
      <h1> Welcome user{loggedUser.userName}</h1>
      <button onClick={logout}>logout</button>
    </div>
   ) :(
    <div>
        <h3>Please log in first</h3>
    </div>
   )}
    </div>

  )
}

export default Dashboard;
