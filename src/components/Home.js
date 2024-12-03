import React from 'react';
import Imagecontainer from './Imagecontainer';
import Article from './Article';
import Diseases from './Diseases';
import Videos from './Videos';
import Numbers from './Numbers';
import Doctors from './Doctors';

function Home() {
  return (
    <div>
      <Imagecontainer/>
      <Numbers/>
     <Article/>
     <Doctors/>
     <Diseases/>
      <Videos/>
    </div>
  );
}

export default Home;
