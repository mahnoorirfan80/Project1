import React from 'react'
import './dropdown.css'
function Dropdown_items() {
  return (
    <>
    <div  className="container">
    <ul id="dropdown">
        <li className="dropdown_li" >
            <a href="about.html">
             Sign Up
            </a>
          </li>
          <li className="dropdown_li" >
            <a href="projects.html">
            Log In
            </a>
          </li>
          <hr/>
          <li  >
            <div id="dropdown_li">
            Gift Cards
            </div>
          </li>
        </ul>
      
    </div>
    </>
  )
}

export default Dropdown_items
