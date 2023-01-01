import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
import {StaticImage} from 'gatsby-plugin-image'

const ParagraphSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                Overview
                <HeroP>
                As of 2021, Marketyze hosts three major events a year: in the spring, summer, and winter. Overall, we aim to provide a modern and never-seen-before twist to all our events!                
                </HeroP>

                <HeroP>
                This year, we hosted the Canada Spring Strategy Challenge (CSSC) earlier in April, and we are set to run the Canada Summer Marketing Challenge (CSMC) in July and August.
                </HeroP>

                <HeroP>
                Another Marketyze competition will be occuring during winter. Keep an eye out on our website, social media, and newsletter for more details to come! For now, we invite you to explore our past and upcoming events.                
                </HeroP>
            
                <StaticImage
                src= '../../images/marketyze_logo.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `1050px`, height: `560px`, bottom: '24rem', zIndex: '1', opacity: '0.2'  }}
                />

            </HeroH1>

        </HeroContainer>
        
    )
}

export default ParagraphSection


const HeroContainer = styled.div`
    background: #fff; 
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

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`

