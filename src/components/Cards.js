import React from 'react'
import CardItems from './CardItems'
import '../css/Cards.css'
import Img1 from '../assets/images/img-9.jpg'
import Img2 from '../assets/images/img-2.jpg'
import Img3 from '../assets/images/img-8.jpg'
import Img4 from '../assets/images/img-home.jpg'
import Img5 from '../assets/images/img-3.jpg'

const Cards = () => {
    return (
        <div className="cards ">
            <h1>CheckOut Epic Destinations</h1>
            <div className="cards__container ">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src={Img1}
                        text="Explore the deep waterfall hidden inside the amazon jungle"
                        label="Adventure"
                        path="/services"/>
                        <CardItems 
                        src={Img2}
                        text="Deep dive into the islands of bali"
                        label="Luxury"
                        path="/products"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItems 
                        src={Img3}
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Adrenaline"
                        path="/signUp"/>
                        <CardItems 
                        src={Img4}
                        text="Explore the deep waterfall hidden inside the amazon jungle"
                        label="Mystery"
                        path="/services"/>
                        <CardItems 
                        src={Img5}
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label="luxury"
                        path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
