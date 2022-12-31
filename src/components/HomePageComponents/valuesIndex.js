import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'


const Values = () => {
  return (
    <MainDiv>
        <Title>Why Marketyze?</Title> 
        <Description>As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was. At that moment, she comprehended what it was and where it was heading, and she knew her life would never be the same.</Description>
        
        <Goaldiv>
            <GoalOutline>
                <GoalIcon/>
                <Goaltitle>Youth Empowerment</Goaltitle>
                <GoalSubtitle>We aim to provide youth with the opportunities, tools, and resources they need to build skills in marketing, and stay competitive for a career in it.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <GoalIcon/>
                <Goaltitle>Personal Growth</Goaltitle>
                <GoalSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <GoalIcon/>
                <Goaltitle>Accessibility</Goaltitle>
                <GoalSubtitle>We believe that youth shouldn’t have to break the bank for a comprehensive and meaningful business education pre-undergrad.</GoalSubtitle>
            </GoalOutline>
        </Goaldiv>

        <TitleImpact>Our Impact</TitleImpact> 

        <GoaldivImpact>
            <GoalOutline>
                <Goaltitle>1700+</Goaltitle>
                <GoalSubtitle>Youths reached across the world.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <Goaltitle>55+</Goaltitle>
                <GoalSubtitle>Total volunteers with Marketyze</GoalSubtitle>
            </GoalOutline>

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
    margin-top: 0;
    display: block;
    text-align: center;
    position: relative;
    top: 3rem;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`
const Description = styled.div`
    color: ${colors.black};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 1.5rem;
    position: relative;
    margin: auto;
    text-align: center;
    width: 70%;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`
//title for impact
const TitleImpact = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    margin-top: 0;
    display: block;
    text-align: center;
    position: relative;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

//styling for values and impact
const Goaldiv = styled.div`
    max-width: 1150px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 9rem;     
    justify-content: center;
    position: relative;
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
    max-width: 1150px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 9rem;     
    justify-content: center;
    position: relative;
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
    height: 400px;
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

const GoalIcon = styled.img`
    display: flex;
    align-items: center;
    height: 150px; 
    width: 150px; 
    margin-bottom: 10px; 
`

const Goaltitle = styled.h1`
    color: black;
    font-size: 1.5rem;
    position: absolute;
    margin-top: 9rem;
    text-align: center;
    justify-content: center;
`

const GoalSubtitle = styled.h3`
    color: black;
    font-size: 1rem;
    line-height: 1.5em;
    position: absolute;
    text-align: center;
    width: 250px;
    margin-top: 13rem;
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