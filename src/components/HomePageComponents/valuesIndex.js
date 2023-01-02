import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import temporary from '../../images/family.jpg'

const Values = () => {
  return (
    <MainDiv>
        <Title>Why Marketyze?</Title> 
        <Description>We believe in empowering young students using our three main values.</Description>
        
        <Goaldiv>
            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>
                <GoalSubtitle>We aim to provide youth with the opportunities, tools, and resources they need to build skills in marketing, and stay competitive for a career in it.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Personal Growth</ValuesTitle>
                </ValuesDiv>
                <GoalSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Accessibility</ValuesTitle>
                </ValuesDiv>
                <GoalSubtitle>We believe that youth shouldn’t have to break the bank for a comprehensive and meaningful business education pre-undergrad.</GoalSubtitle>
            </GoalOutline>
        </Goaldiv>

        <GoaldivImpact>
            <GoalOutlineImpact>
                <GoaltitleImpact>1700+</GoaltitleImpact>
                <GoalSubtitleImpact>Youths reached across the world.</GoalSubtitleImpact>
            </GoalOutlineImpact>

            <GoalOutlineImpact>
                <GoaltitleImpact>55+</GoaltitleImpact>
                <GoalSubtitleImpact>Total volunteers with Marketyze</GoalSubtitleImpact>
            </GoalOutlineImpact>

        </GoaldivImpact>

    </MainDiv>
  )
}

//main div
const MainDiv = styled.div`
    height: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
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
//title/desc for values
const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    display: flex;
    position: relative;
    top: 3rem;
    margin-left: 10rem;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`
const Description = styled.div`
    color: ${colors.black};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 1.5rem;
    position: relative;
    top: 3rem;
    margin-left: 10rem;
    width: 70%;
    font-weight: bold;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

//valuesDiv
const ValuesDiv = styled.div`
    width: 450px;
    height: 450px;
    background-image: url(${temporary});
    border-radius: 20px;
`

const ValuesTitle = styled.h1`
    font-family: 'UsualExtraBold', sans-serif;
    position: relative;
    top: 20rem;
    left: 1.5rem;
    font-size: 1.5rem;
`

//styling for values and impact
const Goaldiv = styled.div`
    max-width: 1150px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 17.5rem;     
    justify-content: center;
    position: relative;
    top: 6rem;
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

const GoaldivImpact = styled.div`
    font-family: 'UsualExtraBold', sans-serif;
    max-width: 1150px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 9rem;     
    justify-content: center;
    position: relative;
    top: 6rem;
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

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;
    max-height: 600px; 
    width: 300px;
    height: 700px;
    padding: 50px; 
    @media screen and (max-width: 1150px)
    {
        width: 250px;
    }
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
`

const GoalSubtitle = styled.h3`
    color: black;
    font-size: 1rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 250px;
    top: 3rem;
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

const GoalOutlineImpact = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;
    max-height: 600px; 
    width: 300px;
    height: 700px;
    padding: 50px; 
    position: relative;
    top: 7rem;
    @media screen and (max-width: 1150px)
    {
        width: 250px;
    }
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
`

const GoaltitleImpact = styled.h1`
    color: black;
    font-size: 4rem;
    position: absolute;
    text-align: center;
    justify-content: center;
`

const GoalSubtitleImpact = styled.h3`
    color: ${colors.primaryTeal};
    font-size: 2rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 250px;
    top: 6rem;
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

export default Values