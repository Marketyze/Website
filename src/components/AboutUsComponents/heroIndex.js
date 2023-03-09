import React from 'react'
import styled from 'styled-components'
import marketyzeFamily from '../../images/aboutUsFamily.jpg'
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
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.82);
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
    padding: 0 1rem;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
        top: 13rem;
    }

   

`

const HeroP = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: white; 
    font-size: 1.5rem; 
    text-decoration: none;
    margin-top: 1rem;
`
