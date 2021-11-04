import React from 'react'

import './Hero.css'


const Hero = ({ backgroundImage, text, title, }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-text">{text}</p>
            </div>
        </div>
    )
}

export default Hero