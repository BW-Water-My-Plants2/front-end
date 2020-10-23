
 import React, {useState, useEffect} from 'react';
 import axios from "axios"
 import * as yup from "yup";
  import "./Form.css"


 const schema = yup.object().shape({
  userName:yup.string().required("Please enter your name").min(2, 'That\'s not valid')  
})

 function LoginForm() {
  const [login, setLogin] =  useState({
    userName:"",
    password:""

  })

    const [errors, setErrors] =useState ({
        userName:""
    })

    const [isDisabled, setIsDisabled] = useState(true)

    const [post, setPost] =useState([])

    useEffect(()=>{
      schema.isValid(login).then(valid => setIsDisabled(!valid))
    }, [login])

const validate = e =>{
  e.persist()
  yup.reach(schema, e.target.name).validate(e.target.value)
    .then(valid => setErrors({...errors, [e.target.userName]: ""}))
    .catch(err => setErrors({...errors, [e.target.userName]: err.errors[0]}))

}

const handleChanges = e =>{
  setLogin({...login, [e.target.userName]: e.target.value})
         if (e.target.userName === "userName") {
            validate(e)
        }
}

const handleSubmit = e =>{
  e.preventDefault();
  axios.post("https://reqres.in/api/users", login)
  

return(
  
  <div className="card col-12 col-lg-2 login-card mt-2 hv-center" style={{left:"550px", padding:"1px"}}>
    <form  onSubmit={handleSubmit} style={{backgroundColor:"#1fc2ba"}}>
    <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">UserLogin </label>
                <input type="text" 
                       className="form-control" 
                       id="userName" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter userName"
                       name="userName"
                       value={login.userName}
                       onChange={handleChanges}
                />
               
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        Name="password"
                        value={login.password}
                        onChange={handleChanges}
                    />
                    <button type="submit" disabled={isDisabled} className="bnt">Submit</button>
                </div>
              
    </form>
    </div>
  
)


 }}
 export default LoginForm
