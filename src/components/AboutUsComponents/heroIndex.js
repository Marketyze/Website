import React from 'react'
import styled from 'styled-components'
import marketyzeFamily from '../../images/family.jpg'

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                About Marketyze
                <HeroP>
                    Uniting across the nation
                </HeroP>
            </HeroH1>

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
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.76);
    margin-top: -80px;
`

const HeroH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 5rem; 
    margin-top: 0px; 
    text-align: center;

    @media screen and (max-width: 960px) {
        font-size: 70px;
    }

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`

const HeroP = styled.p`
    margin-top: 8px; 
    color: white; 
    font-size: 1.5rem; 
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

