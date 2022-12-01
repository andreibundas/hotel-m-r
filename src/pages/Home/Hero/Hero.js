import React from 'react';
import {NavLink} from 'react-router-dom'
import './Hero.css';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import hotelMagnific from '../../../assests/magnific1.2.jpg';
import restaurantMagnific from '../../../assests/restaurantMK.jpg';

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ ' ', 'Un ultim popas la iesirea din tara !!  <br> Prima oprire la revenirea in tara !'   ], 
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 25,
      backDelay: 5000,
      smartbackspace: false,
      loop: true,
      showCursor: false,
    })
    return () => {
      typed.destroy();
    };
  });

  const el2 = useRef(null);
  useEffect(() => {
    const typed2 = new Typed(el2.current, {
      strings: [ ' Va asteptam cu o gama variata de preparate <br> traditinale romanesti <br> traditionale unguresti <br> bucataria internationala <br> bucataria orientala '],
      startDelay: 3000,
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 1000,
      smartbackspace: false,
      loop: true,
      showCursor: false,
    })
    return () => {
      typed2.destroy();
    };
  });


  return (

    <section className='div-hero'>
     
          <div className=' img-div '>
                <img className='imgH img-hotel ' src={hotelMagnific} alt=' Hotel Magnific '>
                  
                {/* <NavLink className='nav-link' to="/restaurant">Restaurant</NavLink> */}
                </img>
            <h1> Hotel Magnific  </h1>
            <h3  className='span'> <span ref={el}>  </span>  </h3>

          </div>

          <div className='img-div '>
                <img className='imgH img-rest ' src={restaurantMagnific} alt=' Restaurant Hotel Magnific'>
                </img>
            <h1> Restaurant Hotel Magnific   </h1>
            <h3 className='span'> <span ref={el2}></span> </h3>

          </div>


    </section>




    /* <div className='hero-container'>

  <div className='hero'>
    <img className='img' src={hotelMagnific} alt=' Hotel'> </img>

  <div> 
  <h1> Hotel Magnific</h1>
  </div>
  </div>

  <div className='hero'>
    <img className='img' src={restaurantMagnific} alt='Restaurant'> </img>

  <div> 
  <h1> Restaurant Hotel Magnific </h1>
  </div>
  </div>

</div> */



// <div className='hero-container'>

//   <div className='hero-left hero'>
//       <img className='img' src={hotelMagnific}>
//       </img>
//       <div className='text-img'>
//       <h1> Hotel Magnific</h1>

//     </div>


//       <div className='hero-right hero'>
//       <img  className='img' src={restaurantMagnific}>
//       </img>
//       <div className='text-img'>
//       <h1> Restaurant Hotel Magnific</h1>

//       </div>
      
//     </div>
//       </div>

// </div>

    // <div className='hero-img container'>
    //     <div className='hero-content'>
    //         <h1 className='heading-primary'>
    //             <span>Bun venit </span>la Hotel Magnific
    //         </h1>
    //         <p className='text-white'> Un ultim popas  </p>

    //         <p className='text-white'> 
    //         Rezerva la telefon <span className='special-word'> +40 77777</span>
            
    //         </p>

    //     </div>
    // </div>

// </ div>

  )
}

export default Hero