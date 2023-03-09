import React from 'react'
import styled from 'styled-components'
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'

const Marketing = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                <Title>Marketing</Title>

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
                            <JobName>Melody Pan</JobName>
                            <JobTitle>CMO (Chief Marketing Officer)</JobTitle>
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
                            <JobName>Adele Feng</JobName>
                            <JobTitle>SAP (Senior Associate, Promotions)</JobTitle>
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
                            <JobName>Terry Pham</JobName>
                            <JobTitle>AP (Associate, Promotions)</JobTitle>
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
                        <JobName>Emily Ye</JobName>
                        <JobTitle>SAD (Senior Associate, Design)</JobTitle>
                    </JobDiv>
                </ProfileContainer>


            </RestofTeam>

            <RestofTeam>

                <ProfileContainer>
                        <StaticImage
                                src= '../../images/hot.jpg'
                                alt="hot"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "hot"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Parum Patel</JobName>
                            <JobTitle>AD (Associate, Design)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>

                    <ProfileContainer>
                        <StaticImage
                                src= '../../images/hot.jpg'
                                alt="hot"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "hot"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Cathy Zhou</JobName>
                            <JobTitle>AD (Associate, Design)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>

                    <ProfileContainer>
                        <StaticImage
                                src= '../../images/hot.jpg'
                                alt="hot"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "hot"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Parmida Talebi</JobName>
                            <JobTitle>APR (Associate, Public Relations)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>

            </RestofTeam>

            <RestofTeam>

                <ProfileContainer>
                        <StaticImage
                                src= '../../images/hot.jpg'
                                alt="hot"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                className = "hot"
                                imgStyle = {{borderRadius: '10px'}}
                            />  
                        
                        <JobDiv>
                            <JobName>Shekainah Bag-ao</JobName>
                            <JobTitle>APR (Associate, Public Relations)</JobTitle>
                        </JobDiv>
                    </ProfileContainer>

            </RestofTeam>

        </HeroContainer>
        
    )
}

export default Marketing


const HeroContainer = styled.div`
    background: ${colors.white};
    height: 2350px;
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
    width: 450px;
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