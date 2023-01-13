import React from 'react'
import styled from 'styled-components'
import {colors} from '../../globals/colors.js'
//import {StaticImage} from 'gatsby-plugin-image'

const Faq = () => {
    return (
        <HeroContainer>
            <HeroH1>
                Frequently Asked Questions              
                <HeroP>
                Is it free to compete in the GTMC?
                <br/> Yes, there are no costs involved to participate in the GTMC. Marketyze’s mission is to provide accessible opportunities for all youth.
                </HeroP>

                <HeroP>
                What does it mean to be a self-paced competition?                
                <br/> The majority of the competition can be completed based on you and your team’s discretion! You set the pace for how and when to work. Other than major events like the Opening Ceremony, the Awards Ceremony, and workshops, everything can occur asynchronously.
                </HeroP>

                <HeroP>
                Do I need prior entrepreneurship experience to participate in the GTMC?
                <br/> No. The GTMC is open to competitors of all levels. There will be guest speakers, and mentors to assist participants in creating and building on a startup company.
                </HeroP>

                <HeroP>
                Can I compete in the GTMC if I am not located in Canada?
                <br/> The GTMC will be a fully virtual event, so international students are more than welcome to compete. All participants will receive information packages shortly before the competition begins, where a detailed schedule with exact timings of each activity will be contained.
                </HeroP>       
        
            </HeroH1>
        </HeroContainer>       
    
    )
}

export default Faq

const HeroContainer = styled.div`
    background: #fff; 
    display: flex; 
    height: 800px;
    justify-content: center;
`

const HeroH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: ${colors.primaryTeal};
    font-size: 2rem; 
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