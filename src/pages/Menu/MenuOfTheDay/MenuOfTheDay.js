import React from 'react'
import ListItem from '../../../components/ListItem/ListItem'
import ciorba from '../../../assests/ciorba.jpg'
import pui from '../../../assests/pui.jpg'
import './MenuOfTheDay.css'


const menuData = [
    {
        title: 'Flul I, Felul II si Salata',
        description: 'O varietate de ciorbe si supe </br> Fripturi, tocanite,  si specialitati orientale, shaorma ',
        price: '22',
        img: ciorba,
        img2: pui,

    },
    // {
    //     title: 'Pui cu cartofi piure',
    //     description: 'descriere meniu',
    //     price: '9.50',
    //     img: pui,
    // },
];

const MenuOfTheDay = () => {
  return (
    <section className='section'>
        <div className='menu-of-the-day'>
            <h1 className='heading-secondary'>
                <span>meniul </span>zilei
            </h1>
            {menuData.map((data, i) => (
                <ListItem 
                title={data.title} 
                description={data.description}
                price={data.price} 
                itemImage={data.img} 
                itemImage2={data.img2} 

                />
            ))}
        </div>
    </section>
  )
}

export default MenuOfTheDay