import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'

const ParagraphSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                EXPERIENCE THE TASKS
                <HeroP>
                At Marketyze, we believe that students deserve to have the chance to further their interest in business. Our mission is to create innovative virtual challenges, workshops, and events for youth to prepare them in pursuing a path in the business field, especially in marketing.
                </HeroP>

                <HeroP>
                Now, some of you might be confused as to what team you want to be a part of or, you might just not have the required time to work as a Marketyze member. This is where the new MAP and MIP programs come in!
                </HeroP>

                <HeroP>
                To view role descriptions, please scroll down below where you'll be redirected to the related pages. All high school and undergraduate students are welcome to apply, regardless of location (remote positions).                </HeroP>

                <HeroP>
                Pro tip: apply soon! Since all of our currently open positions are part of our ongoing recruitment process, positions will be removed once they are filled. Don’t miss out on your chance to join us at Marketyze!                </HeroP>

                <StaticImage
                src= '../../images/marketyze_logo.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `1050px`, height: `560px`, bottom: '32rem', zIndex: '1', opacity: '0.2'  }}
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

