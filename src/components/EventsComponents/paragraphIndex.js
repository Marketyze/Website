import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
//import {StaticImage} from 'gatsby-plugin-image'

const ParagraphSection = () => {
    return (
        
        <HeroContainer>
            
           

            <HeroH1>
                Overview
                <TextContainer>
                    <HeroP>
                    As of 2021, Marketyze hosts three major events a year: in the spring, summer, and winter. Overall, we aim to provide a modern and never-seen-before twist to all our events!                
                    </HeroP>

                    <HeroP>
                    This year, we hosted the Canada Spring Strategy Challenge (CSSC) earlier in April, and we are set to run the Canada Summer Marketing Challenge (CSMC) in July and August.
                    </HeroP>

                    <HeroP>
                    Another Marketyze competition will be occuring during winter. Keep an eye out on our website, social media, and newsletter for more details to come! For now, we invite you to explore our past and upcoming events.                
                    </HeroP>
                </TextContainer>
                
            </HeroH1>

        </HeroContainer>
        
    )
}

export default ParagraphSection


const HeroContainer = styled.div`
    background: ${colors.white};
    height: 900px;
    width: 100%;
    display: flex; 
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
    font-size: 4.5rem; 
    z-index: 2;
    font-weight: 900;
    position: relative;
    margin-top: 7rem;

    @media screen and (max-width: 768px) {
        right: 0rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1500px;
    height: 450px; 
    margin-top: 3rem;
    background: ${colors.primaryTeal};
    border-radius: 30px;
`

const HeroP = styled.p`
    width: 1300px;
    color: white; 
    position: relative;
    font-size: 2rem; 
    margin-top: 2rem;
    text-decoration: none;
    z-index: 2;
    font-weight: 400;

    a{
        text-decoration: none;
        color: ${colors.darkTeal};
    }

    @media screen and (max-width: 768px) {
        left: 0rem;
        width: 80vw;
    }
`