import React from 'react'
import './Contact.css'
// import ContactMagnific from '../../assests/aboutMagnific.jpg';

const Contact = () => {
  return (
    <section className='section contact'>
    <article  className='leftSide'> 
      <iframe className='leftSide-i'   
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d678.7685679315382!2d21.7976786!3d47.1172159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47464fe0122bacff%3A0xbd2486139c0ed12e!2sHotel%20Magnific!5e0!3m2!1sro!2sro!4v1664308109203!5m2!1sro!2sro' 
      width="600" height="450" alt='google map'
      
      ></iframe>
    </article>

      <article className='rightSide'>
        <div className='rightSide-c'>
            <h1> Contact </h1>

        </div>
        </article>
</section>

    
    )
    
}

export default Contact