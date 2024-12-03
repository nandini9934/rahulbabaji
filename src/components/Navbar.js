import React from 'react';
import sitelogo from './Images/sitelogo.png';
import MobileDropDown from './MobileDropdown';
function Navbar() {
  return (
    <nav id="navbar" className="container navbar-expand-lg" style ={{ backgroundColor: "rgba(255,255,255,0.83)" }}>
      <div className="container-fluid row gap-2">
        <div className="col-1 pr-2 pr-xl-4 pt-1">
        <img className="logo-img" src={sitelogo} height="100px" width="100px" alt="newlogo"/>
        </div>
        <div className="col-6 col-xl-7 d-flex align-items-center">
        <div className="fs-4 fw-bold"><a className="navbar-brand header" href="/">
        Dr Rahul Astro Homeopathic & Research Center
        </a></div>
        </div>
        <div className="col-4">
          <MobileDropDown></MobileDropDown>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav ms-auto mt-3">          
            <li className="nav-item">
              <a className="nav-link active m-3 font-weight-bold" aria-current="page" href="#navbar">
              <h5> Home </h5>
              </a>
            </li>
            <hr/>
            <li className="nav-item">
              <a className="nav-link m-3 font-weight-bold" href="#doc">
              <h5>About </h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-3 font-weight-bold" href="#foot">
              <h5>Contact Us </h5>
              </a>
            </li>         
          </ul>
         
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
