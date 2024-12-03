import React from 'react'
import Hukum from './Images/Hukum.png';
import Nagma from './Images/Nagma.jpeg';
import Ayushman from './Images/Ayushman.jpeg';
import Virendra from './Images/Virendra.jpeg';
import Abhishek from './Images/Abhishek.jpeg';
import Avinash from './Images/Avinash.jpeg';

function Doctors() {
    const doctor=[
       { name: "Dr. Ayushman Gupta",designation:"BHMS", urL:Ayushman},
       { name: "Dr. Virendra",designation:"BHMS", urL:Virendra},
       { name: "Dr. Nagma",designation:"BHMS", urL:Nagma},
       { name: "Dr. Abhishek Yadav",designation:"BHMS", urL:Abhishek},
       { name: "Dr. Avinash Bharadwaj",designation:"BHMS", urL:Avinash},
       { name: "Dr. Hukum Singh",designation:"BHMS", urL:Hukum}
    ]  
  return (
      <div className='container'>    
      <div className="doctorDiv row gap-3">
         {doctor.map((content,index) =>(
             <div className='cardDoctor col-4 mb-4'>
              <div className='doctorImg m-2'>
                <div className="overflow-hidden">
             <img src={content.urL} alt="docimg" height="250px" width="280px" className="img-fluid rounded"></img></div></div>
             <div><b>{content.name}</b></div>
             <div className='fs-7 pb-2'>{content.designation}</div>     
             </div>   
         ))}
          
      </div>
      </div>
  )
}

export default Doctors
