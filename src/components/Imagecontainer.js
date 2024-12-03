import React from 'react';
import hospimain from './Images/hospimain.jpeg';
import '@fortawesome/fontawesome-free/css/all.css';

function Imagecontainer() {
  return (
    <div className='container'>
      <div className="contain py-20">
      <div className='img-contain'>
        <img
          src={hospimain}
          width="100%"
          alt="Im should"
        /> </div>
      <div className='texti'>
        <p>Health Care<br /> For Whole Family</p>

        <a className="custom-link fw-normal" href="https://api.whatsapp.com/send?phone=919454900060&text=Hello%20I%20need%20appointment"><button className='btn py-2 px-3 py-xl-3 px-xl-4'><i className="fas fa-phone pr-2 pl-0"></i>
          Book Appointment</button></a>
      </div>
      </div>
    </div>
  );
}

export default Imagecontainer;
