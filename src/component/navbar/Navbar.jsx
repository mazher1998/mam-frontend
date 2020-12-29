import React, { Component } from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
//import { HashLink as Link } from 'react-router-hash-link'
//import { Link } from "react-scroll";


export const Navbar= () => {
  return (
    <>
      <div className='container'>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <Link activeClass="active"
    
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500} className="navbar-brand" to="/">MontageArtMedia</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li className="nav-item">
        <Link  activeClass="active"
    
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500} className="nav-link" to="Ourteam">OUR TEAM</Link>
      </li>
      <li className="nav-item">
        <Link  activeClass="active"
    
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500} className="nav-link" to="services">SERVICES</Link>
            </li>
            <li className="nav-item">
        <Link  activeClass="active"
    
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500} className="nav-link" to="WhyUs">WHY US</Link>
      </li>
    
      
      
    </ul>
    
  </div>
        </nav>
        </div>
    </>
  )
}
export default Navbar;
