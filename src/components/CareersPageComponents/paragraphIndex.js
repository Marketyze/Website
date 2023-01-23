import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
//import { StaticImage } from 'gatsby-plugin-image'

const ParagraphSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                JOIN THE TEAM
                <HeroP>
                    At Marketyze, we believe that students deserve to have the chance to further their interest in business. Our mission is to create innovative virtual challenges, workshops, and events for youth to prepare them in pursuing a path in the business field, especially in marketing.  
                </HeroP>

                <HeroP>
                    Become a part of our team, where we are pioneers in providing accessible marketing opportunities to youth across the world. The talents of today’s youth will be needed in the business world of tomorrow!
​                </HeroP>

                <HeroP>         
                    Pro tip: to learn more about the culture at Marketyze and what we can do for you, please check out our brand-new Notion Careers Page! Since all of our currently open positions are part of our ongoing recruitment process, positions will be removed from the hiring package and the application form once they are filled. Don’t miss out on your chance to join us at Marketyze!
                </HeroP>
            </HeroH1>

            {/*
            <StaticImage
                src= '../../images/marketyze_logo.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                width = {900}
                alt=""
                placeholder="transparent"
                style={{height: `560px`, zIndex: '2',bottom: '2rem', opacity: '0.2'  }}
                />
            */}


        </HeroContainer>
        
    )
}

export default ParagraphSection


const HeroContainer = styled.div`
    background: white;
    height: 70vh;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    flex-direction: column;


    @media screen and (max-width: 1000px) {
        height: 100vh;
    }

    @media screen and (max-width: 480px) {
        height: 1200px;
    }

`

const HeroH1 = styled.h1`
    color: ${colors.primaryTeal};
    font-size: 3rem; 
    margin-top: 8rem;
    z-index: 2;
    font-weight: 900;
    position: relative;
    right: 4rem;

    @media screen and (max-width: 768px) {
        right: 0rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
    }
`

const HeroP = styled.p`
    width: 50vw;
    color: black; 
    position: relative;
    font-size: 1.5rem; 
    margin-top: 2rem;
    text-decoration: none;
    z-index: 2;
    font-weight: 400;
    left: 4rem;

    @media screen and (max-width: 768px) {
        left: 0rem;
        width: 80vw;
    }
`

