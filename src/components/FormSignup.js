import React from "react"
import useForm from "./useForm"
import Validateform from "./Validateform"
import "./Form.css"


const FormSignup = ({submitForm}) =>{
  const {handleChange, values, handleSubmit, errors}= useForm(submitForm, Validateform)
  console.log(handleChange)
  console.log(handleSubmit)





  return(
  <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us Today Create Your account</h1>
        <div className="form-inputs">
          <label htmlFor="fullname" className="form-label">
            Fullname
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Enter your Fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p>{errors.fullname}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username"
            className="form-label">
              Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter Your username"
            value={values.username}
            onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
          <label htmlFor="password"
            className="form-label">
              Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
            minLength="6"
            required
            />
             {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
          <label htmlFor="PhoneNumber"
            className="form-label">
              PhoneNumber
          </label>
          <input
            id="phoneNumber"
            type="Tel"
            name="phoneNumber"
            className="form-input"
            placeholder="Enter Your Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={values.phoneNumber}
            onChange={handleChange}
            />
          </div>
          <button className="form-input-btn"
          type="submit">Sign Up</button>
          <span className="form-input-login">
            Already have an account? Login <a href="#">Here</a>
          </span>

      </form>





  </div>



  )
}
export default FormSignup