import React from 'react'
import { FaWeight } from 'react-icons/fa'
import './RestaurantImage.css'

const RestaurantImage = (props) => {
  return (

    <div 
    className='container' 
    style={{
        background: `url(${props.bgImage}) no-repeat bottom center/cover`,
        height: '65vh',
        width: '65%',
        // width: '150vh',
        }}
        >
            <div className='banner-content'>
                <h1 className='heading-primary'>{props.heading}</h1>
                <p className='text-white'>{props.text}</p>                
            </div>

        </div>

  )
}

export default RestaurantImage