import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";
// import Login from './components/Login';

const Registration = () => {
  const [formInfo, setFormInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    console.log(e.target.name);
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };
  const register = (e) => {
    console.log(formInfo);
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register/", formInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Register Below</h3>
      <form onSubmit={register}>
        <p>
          <label>User Name</label>
          <br />
          <input type="text" onChange={changeHandler} name="userName" />
          {errors.userName ? <p>{errors.userName.message}</p> : ""}
        </p>
        <p>
          <label>Email</label>
          <br />
          <input type="text" onChange={changeHandler} name="email" />
          {errors.email ? <p>{errors.email.message}</p> : ""}
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="text" onChange={changeHandler} name="password" />
          {errors.password ? <p>{errors.password.message}</p> : ""}
        </p>
        <p>
          <label>confirm Password</label>
          <br />
          <input type="text" onChange={changeHandler} name="confirmPassword" />
          {errors.confirmPassword ? (
            <p>{errors.confirmPassword.message}</p>
          ) : (
            ""
          )}
        </p>

        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default Registration;
