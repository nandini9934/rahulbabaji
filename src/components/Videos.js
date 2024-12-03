import React from 'react';
import ReactPlayer from 'react-player/youtube';
import {Link} from 'react-router-dom';

function Videos() {
  const urlList = [
    { url: 'https://www.youtube.com/watch?v=SptC-_KJ2ws' },
    { url: 'https://www.youtube.com/watch?v=kFEq4SIekak' },
    { url: 'https://www.youtube.com/watch?v=QrcL1ftFIdI' },
  ];

  return (
    <div className='container py-20'>
      <div className="headers">Our Treatments</div>
      <div className='row m-4'>
        {urlList.map((tempUrl, index) => (
          <div key={index} className="col-12 col-xl-4 mb-4 d-flex justify-content-center align-items-center">
            <ReactPlayer width={330} height={200} url={tempUrl.url} />
          </div>
        ))}
      </div>
      <div>
        <button className="btn btn-danger float-right mb-5 mr-5" type="submit"><Link to="/testimonials">View More</Link></button>
      </div>  
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Videos;
