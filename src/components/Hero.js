import React from 'react'
import Video from '../assets/videos/video-1.mp4'
import Button from './Button'
import '../css/Hero.css'
import '../App.css'

const Hero = () => {
    return (
        <div className="hero-container">
            <video src={Video}  autoPlay loop muted type="video/mp4"/>
            <h1>ADVENURE AWAITS</h1>
            <p>What are u waiting for?</p>
            <div className="hero-bts">
                <Button className="btn" 
                buttonStyle="btn--outline"
                buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btn" 
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                    WATCH TRAILER <i className="fas fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default Hero
