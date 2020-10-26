import React, { useState, useEffect  } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import * as yup from"yup"
import { Media } from "react-bootstrap";

const schema = yup.object().shape({
  fullname:yup.string().required("Please enter your name").min(2, 'That\'s not valid'),
  email: yup 
    .string()
    .email("must be a valid email")
    .required("Must include email address"),
  password: yup.string().required('Password is required'),
  phonenumber: yup.string().required('phonenumber Required'),
  username: yup.string().required('phone number required')
})


const Signup = (props) => {
  const [user, setUser] = useState([]);
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    password: "",
    phonenumber: "",
    email: "",
  });

  const [isDisabled, setIsDisabled] = useState(true)
  const [buttonIsDisabled, setButtonIsDisabled]= useState(true)

  const [errors, setErrors] = useState({
    fullname:"",
    password:"",
    email:""

  })

  useEffect(()=>{
    console.log('form state change')
    schema.isValid(values).then(valid=>{
      console.log("valid?", valid)
      setButtonIsDisabled(!valid)
    })

  }, [values])


  const validate = e => {
    e.persist()
    yup.reach(schema, e.target.name).validate(e.target.value)
    .then(valid => setErrors({...errors, [e.target.name]: ""}))
    .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
}

 

  const { push } = useHistory();

  const handleChange = (e) => {
    e.persist();

    const newValuesState ={
      ...values,
      [e.target.name]:
      e.target.type==="checkbox"? e.target.checked: e.target.value}
      validate(e)
      setValues(newValuesState)

    // console.log(e.target.name, ":", e.target.value);
    // setValues({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    const newvaluesData ={
        ...values,
        [e.target.name]:e.target.value
    }
      setValues(newvaluesData);


    axiosWithAuth()
      .post("api/auth/register", values)
      .then((res) => {
        console.log(res, "res inside handleSubmit signup form");
        setUser(res.data);
        push("/login");
      })
      .catch((err) => {
        console.log(err, "error in signing up form ");
      });

     
  };

  const formSubmit = e =>{
    e.preventDefault();
  }

  return (
    <>
      <h1 className="signup-header">
        Get started with us Today Create Your account
      </h1>
      <div className="signup-container">
        <form onSubmit={formSubmit}>
          Full Name:
          <div className="form-inputs">
            <input
              className="form-inputs"
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Enter your Fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname.length > 0 ? <p className="error">{errors.fullname}</p>:null}
          </div>
          Username:
          <div className="form-inputs">
            <input
              className="form-inputs"
              id="username"
              type="text"
              name="username"
              placeholder="Enter Your username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          Password:
          <div className="form-inputs">
            <input
              className="form-inputs"
              id="password"
              type="text"
              name="password"
              placeholder="Enter Your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password.length > 0 ? <p className="error">{errors.password}</p>:null}
          </div>
          Phone Number:
          <div className="form-inputs">
            <input
              className="form-inputs"
              id="phonenumber"
              type="text"
              name="phonenumber"
              placeholder="Enter Your Phone Number"
              value={values.phonenumber}
              onChange={handleChange}
            />
          </div>
          Email:
          <div className="form-inputs">
            <input
              className="form-inputs"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email.length > 0 ? <p className="error">{errors.email}</p>:null}
          </div>
          <button className="form-input-btn" type="submit" disabled={buttonIsDisabled}>
            Sign Up
          </button>
        </form>
      </div>
    </>
    );
  ;
}
export default Signup
