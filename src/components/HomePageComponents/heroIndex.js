import React from 'react'
import styled from 'styled-components'
import {Link} from "gatsby"
import marketyzeFamily from '../../images/family.jpg'
import './animationsHome.css'

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
            IT'S TIME TO TURN THE TIDE IN MARKETING 
                <HeroP>
                    Marketyze is committed to making education accessible to the next generation of business leaders 
                </HeroP>

                <HeroLink to = '/aboutUs'>
                <a className = 'buttonHome'>Learn More</a>             
                </HeroLink>
            </HeroH1>

            {/** mouse scrolling animation */}
            <a>
                <div id="mouse-scroll">
                    <div class="mouse">
                        <div class="mouse-in"></div>
                    </div>
                    <div>
                        <span class="down-arrow-1"></span>
                        <span class="down-arrow-2"></span>
                        <span class="down-arrow-3"></span>
                    </div>
                </div>
            </a>
        </HeroContainer>
        
    )
}

export default HeroSection


const HeroContainer = styled.div`
    background-image: url(${marketyzeFamily});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    height: 105vh;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.9);
    margin-top: -80px;
`

const HeroH1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');   
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: white;
    font-size: 5rem; 
    width: 40%;
    position: relative;
    right: 14rem;
    top: 3rem;

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
    line-height: 2.5rem;
    width: 55%;
    position: relative;
    left: 0.25rem;
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');   
    font-family: 'Lato', sans-serif;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

const HeroLink = styled(Link)`
`


//button styling