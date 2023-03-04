import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import CountUp from 'react-countup';
import { StaticImage } from 'gatsby-plugin-image';
const Values = () => {
  
  return (
    <MainDiv>
        <Title>Why Marketyze?</Title> 
        <Description>We continue to drive our mission through our three main values</Description>
        
        <Goaldiv>
            <GoalOutline>
                <ValuesDiv>
                <StaticImage
                    src= '../../images/Website Graphics - Accessibility.png'
                    alt="Accessibility"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "accessibility"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Acessibility</ValuesTitle>
                </ValuesDiv>

                <ValueSubDiv>
                    <GoalSubtitle>At Marketyze, we don't want students to break the bank in order to build their network, learn new skills and participate in one-of-a-kind opportunities</GoalSubtitle>
                </ValueSubDiv>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                <StaticImage
                    src= '../../images/Website Graphics - Growth.png'
                    alt="Growth"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "growth"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Foster Personal Growth</ValuesTitle>
                </ValuesDiv>

                <ValueSubDiv>
                    <GoalSubtitle>At Marketyze, we encourage our team members to become stronger versions of themselves day by day. Strengthen the people; strengthe the organization</GoalSubtitle>
                </ValueSubDiv>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                <StaticImage
                    src= '../../images/Website Graphics - Quality Everytime.png'
                    alt="Quality"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    className = "quality"
                    imgStyle = {{borderRadius: '20px'}}
                    quality = {100}
                    />  
                    <ValuesTitle>Quality Every Time</ValuesTitle>
                </ValuesDiv>

                <ValueSubDiv>
                    <GoalSubtitle>It is core to our culture to prioritize quality over efficiency. From project to project and team to team, we ensure that quality is there first before implementing efficiency next</GoalSubtitle>
                </ValueSubDiv>
            </GoalOutline>
        </Goaldiv>

        <GoaldivImpact>

            <GoalOutlineImpact>
                <GoalTitleImpactTogether><GoaltitleImpact end={1700} />+</GoalTitleImpactTogether>
                <GoalSubtitleImpact>Youths reached across the world</GoalSubtitleImpact>
            </GoalOutlineImpact>

            <GoalOutlineImpact>
            <GoalTitleImpactTogether><GoaltitleImpact end = {55}/>+</GoalTitleImpactTogether>
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
    align-items: center;
    flex-direction: column;
    background: #F8FCFF; 

    @media screen and (max-width: 1200px)
    {
        height: 2400px; 
    }

    @media screen and (max-width: 1000px)
    {
        height: 2800px; 
    }

    @media screen and (max-width: 480px)
    {
        height: 2600px;
    {

`
//title/desc for values
const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 4.5rem;
    display: flex;
    position: relative;
    top: 1rem;
    width: 1600px;
    margin-top: 4rem;



    @media screen and (max-width: 1000px) {
        margin-left: 5rem;
    }

    @media screen and (max-width: 480px) {
        margin-left: 2.5rem;
    }

`
const Description = styled.div`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    position: relative;
    top: 2rem;
    width: 1600px;
    margin-left: 1rem;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
        margin-left: 5.5rem;
    }

    @media screen and (max-width: 480px) {
        margin-left: 2.6rem;
    }
    
`

//valuesDiv
const ValuesDiv = styled.div`
    width: 400px;
    height: 300px;
    border-radius: 20px;

    @media screen and (max-width: 480px) {
        width: 325px;
        height: 275px;
    }
`

const ValuesTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    position: relative;
    left: 1.5rem;
    font-size: 1.5rem;
    color: ${colors.white};
    bottom: 2.5rem;

    @media screen and (max-width: 480px) {
        top: 14rem;
        left: 1.2rem;
    }
`

const ValueSubDiv = styled.div`
    width: 400px;
    height: 175px;
    background: ${colors.darkTeal};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`

const GoalSubtitle = styled.h3`
    color: white;
    font-size: 1.2rem;
    line-height: 1.5em;
    width: 350px; 
    position: relative;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 400;


    @media screen and (max-width: 1000px)
    {
        width: 50%;
    }
    @media screen and (max-width: 650px)
    {
        width: 70%;
    }
    @media screen and (max-width: 480px)
    {
        width: 100%;
    }
`


//styling for values and impact
const Goaldiv = styled.div`
    width: 900px; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 3rem;     
    justify-content: center;
    position: relative;
    top: 4rem;



    @media screen and (max-width: 1500px)
    {
        grid-column-gap: 5rem; 
    }

    @media screen and (max-width: 1200px)
    {
        grid-template-columns: 1fr; 
    }
    
    @media screen and (max-width: 480px){
       grid-template-gap: 0rem;
        width: 80%;
    }

`

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    max-height: 600px; 
    width: 500px;
    height: 700px;
    padding: 50px; 
    border-radius: 25px;
    background: ${colors.primaryTeal};


    @media screen and (max-width: 1150px)
    {
        width: 250px;
    }
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
    @media screen and (max-width: 480px)
    {
        padding: 0px;
        position: relative;
        width: 80%;
        left: 2rem;
        top: 1rem;
    {
`


//impact styles

const GoaldivImpact = styled.div`
    font-family: 'UsualExtraBold', sans-serif;
    width: 700px;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 13rem;     
    justify-content: center;
    position: relative;
    margin-top: 9rem;

    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px){
        position: relative;
        bottom: 8.2rem;
        height: 500px;
        width: 80%;
        left: 2rem;

    }

`

const GoalOutlineImpact = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;
    max-height: 600px; 
    width: 450px;
    height: 300px;
    padding: 50px; 
    position: relative;
    border-radius: 30px;
    border: 3px solid ${colors.primaryTeal};
 
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }

    @media screen and (max-width: 480px){
        max-height: 100px;
        padding: 0px;
        width: 80%;
    }
`

const GoaltitleImpact = styled(CountUp)`
    color: black;
    font-size: 4rem;
    text-align: center;
    font-weight: 700;
    position: relative;
    justify-content: center;
    font-family: 'Lato', sans-serif;

`

const GoalTitleImpactTogether = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2.5rem;
    
`

const GoalSubtitleImpact = styled.h3`
    color: ${colors.primaryTeal};
    font-size: 2rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 250px;
    top: 2rem;
    font-family: 'Lato', sans-serif;

    @media screen and (max-width: 1000px)
    {
        width: 50%;
    }
    @media screen and (max-width: 650px)
    {
        width: 70%;
    }
    @media screen and (max-width: 480px)
    {
        width: 100%;
    }
`

export default Values