import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { StaticImage } from 'gatsby-plugin-image'
//import { Link } from 'gatsby'

const Purposes = () => {
    return (
      <MainDiv>
          <Title>Our Purposes</Title> 
          <Description>Our story has inspire us to form Marketyze and to this day we continue to follow four main purposes to achieve our goals </Description>
          
          <Goaldiv>
              <GoalOutline>
              <ValuesDiv>
                 <StaticImage
                    src= '../../images/Website Graphics - Pioneers.png'
                    alt="pioneers"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "pioneers"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Pioneers</ValuesTitle>
                </ValuesDiv>    
                <PurposeSubtitle>We want to help students grow their skills, abilities and broaden their minds, in order to build the next generation of marketing leaders</PurposeSubtitle>   
              </GoalOutline>

            
              <GoalOutline>
              <ValuesDiv>
                <StaticImage
                    src= '../../images/Website Graphics - Preparation for the future.png'
                    alt="preparation"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "preparation"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Preparation for the Future</ValuesTitle>
                </ValuesDiv>  
                <PurposeSubtitle>We don’t stop at just creating connections — we provide hands-on experience to learn and build marketing skills that will set them apart in university and beyond</PurposeSubtitle>        
              </GoalOutline>
          </Goaldiv>

          <Goaldiv>
              <GoalOutline>
              <ValuesDiv>
                <StaticImage
                    src= '../../images/Website Graphics - Outside the classroom.png'
                    alt="classroom"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "classroom"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Outside the Classroom</ValuesTitle>
                </ValuesDiv>
                <PurposeSubtitle>Our programs are designed to go beyond the Canadian business high school curriculum, directly connecting youth with industry professionals to give them a chance to create valuable connections and provide a unique look into the business and marketing field</PurposeSubtitle>
              </GoalOutline>
  
              <GoalOutline>
              <ValuesDiv>
                <StaticImage
                    src= '../../images/Website Graphics - Not for profit corporation.png'
                    alt="profit"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "profit"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Not-for-profit Corporation</ValuesTitle>
                </ValuesDiv>
                <PurposeSubtitle>We are a federally incorporated not-for-profit corporation that provides marketing opportunities to high school students through free or low-cost virtual challenges and conferences</PurposeSubtitle>          
              </GoalOutline>
          </Goaldiv>

      </MainDiv>
    )
  }
  

const MainDiv = styled.div`
    height: 2300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${colors.white}; 
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1700px) {
        height: 2600px;
    }

    @media screen and (max-width: 800px) {
    {
        height: 2050px;
    }

    @media screen and (max-width: 480px) {
        height: 2250px;
    {
  
  
`
const Title = styled.h1`
      color: ${colors.primaryTeal};
      font-family: 'Lato', sans-serif;
      font-weight: 900;
      font-size: 4.5rem;
      line-height: 1.05em;
      display: flex;
      position: relative;
      width: 1500px;

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
      margin-top: 1rem;
      margin-left: 1rem;
      display: flex;
      position: relative;
      width: 1500px;

      @media screen and (max-width: 1700px) {
        width: 70%;
        left: 2rem;
    }
      

  `

//valuesDiv
const ValuesDiv = styled.div`
    width: 600px;
    height: 400px;
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
    font-size: 1.7rem;
    bottom: 3rem;
    color: white;

    @media screen and (max-width: 800px) {
        top: 10rem;
        font-size: 1.2rem;
    }
`

  

  const Goaldiv = styled.div`
      display: grid; 
      width: 1400px;
      grid-template-columns: 1fr 1fr;
      align-items: center; 
      grid-column-gap: 5rem;
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

      @media screen and (max-width: 480px)
      {     
            bottom: 8rem;
          
      }
  
      
  `
  
  const GoalOutline = styled.div`
      display: flex; 
      flex-direction: column; 
      justify-content: flex-start; 
      align-items: center;
      height: 850px; 
      padding: 50px; 
      position: relative;
      margin-top: 2rem;
      background: ${colors.primaryTeal};
      border-radius: 30px;

     
      @media screen and (max-width: 800px)
      {
        margin-top: 4.5rem;
      }
      
      @media screen and (max-width: 480px)
      {
        padding: 40px;
        margin-top: 9rem;
      }
  `


const PurposeSubtitle = styled.h3`
    color: white;
    font-size: 1.5rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 600px;
    margin-top: 4rem;
    height: 275px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    border-radius: 20px;
    background: ${colors.darkTeal};

    }

    @media screen and (max-width: 800px) {
        width: 400px;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
    }
`
  
  export default Purposes