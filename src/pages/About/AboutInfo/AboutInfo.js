import React from 'react'
import './AboutInfo.css'

const AboutInfo = () => {
  return (
    <section className='section'>
        <div className='containerNew grid-container'>
            <div>
                <div className='about-info-content'>
                    <h2 className='heading-secondary'>
                        O scurta prezentare a Restaurantului nostru
                    </h2>

                    <p> Prezentare restaurant </p>
                    <blockquote> aici este blockot ul </blockquote>

                    <p> Alt paragraf </p>
                    
                </div>

            </div>

            <div>
                <div className='about-info-content'>
                    <h2 className='heading-secondary'>
                        Prezentare Hotel
                    </h2>

                    <p> Hotelul nostru </p>
                    <blockquote> aici este blockot ul </blockquote>

                    <p> Alt paragraf </p>
                    
                </div>

            </div>

        </div>
        
    </section>
  )
}

export default AboutInfo