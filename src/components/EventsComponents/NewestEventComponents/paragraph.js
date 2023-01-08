import React from 'react'
import styled from 'styled-components'
import {colors} from '../../globals/colors.js'
import {StaticImage} from 'gatsby-plugin-image'

const ParagraphSection = () => {
    return (
    
    <EventParagraphContainer>
        <HeroContainer>
            <HeroH1>
                Event Overview
                <HeroP>
                PITCH IT is a tech-based marketing competition occurring during winter . In 2023, PITCH IT will be hosted on February 14, 2023. This year we are super excited to be hosting this brand new event.
                </HeroP>

                <HeroP>
                In teams of 4 at PITCH IT, participants will: 
                <br/> &nbsp;&nbsp; •&nbsp;&nbsp;Build their own digital marketing strategy
                <br/> &nbsp;&nbsp; •&nbsp;&nbsp;React to prompts simulating real-world business problems
                <br/> &nbsp;&nbsp; •&nbsp;&nbsp;Pitch the evolution of their startups to judges
                </HeroP>

                <HeroP>
                Another Marketyze competition will be occuring again this year! Keep an eye out on our website and social media for more details to come! For now, we invite you to explore our past and upcoming events.                
                </HeroP>
            
                <StaticImage
                src= '../../images/marketyze_logo.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `1050px`, height: `560px`, bottom: '23.25rem', zIndex: '1', opacity: '0.2'  }}
                />

            </HeroH1>
        </HeroContainer>

            
         <EligibilityContainer>
            <EligibilityH1>
                Eligibility
                <EligibilityP> We are looking for high school students who are...</EligibilityP>
                <EligibilityP> 
                <br/> &nbsp;&nbsp; •&nbsp;&nbsp;Interested in marketing, entrepreneurship, finance, or business
                <br/> &nbsp;&nbsp; •&nbsp;&nbsp;Excited to hone in on core skills required for business presentations, reports and pitches
                <br/> &nbsp;&nbsp; •&nbsp;&nbsp;Looking for hands-on opportunities over the summer to enrich your business experiences
                </EligibilityP>
            </EligibilityH1>
        </EligibilityContainer>

    </EventParagraphContainer>
       
    
    )
}

export default ParagraphSection

const EventParagraphContainer = styled.div`
    background: #fff;
    flex-direction: column;
    display: flex;
    height: 700px; 
    width: 100%;
`

const HeroContainer = styled.div`
    background: #fff; 
    display: flex; 
    height: 375px;
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
const EligibilityContainer = styled.div`
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
`
const EligibilityH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: ${colors.primaryTeal};
    font-size: 2rem;
    margin-top: 8rem;
    position: relative;
    right: 3rem;
`

const EligibilityP = styled.p`
    width: 50vw;
    color: black;
    position: relative;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-decoration: none;

`
