
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
    <div>
     <div className="sticky-header"> <Navbar /></div>
     <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
