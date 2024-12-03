import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MobileDropDown() {

  const [isOpen, setIsOpen] = useState(false);

 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown">
   
      <button onClick={toggleDropdown}><FontAwesomeIcon icon={faBars}/></button>
      
      {isOpen && (
        <div className="dropdownmenu">
         
            <div className="listborder p-2" onClick={toggleDropdown}><a className="custom-link pl-2" href="/homeopathy">Home</a></div>
            <div className="listborder p-2 pl-2" onClick={toggleDropdown}><a className="custom-link pl-2" href="#doc">About Us</a></div>
            <div className="p-2" onClick={toggleDropdown}><a className="custom-link pl-2" href="#foot">Contact Us</a></div>
         
        </div>
      )}
    </div>
  );
}

export default MobileDropDown;

