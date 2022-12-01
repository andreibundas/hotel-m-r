import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Restaurant from './pages/Restaurant/Restaurant';
import Hotel from './pages/Hotel/Hotel';
import Contact from './pages/Contact/Contact';




function App() {
  return (
    <div >
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurant" element={<Restaurant />}/>
        <Route path="/hotel" element={<Hotel />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
      < Footer />
    </div>
  );
}

export default App;
