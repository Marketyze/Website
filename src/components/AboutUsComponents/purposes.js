import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import temporary from '../../images/family.jpg'
//import { Link } from 'gatsby'

const Purposes = () => {
    return (
      <MainDiv>
          <Title>Our Purposes</Title> 
          <Description>Our story has inspire us to form Marketyze and to this day we continue to follow four main purposes to achieve our goals </Description>
          
          <Goaldiv>
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Pioneers</ValuesTitle>
                </ValuesDiv>    
                <PurposeSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders</PurposeSubtitle>   
              </GoalOutline>

            
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Preparation for the Future</ValuesTitle>
                </ValuesDiv>  
                <PurposeSubtitle>We don’t stop at just creating connections — we provide hands-on experience to learn and build marketing skills that will set them apart in university and beyond</PurposeSubtitle>        
              </GoalOutline>
          </Goaldiv>

          <Goaldiv>
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Outside the Classroom</ValuesTitle>
                </ValuesDiv>
                <PurposeSubtitle>Our programs are designed to go beyond the Canadian business high school curriculum, directly connecting youth with industry professionals to give them a chance to create valuable connections and provide a unique look into the business and marketing field</PurposeSubtitle>
              </GoalOutline>
  
              <GoalOutline>
              <ValuesDiv>
                    <ValuesTitle>Not-for-profit Corporation</ValuesTitle>
                </ValuesDiv>
                <PurposeSubtitle>We are a federally incorporated not-for-profit corporation that provides marketing opportunities to high school students through free or low-cost virtual challenges and conferences</PurposeSubtitle>          
              </GoalOutline>
          </Goaldiv>

      </MainDiv>
    )
  }
  
//valuesDiv
const ValuesDiv = styled.div`
    width: 550px;
    height: 400px;
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
    top: 21rem;

    @media screen and (max-width: 800px) {
        top: 10rem;
        font-size: 1.2rem;
    }
`

  
  const Title = styled.h1`
      color: ${colors.primaryTeal};
      font-family: 'Lato', sans-serif;
      font-weight: 900;
      font-size: 3.4rem;
      line-height: 1.05em;
      display: flex;
      position: relative;
      left: 27rem;
      width: 50%;

      @media screen and (max-width: 1700px) {
        width: 70%;
        left: 2rem;
    }

     
  `
  
  const Description = styled.p`
      color: ${colors.black};
      font-family: 'Lato', sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.05em;
      margin-top: 2rem;
      display: flex;
      position: relative;
      left: 27rem;
      width: 40%;

      @media screen and (max-width: 1700px) {
        width: 70%;
        left: 2rem;
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
  
        @media screen and (max-width: 1700px) {
            height: 2600px;
        }

        @media screen and (max-width: 800px) {
        {
            height: 2050px;
        }
      
      
  `
  
  const Goaldiv = styled.div`
      margin: 0 auto; 
      display: grid; 
      grid-template-columns: 1fr 1fr;
      align-items: center; 
      grid-column-gap: 5rem;
      padding: 0 50px;     
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
  
  const GoalOutline = styled.div`
      display: flex; 
      flex-direction: column; 
      justify-content: flex-start; 
      align-items: center;
      max-height: 600px; 
      padding: 50px; 
      position: relative;
      margin-top: 2rem;
     
      @media screen and (max-width: 800px)
      {
        margin-top: 4.5rem;
      }
  `


const PurposeSubtitle = styled.h3`
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
  
  export default Purposes