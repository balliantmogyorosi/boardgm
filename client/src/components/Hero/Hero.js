import React from 'react'

import Container from '../Layout/Container/Container'

import './Hero.css'


const Hero = ({ backgroundImage, text, title, }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-gradient">
                <Container className="hero-container">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-text">{text}</p>
                </Container>
            </div>
        </div>
    )
}

export default Hero