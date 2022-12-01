import React from 'react'
import './Camere.css'
import cameraDpM from '../../../assests/camera_1.1.png'
import cameraDpSg from '../../../assests/cameraDs.png'


const Camere = () => {
  return (
    <section className=' section sectionCamere'>

        {/* <aside>
            <div> test</div>
        </aside> */}

        <article className='camere-set2'>

            <div className=' img-camera img-camera-st'>
                <img  src={cameraDpM} alt='camera dubla pat matrimonial'>
                </img>
            </div>

            <div className='text-camera'>
                
                <h2 > Camera Dubla</h2>
                <p > Pat matrimonial  160/200 cm </p> 
                <p > Bie proprie</p> 
                <p > Prosoape</p> 
                <p > TV</p> 
                <p > Aer conditionat</p> 
                <p > WiFi</p> 

            </div>
        </article>

        <article className='camere-set2'>

            <div className='text-camera'>
            <h2> Camera Dubla</h2>
                <p> Paturi individuale  120/200 cm </p> 
                <p> Bie proprie</p> 
                <p> Prosoape</p> 
                <p> TV</p> 
                <p> Aer conditionat</p> 
                <p> WiFi</p> 
                </div>

            <div className='img-camera img-camera-dr'>
                <img src={cameraDpSg} alt='camera dubla paturi singl'>
                </img>
            </div>

        </article>

    </section>
  )
}

export default Camere