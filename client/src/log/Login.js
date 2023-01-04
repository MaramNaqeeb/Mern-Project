import { navigate } from '@reach/router'
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const[formInfo,setFormInfo]=useState({
        email:"",
        password:"",
    })
    const [errormsg,setErrormsg]=useState(null)


    const changeHandler=(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
    })
};
        const login=(e)=>{
            e.preventDefault();
           
            axios.post('http://localhost:8000/api/login/',formInfo, {withCredentials:true})
            .then(res=>{
                console.log(res)
                if(res.data.msg=="success!"){

                    navigate("/dashboard")


                }else{
                    setErrormsg(res.data.msg)

                }
            })
            .catch(err => {console.log(err)});
        
        
    }
    

  return (
    <div>

        <h3>Login Below</h3>

         <form onSubmit={login}>
         {errormsg?<p>{errormsg}</p>:""}

         <p>
                <label>Email</label><br/>
                <input type="text" onChange={changeHandler} name="email"/>

            </p>
            <p>
                <label>Password</label><br/>
                <input type="text" onChange={changeHandler} name="password"/>

            </p>

            <input type="submit" value="login"/>

        </form>
    </div>
  )

  }
export default Login
