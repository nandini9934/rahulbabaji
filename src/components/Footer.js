import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
function Footer() {
  const handleDial = () => {
    window.location.href = `tel:${9454900060}`;
  };
  return (
    <footer className="container" id="foot" style={{ backgroundColor: '#000', color: 'white', padding: '20px' }}>
      <div className='containeri my-2 mx-2'>
        <div className='row'>
          <div className='col-xl-5 col-12'>
            
              <h3 className='fw-bold'>
                Dr Rahul Astro Homeopathic & Research Center
              </h3>
              Dr Rahul Astro Homeopathic & Research Center is India's fastest-growing Homeopathy Clinic. We offer our services through a Physical Clinic and TeleClinic. <br/>
              <div className='my-4'><a className="custom-link" href="/"><i className="fab fa-facebook-square fa-2x pr-4"></i></a>
            <a className="custom-link" href="/"><i className="fab fa-instagram fa-2x pr-4"></i></a>
            <a className="custom-link" href="https://www.youtube.com/@dr.rahulbabaji"><i className="fab fa-youtube fa-2x"></i></a></div>
          </div>
          <div className='col-xl-3 col-12 pl-3'>
            <h3 className='fw-bold'>Location</h3>
            <i className="fas fa-map-marker-alt pr-2"></i><a className="custom-link" href="https://www.google.com/maps/dir//334,+Jyoti+Dham+appartment,+Awadhpuri+Rd,+near+Icici+bank,+Vikas+Nagar,+Khyora,+Kanpur,+Uttar+Pradesh+208024/@26.4968833,80.1984339,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399c390034a65a03:0x3483f6e494743c05!2m2!1d80.2808355!2d26.496907?entry=ttu">334, Jyoti Dham appartment, Awadhpuri Rd, near Icici bank, Vikas Nagar, Khyora, Kanpur, Uttar Pradesh 208024</a>
           <br/><br/> 
          </div>
          <div className='col-xl-2 col-6 pl-3'>
            <h3 className='fw-bold'>Diseases</h3>
            <ul className='list-unstyled'>
              <li>Skin Disorders</li>
              <li>Respiratory Ailments</li>
              <li>Arthritis</li>
            </ul>
          </div>
          <div className='col-xl-2 col-6 pl-2 text-break'>
            <h3 className='fw-bold'>Contact Us</h3>
            <ul className='list-unstyled'>
              <li onClick={handleDial}>Call us : 9454900060</li>
              <li><a className="custom-link" href="mailto:rahularyan9999@gmail.com">rahularyan9999@gmail.com</a></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

