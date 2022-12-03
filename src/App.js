import React from 'react';
import {BrowserRouter, Routes,Router,Route}from "react-router-dom"
import Home from './componenets/Home/Home.js';
import Navbar from './componenets/Navbar/Navbar';
import Footer from './componenets/Footer/Footer';
import Moviedetail from './componenets/Moviedetail/Moviedetail'
import Pagenotfound from './componenets/Pagenotfound/Pagenotfound';
import './App.css'

export default function App() {
  return (
    <div>
   <Navbar />
        <BrowserRouter>

           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pagenotefound" element={<Pagenotfound />} />
              <Route path="/movie/:imdbID" element={<Moviedetail />} />
           </Routes>
        </BrowserRouter>
<Footer />
</div>
    
  
    /*<Routes>
       <Route path="/" element={<Home />} />
      
    </Routes>*/
    
    

  )
}
