import React from 'react';
import './HS.css'
import {Button} from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

export function HeroSection() {
    return (
        <div className="hero-container">

                <video src="/video-2.mp4"
                autoPlay loop muted>                
                </video>        

                
            <h1>ADVENTURE AWAITS</h1>
            <p>Whats are you waiting for?</p>
            <div className="hero-btns">
            <Button className="btn" buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED
            </Button>
            

            <Button className="btn" buttonStyle='btn--primary'
            buttonSize='btn--large'>WATCH TRAILER
            <FontAwesomeIcon icon={faPlayCircle}/>
            </Button>

            </div>
        </div>
    )
}

export default HeroSection
