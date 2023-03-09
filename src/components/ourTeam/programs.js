import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'

const Programs = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                <Title>Programs</Title>

                <MainTextContainer>

                    <TextContainer>
                        <HeroP>
                            At Marketyze, we believe that students deserve to have the chance to further their interest in business. Our mission is to create innovative virtual challenges, workshops, and events for youth to prepare them in pursuing a path in the business field, especially in marketing.  
                        </HeroP>

                        <HeroP>
                            Learn more about our team by clicking on any of our profiles! We are pioneers in providing accessible marketing opportunities to youth across the world. The talents of today’s youth will be needed in the business world of tomorrow!
        ​                </HeroP>
                    </TextContainer>


                    <ProfileContainer>
                        <StaticImage
                                src= '../../images/CEO.jpg'
                                alt="ceo"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "ceo"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Julia Xu</JobName>
                            <JobTitle>CDO (Chief Development Officer)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>

                </MainTextContainer>

            </HeroH1>

            <RestofTeam>

                    <ProfileContainer>
                        <StaticImage
                                src= '../../images/CEO.jpg'
                                alt="ceo"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "ceo"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Enoch Chan</JobName>
                            <JobTitle>SDP (Senior Director, Programs)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>

                    <ProfileContainer>
                        <StaticImage
                                src= '../../images/CEO.jpg'
                                alt="ceo"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "ceo"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Miranda Su</JobName>
                            <JobTitle>DP (Director, Programs)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>    

                    <ProfileContainer>
                    <StaticImage
                            src= '../../images/CEO.jpg'
                            alt="ceo"
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            className = "ceo"
                            imgStyle = {{borderRadius: '10px'}}
                        />  
                    
                    <JobDiv>
                        <JobName>Kristy Szeto</JobName>
                        <JobTitle>DP (Director, Programs)</JobTitle>
                    </JobDiv>
                </ProfileContainer>
            </RestofTeam>

        </HeroContainer>
        
    )
}

export default Programs


const HeroContainer = styled.div`
    background: ${colors.white};
    height: 1300px;
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
    margin-top: 9rem;

    @media screen and (max-width: 768px) {
        right: 0rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
    }
`

const Title = styled.div`
    color: white;
    background: ${colors.darkTeal};
    border-radius: 20px;
    width: 400px;
    display: flex;
    justify-content: center;
`

const MainTextContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1100px;
    height: 300px; 
    margin-top: 3rem;
    background: ${colors.white};
`

const HeroP = styled.p`
    width: 1000px;
    color: ${colors.primaryTeal}; 
    position: relative;
    font-size: 2rem; 
    margin-top: 2rem;
    text-decoration: none;
    z-index: 2;
    font-weight: 400;


    @media screen and (max-width: 768px) {
        left: 0rem;
        width: 80vw;
    }
`



//job desc styling 

const ProfileContainer = styled.div`
    position: relative;
    right: 4rem;
`

const JobDiv = styled.div`
    position: relative;
    bottom: 5rem;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:before {
        background: ${colors.white}; 
        border-radius: 0px 0px 10px 10px;
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.6;
    }
`

const JobName = styled.h1`
    font-size: 2rem;
    color: black;
    z-index: 2;
    font-weight: 400;
    

`

const JobTitle = styled.h2`
    font-size: 1.2rem;
    color: black;
    z-index: 2;
    font-weight: 700;

   
`
    
const RestofTeam = styled.div`
    display: flex;
    margin-left: 4rem;
    gap: 5rem;
    flex-direction: row;
`