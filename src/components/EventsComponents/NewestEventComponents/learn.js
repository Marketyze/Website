import React from 'react'
import styled from "styled-components"
import {colors} from '../../globals/colors.js'
import temporary from '../../../images/family.jpg'

const Learn = () => {
  return (
    <MainDiv>
        <Title>What you could learn?</Title> 
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


    </MainDiv>
  )
}

//main div
const MainDiv = styled.div`
    height: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: 'transparent'; 
    margin-bottom: 0;

    @media screen and (max-width: 1700px) {
        height: 3500px;
    }

    @media screen and (max-width: 1400px) {
        height: 3400px;
    }

    @media screen and (max-width: 800px) {
        height: 2700px;
    }

    `
//title/desc for values
const Title = styled.h1`
color: ${colors.primaryTeal};
font-family: 'Lato', sans-serif;
font-weight: 900;
font-size: 3.4rem;
line-height: 1.05em;
display: flex;
position: relative;
left: 25.5rem;
width: 50%;

@media screen and (max-width: 1700px) {
  width: 70%;
  left: 2rem;
}


`
const Description = styled.div`
color: ${colors.black};
font-family: 'Lato', sans-serif;
font-size: 1.5rem;
font-weight: 400;
line-height: 1.05em;
margin-top: 2rem;
display: flex;
position: relative;
left: 26rem;
width: 40%;

@media screen and (max-width: 1700px) {
  width: 70%;
  left: 2rem;
}


`

//valuesDiv
const ValuesDiv = styled.div`
    width: 400px;
    height: 350px;
    background-image: url(${temporary});
    border-radius: 20px;


    @media screen and (max-width: 800px) {
        width: 300px;
        height: 200px;
    }
`

const ValuesTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    position: relative;
    left: 1.5rem;
    font-size: 1.5rem;
    top: 19rem;

    @media screen and (max-width: 800px) {
        top: 10rem;
        font-size: 1.2rem;
    }
    `

//styling for values and impact
const Goaldiv = styled.div`
margin: 0 auto; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
align-items: center; 
padding: 0 40px;     
justify-content: center;


@media screen and (max-width: 1700px)
{
    grid-template-columns: 1fr; 
}

@media screen and (max-width: 800px)
{     
      right: 0.6rem;
      position: relative;
      width: 350px;
    
}


`


const GoalSubtitle = styled.h3`
    color: black;
    font-size: 1.2rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 500px;
    top: 1rem;
    height: 50px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;

    }

    @media screen and (max-width: 800px) {
        width: 400px;
    }
    `

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;
    max-height: 600px; 
    padding: 20px; 
    position: relative;
    margin-top: 2rem;

    @media screen and (max-width: 800px)
    {
    margin-top: 4.5rem;
    }
    `

export default Learn