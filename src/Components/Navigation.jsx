import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import "./Navigation.css";
const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <Link to="/" className="logo">
          <img src="src\Images\Logo.png" alt="logo" />
          </Link>
          
        </div>
        <ul>
      
      <li> <Link to="/Skills" className="underline">Skills</Link></li>
      <li> <NavLink to="/Contact" className="underline">Contact</NavLink></li>
        </ul>
        <Link to="https://www.google.com/" className="underline">
        <button>Exit</button>
        </Link>
        
      </nav>
    );
  };
  
  export default Navigation;