import React from 'react'
import styled from 'styled-components'
import marketyzeFamily from '../../images/family.jpg'
import './animationsAboutUs.css'

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                About Marketyze
                <HeroP>
                    Empowering youth across the globe 
                </HeroP>

        
            </HeroH1>

            {/** mouse scrolling animation */}
            <div id="mouse-scrollAboutUs">
                    <div class="mouseAboutUs">
                        <div class="mouse-inAboutUs"></div>
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
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.9);
    margin-top: -80px;
`

const HeroH1 = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 5rem; 
    text-align: center;
    position: relative;
    top: 15rem;

    @media screen and (max-width: 960px) {
        font-size: 70px;
    }

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`

const HeroP = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: white; 
    font-size: 1.5rem; 
    text-decoration: none;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

