import React from 'react'

import Container from '../Layout/Container/Container'

import './Hero.css'


const Hero = ({ backgroundImage, text, title, }) => {

    const renderTitle = () => {
        switch (typeof title) {
            case 'string':
                return (
                    <h1 className="hero-title">{title}</h1>
                )
            case 'function':
                return title()
            default: return null
        }
    }

    return (
        <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-gradient">
                <Container className="hero-container">
                    {renderTitle()}
                    <p className="hero-text">{text}</p>
                </Container>
            </div>
        </div>
    )
}

export default Hero