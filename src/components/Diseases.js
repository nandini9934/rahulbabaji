import React from 'react';
import kidneystone from './Images/kidneystone.jpeg';
import migraine from './Images/migraine.jpeg';
import cardio from './Images/cardio.png';
import skindisorders from './Images/skindisorders.jpeg';

import '../App.css';

function Diseases() {
    const diseases = [
        { name: "Kidney Stone", url: kidneystone },
        { name: "Skin Diseases", url: skindisorders },
        { name: "Migraine", url: migraine },
        { name: "Cardiovascular Diseases", url: cardio },
        { name: "Kidney Stone", url: kidneystone },
        { name: "Skin Diseases", url: skindisorders },
        { name: "Migraine", url: migraine },
        { name: "Cardiovascular Diseases", url: cardio }
    ];

    return (
        <div className='container headersnew py-20'>
            Treatment Available for Diseases
            <div className='marquee-container '>
                <ul className='marquee'>
                    {diseases.map((content, index) => (
                        <li className='cardDisease col-xl-3 pr-3 ' key={index}>
                            <img className="imgi pt-2" src={content.url} alt="first" style={{ borderRadius: '20px' }} />
                            <h5 className='diseaseName'>{content.name}</h5>
                        </li>
                    ))}
                    </ul>
            </div>
            <div className='marquee-container'>
                <div className='marqueei'>
                    {diseases.map((content, index) => (
                        <div className='cardDisease col-xl-3 pr-3' key={index}>
                            <img className="imgi pt-2" src={content.url} alt="first" style={{ borderRadius: '20px' }} />
                            <h5 className='diseaseName'>{content.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Diseases;
