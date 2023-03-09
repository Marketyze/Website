import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'

const PrevEvents = () => {
  return (
    <MainDiv>
        <Title>Our Previous Events</Title> 
        <Description>While they might be over, still check our some of our previous events that we have held!</Description>
        
        <Goaldiv>
            <GoalOutline>

                 <StaticImage
                    src= '../../images/gsmc.png'
                    alt="gsmc"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "gsmc"
                    imgStyle = {{borderRadius: '15px'}}
                    quality = {100}
                />  
                <GoalSubtitle>Bringing Esports to schools to allow students a chance to experience an industry growing with potential.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>

                <StaticImage
                    src= '../../images/gfm.png'
                    alt="gfm"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "gfm"
                    imgStyle = {{borderRadius: '15px'}}
                    quality = {100}
                    />  
                <GoalSubtitle>Allowing students to see and experience the different career opportunities they have in Esports.</GoalSubtitle>
            </GoalOutline>

        </Goaldiv>


    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 1100px;
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    background: ${colors.white};; 

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

const GoalSubtitle = styled.h3`
    color: black;
    font-size: 1rem;
    line-height: 1.5em;
    position: absolute;
    text-align: center;
    width: 250px;
    font-family: 'UsualRegular', sans-serif;
    @media screen and (max-width: 1000px)
    {
        width: 50%;
    }
    @media screen and (max-width: 650px)
    {
        width: 70%;
    }
    @media screen and (max-width: 450px)
    {
        width: 80%;
    }
`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-size: 4.5rem;
    line-height: 1.05em;
    font-weight: 900;
    width: 1500px;

   
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    line-height: 1.05em;
    margin-top: 1rem;
    width: 1500px;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Goaldiv = styled.div`
    width: 1500px; 
    height: 775px;
    display: flex; 
    flex-direction: row;
    gap: 2rem;
    margin-top: 4rem;
    position: relative;
    align-items: center; 
    justify-content: center;
    background: ${colors.lightTeal};
    border-radius: 30px;

   
`

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 700px;
    height: 700px;
    position: relative;

    @media screen and (max-width: 1150px)
    {
        width: 250px;
    }
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
`



export default PrevEvents