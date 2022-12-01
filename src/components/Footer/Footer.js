import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
// import {FaFacebookF, TbBrandBooking} from "react-icons/fa";
import {FaFacebookF } from "react-icons/fa";
// import { TbBrandBooking } from 'react-icons/tb'
import booking from '../../assests/booking-icon.svg'



const Footer = () => {
  return (
    <footer className=' footer'>

      {/* <div className='container'> */}
        <div className='grid-container'>
          <div className='footer-grid-item'>
            <h3>Borș, Romania</h3>
            <p>Calea Borșului 157, Borș CP 410608 jud. Bihor </p>
            {/* <p> CP 410608 </p> */}
            <p> Telefon:  0771 620 703 </p>
            <Link to='#' className='text-ewhite'>
              hotelmagnific@hotel.ro
            </Link>
          </div>

          {/* <div className='footer-grid-item'> */}

          <div id='copy'> 
             <p> &copy; 2022 magnifichotel-restaurant.com</p>
            </div>

           <div className='socialMedia'>
 
              <a href='https://www.facebook.com/hotelmagnific' target="_blank" >
              < FaFacebookF size={30} color='#4267B2'/>
              </a>

              <a id='booking'  href='https://www.booking.com/hotel/ro/magnific-bors.ro.html' target="_blank" >
          <img src={booking} alt={booking} width={30}/>
              {/* < TbBrandBooking size={50} color='000080'/> */}
              </a> 
           </div>

          
            {/* </div> */}


        </div>

      {/* </div> */}
      
    </footer>
  )
}

export default Footer