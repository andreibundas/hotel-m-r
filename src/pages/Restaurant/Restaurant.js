import React from 'react'
import RestaurantImage from '../../components/RestaurantImage/RestaurantImage';
import bgImage from '../../assests/restaurant.jpg';
import SuperFood from './SuperFood/SuperFood';
import Chefi from './Chefi/Chefi';

const Restaurant = () => {
  return (

    <div>
    <RestaurantImage 
    bgImage={bgImage}
    heading={[ <span>Restaurantul</span>, ' nostru']}
    text=' Tot ce e mai bun ! '
    />    
    <SuperFood />
    <Chefi />

    </div>

  )
}

export default Restaurant