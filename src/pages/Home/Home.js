import React from 'react';
import Hero from './Hero/Hero';
import AmazingMeal from './AmazingMeal/AmazingMeal';
import OurChef from './OurChef/OurChef';
import './Home.css';
import BckgrNavbar from './BckgrNavbar/BckgrNavbar';



const Home = () => {
  return (
    <div>
      <BckgrNavbar />
      <Hero />
      <AmazingMeal />
      <OurChef />
    </div>
  )
}

export default Home