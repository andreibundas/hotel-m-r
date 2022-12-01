import React from 'react'
import "./LunchTime.css"
import ListItem from '../../../components/ListItem/ListItem'
import ciorba from '../../../assests/ciorba.jpg'
import cotletPorc from '../../../assests/stake.jpg'
import somon from '../../../assests/somon.jpg'
import ciorbaPerisoare from '../../../assests/ciorbaPerisoare.png'
import ciorbaDeBurta from '../../../assests/ciorbaDeBurta.png'
import babGulyas from '../../../assests/babGulyas.png'





const menuDataLeft = [
    {
        title: 'Ciorba de vacuta',
        description: ' carne de vita/porc, cartofi, morcovi, telina, fasole verde,mazare, patrunjel  ',
        price: '17 Lei',
        img: ciorba,
    },
    {
        title: 'Ciorba de perisoare',
        description: 'descriere friptura pui',
        price: '16 Lei',
        img: ciorbaPerisoare,
    },
];

const menuDataRight = [
    {
        title: 'Ciorba de burta',
        description: 'descriere ',
        price: '17',
        img: ciorbaDeBurta,
    },
    {
        title: 'Bab gulyas ',
        description: 'descriere antricot vita',
        price: '16',
        img: babGulyas,
    },
 
];


const LunchTime = () => {
  return (
    <section className=' section lunchtime'>
        <h1 className='heading-secondary'>
         <span>supe & ciorbe</span>
        </h1>

        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data, i) => (
                    <ListItem
                    title={data.title} 
                    description={data.description}
                    price={data.price}  
                    itemImage={data.img}
                    />
                ))}
            </div>

            <div>
                {menuDataRight.map((data, i) => (
                    <ListItem
                    title={data.title} 
                    description={data.description}
                    price={data.price}
                    itemImage={data.img}

                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default LunchTime