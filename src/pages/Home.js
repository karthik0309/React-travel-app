import React from 'react'
import '../App.css'
import Hero from '../components/Hero'
import Aux from '../components/Aux'
import Cards from '../components/Cards'
const Home = () => {
    return (
        <Aux>
            <Hero/>
            <Cards/>
        </Aux>
    )
}

export default Home
