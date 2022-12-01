import React from 'react'
import './Chefi.css'

const Chefi = () => {
  return (
    <div>
            <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        <span>Chefii</span> nostri
                    </h1>

                    <p className='text-white'>
                    Calificari si Diplome ---
                    </p>
                </div>
            </div>
        </div>
        {/* { chef info} */}

        <div className='container'>
            <div className='grid-container py-md'>
 
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lisa <span> Cole</span>
                    </h3>
                    <h4>executive chef</h4>

                    <p> descriere 2 chef</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Alex <span> Deer</span>
                    </h3>
                    <h4>sous chef</h4>

                    <p> descriere 4 chef  </p>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Chefi