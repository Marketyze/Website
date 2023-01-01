import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'

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

                <StaticImage
                src= '../../images/marketyze_logo.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `1050px`, height: `560px`, bottom: '26rem', zIndex: '1', opacity: '0.2'  }}
                />

            </HeroH1>

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
    text-align: center;
    

`

const HeroH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: ${colors.primaryTeal};
    font-size: 2rem; 
    text-align: center;
    margin-top: 8rem;
    z-index: 2;

    @media screen and (max-width: 960px) {
        font-size: 70px;
    }

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`

const HeroP = styled.p`
    width: 50vw;
    color: black; 
    position: relative;
    font-size: 1.2rem; 
    margin-top: 2rem;
    text-decoration: none;
    z-index: 2;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

