import React from 'react';
import './Card.css'; 

function Card({ name, url }) { 
  return (
    <div className='container cardview '>
      <img src={url} alt={name} /> 
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
