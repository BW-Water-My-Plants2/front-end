import React, { useState } from "react";
import axios from "axios";
import * as yup from"yup"
import { useHistory } from "react-router-dom";
import Loginform from "./LoginForm";
import { Media } from "react-bootstrap";
import "../index.css"


const Schema = yup.object().shape({ 
  username: yup.string().required("Name is a required field"),
  password: yup.string().required("Please prove a Password") })








const Login = (props) => {
  const [user, setUser] = useState([]);

  const [login, setLogin] = useState({ username: "", password: "" });

  const { push } = useHistory();


const [errors, setErrors] = useState({

  username: "", password: ""
})


const validate = (e) =>{
     yup.reach(Schema, e.target.name)
     .validate(e.target.value) 
     .then( valid =>{


     }) 
     .catch( err =>{
       console.log(err.errors)
       setErrors({
         ...errors,
         [e.target.name]: err.errors[0]
       })


     })
}





  const handleChanges = (e) => {
    console.log(e.target.name, ":", e.target.value);
    e.persist()
    validate(e)
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log ("form submitted")
    axios.post('https://reqres.in/api/users', login)
      .then(res=> console.log(res))
      .catch(err=>console.log(err))
  };

  return (
    <>
      <h1 className="signup-header">Login Please</h1>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          Username:
          <div className="form-inputs">
            <input
              className="form-inputs"
              id="username"
              type="text"
              name="username"
              placeholder="Enter Your username"
              value={login.username}
              onChange={handleChanges}
            />
            {errors.username.length > 0 ? <p classNames="errors">{errors.username}</p>: null}
          </div>
          Password:
          <div className="form-inputs"> 
            <input
              className="form-inputs"
              id="password"
              type="text"
              name="password"
              placeholder="Enter Your password"
              value={login.password}
              onChange={handleChanges}
            />
            {errors.password.length > 0 ? <p classNames="errors">{errors.password}</p>: null}
          </div>
          <button className="form-input-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
