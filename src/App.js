import React, {useState, useEffect} from 'react';
import Header from "../src/components/Header/Header"
import FormSignup from "./components/FormSignup"
import Form from "../src/components/Form"
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import FormSuccess from './components/FormSuccess';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import NewloginForm from './components/NewloginForm';
import StickyNav from './components/StickyNav';


function App() {

return (
    <div className="App">
      <StickyNav/>
      <Form />
     
      </div> 
           
 
  )  
}
export default App

// import React, { useState } from "react";
// import LoginForm from "./components/LoginForm.js";
// import NavigationBar from "./components/NavigationBar";
// import "./App.css";

// function App() {
//   const adminUser = {
//     email: "admin@admin.com",
//     password: "admin123",
//   };
//   const [user, setUser] = useState({ name: "", email: "" });
//   const [error, setError] = useState("");
//   const Login = (details) => {
//     console.log(details);
//   };

//   const LogOut = () => {
//     console.log("logout");
//   };
//   return (
//     <div className="App">
//       <NavigationBar />
//       {user.email != "" ? (
//         <div className="welcome">
//           <h2>
//             welcome,<span>{user.name}</span>
//           </h2>
//           <button>LogOut</button>
//         </div>
//       ) : (
//         <LoginForm />
//       )}
//     </div>
//   );
// }

//