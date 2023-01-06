import React from 'react'
import styled from 'styled-components'
//import {Link} from "gatsby"
import marketyzeFamily from '../../images/family.jpg'
//import {colors} from '../globals/colors.js'
import './animationsHome.css'

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                GET AHEAD OF THE COMPETITION
                <HeroP>
                    Marketyze is committed to preparing the next generation of young adults for the future
                </HeroP>

                <a href = '/' className = 'buttonHome'>Learn More</a>             

            </HeroH1>

            {/** mouse scrolling animation */}
            <a href="/aboutUs">
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
    height: 100vh;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.88);
    margin-top: -80px
`

const HeroH1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');    
    font-weight: 400;    
    font-family: "Quicksand", sans-serif;
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
    left: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`


//button styling