import React from "react"
import "./Nav.css"

function StickyNav(){

return(

    <>
    <header>
      {/* <a href="#" className="logo">Logo</a> */}
        <ul style={{bottom:"25px", left:"240px"}}>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Out</a></li>
          <li><a href="#">Plant List</a></li>
          <li><a href="#">Add Your Plant</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Home</a></li>
        </ul>
        </header>
        <section className="banner"></section>
       
    </>








)


}

export default StickyNav