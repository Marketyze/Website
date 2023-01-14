import React from 'react'
import styled from 'styled-components'
import marketyzeFamily from '../../../images/family.jpg'
import '../../EventsComponents/animationsEvents.css'

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                PITCH IT
                <HeroP>
                    Financial Innovation Competition
                </HeroP>
            </HeroH1>

            {/** mouse scrolling animation */}
            <div id="mouse-scrollEvents">
                <div class="mouseEvents">
                    <div class="mouse-inEvents"></div>
                </div>
            </div>

        </HeroContainer>
        
    )
}

export default HeroSection


const HeroContainer = styled.div`
    background-image: url(${marketyzeFamily});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    height: 65vh;
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.9);
    margin-top: -80px;
`

const HeroH1 = styled.h1`
    font-family: 'Lato', sans-serif;
    color: white;
    font-size: 5rem; 
    text-align: center;
    position: relative;
    top: 15rem;
    padding: 0 1rem;
`

const HeroP = styled.p`
    margin-top: 8px; 
    color: white; 
    font-size: 1.5rem; 
    text-decoration: none;
    margin-top: 1rem;

`

