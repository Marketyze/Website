import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import temporary from '../../images/family.jpg'
import { Link } from 'gatsby'

//four sections similar to the value cards 
//our purpose 
//in order to achieve our goals at Marketyze, we strive to follow these 4 purposes


const Purposes = () => {
    return (
      <MainDiv>
          <Title>Our Purposes</Title> 
          <Description>Our story has inspire us to form Marketyze and to this day we continue to follow four main purposes to achieve our goals </Description>
          
          <Goaldiv>
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>    
                <PurposeSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders.</PurposeSubtitle>   
              </GoalOutline>
  
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>
                <PurposeSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders.</PurposeSubtitle>          
              </GoalOutline>
          </Goaldiv>

          <Goaldiv>
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>
                <PurposeSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders.</PurposeSubtitle>
              </GoalOutline>
  
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>  
                <PurposeSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders.</PurposeSubtitle>        
              </GoalOutline>
          </Goaldiv>

      </MainDiv>
    )
  }
  
//valuesDiv
const ValuesDiv = styled.div`
    width: 550px;
    height: 500px;
    background-image: url(${temporary});
    border-radius: 20px;
`

const ValuesTitle = styled.h1`
    font-family: 'UsualExtraBold', sans-serif;
    position: relative;
    left: 1.5rem;
    font-size: 1.5rem;
    top: 22rem;
`

  
  const Title = styled.h1`
      color: ${colors.primaryTeal};
      font-family: 'UsualExtraBold', sans-serif;
      font-size: 3.4rem;
      line-height: 1.05em;
      margin-top: 0;
      display: flex;
      position: relative;
      left: 27rem;
      width: 50%;

      @media screen and (max-width: 750px) {
          font-size: 7.85vw;
      }
  `
  
  const Description = styled.p`
      color: ${colors.black};
      font-family: 'UsualExtraBold', sans-serif;
      font-size: 1rem;
      line-height: 1.05em;
      margin-top: 1rem;
      display: flex;
      position: relative;
      left: 27rem;
      width: 50%;
      
      @media screen and (max-width: 750px) {
          font-size: 7.85vw;
      }
  `
  
  const MainDiv = styled.div`
      height: 1400px;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      background: 'transparent'; 
      margin-bottom: 0;
  
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
  
  const Goaldiv = styled.div`
      max-width: 1150px; 
      margin: 0 auto; 
      display: grid; 
      grid-template-columns: 1fr 1fr;
      align-items: center; 
      grid-column-gap: 3rem;
      padding: 0 50px;     
      justify-content: center;
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


const PurposeSubtitle = styled.h3`
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
  
//button styling 
const AboutButtonContainer = styled(Link)`
position: relative; 
height: 50px;
width: 250px;
top: 23rem;
left: 1.5rem;
`
  
  
  export default Purposes