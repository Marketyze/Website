import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'


//ADD COUNT UP NUMBER FOR BACKGROUND 

const MarketyzeEvents = () => {
  return (
    <MainDiv>
        <Title>Ready to Make an Impact?</Title> 
        <Description>Every year, more than 100 competitors from all over the world come to join Marketyze's events</Description>
        <Description>This year is no different, therfore we are exicted to introduce our new event this year: PITCH IT</Description>
        
        <Goaldiv>
                <StaticImage
                    src= '../../images/family.jpg'
                    loading="eager"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    width={700}
                    placeholder="transparent"
                    style={{position: `relative`, border: `1px transparent`, borderRadius: `20px`, zIndex: '2', top: '4rem'}}/>
        </Goaldiv>

        <BackgroundNumber>100+</BackgroundNumber>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: #fcfcfc; 

    @media screen and (max-width: 1000px)
    {
        height: 1260px; 
    }
    @media screen and (max-width: 768px)
    {
        height: 1350px; 
    }
    @media screen and (max-width: 480px)
    {
        /* height: 900px;  */
    }
`

const BackgroundNumber = styled.div`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 700px;
    text-align: center;
    position: relative;
    bottom: 45rem;
    z-index: 1;
    opacity: 0.2;
    `

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    display: block;
    position: relative;
    top: 10rem;
    z-index: 99;
    text-align: center;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 1.5rem;
    margin-top: 1rem;
    display: block;
    text-align: center;
    position: relative;
    top: 10rem;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Goaldiv = styled.div`
    max-width: 1150px; 
    margin: 0 auto; 
    display: flex; 
    align-items: center; 
    padding: 0 50px;     
    justify-content: center;\
    position: relative;
    top: 10rem;
    @media screen and (max-width: 1150px)
    {
        grid-column-gap: 3rem;
    }
    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px){
        margin-top: 1rem;
        position: relative;
        top: 5%;
    }   
`

export default MarketyzeEvents