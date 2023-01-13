import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import temporary from '../../images/family.jpg'
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const Values = () => {
  
  return (
    <MainDiv>
        <Title>Why Marketyze?</Title> 
        <Description>We continue to drive our mission through our three main values</Description>
        
        <Goaldiv>
            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Acessibility</ValuesTitle>
                </ValuesDiv>
                <GoalSubtitle>At Marketyze, we don't want students to break the bank in order to build their network, learn new skills and participate in one-of-a-kind opportunities</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Foster Personal Growth</ValuesTitle>
                </ValuesDiv>
                <GoalSubtitle>At Marketyze, we encourage our team members to become stronger versions of themselves day by day. Strengthen the people; strengthe the organization</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Quality Every Time</ValuesTitle>
                </ValuesDiv>
                <GoalSubtitle>It is core to our culture to prioritize quality over efficiency. From project to project and team to team, we ensure that quality is there first before implementing efficiency next</GoalSubtitle>
            </GoalOutline>
        </Goaldiv>

        <GoaldivImpact>
            <GoalOutlineImpact>

                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <GoaltitleImpact end={1700} />: null}
          </div>
        )}
      </VisibilitySensor>

                <GoalSubtitleImpact>Youths reached across the world</GoalSubtitleImpact>
            </GoalOutlineImpact>

            <GoalOutlineImpact>
                <GoaltitleImpact end = {55}/>
                <GoalSubtitleImpact>Total volunteers with Marketyze</GoalSubtitleImpact>
            </GoalOutlineImpact>

        </GoaldivImpact>

    </MainDiv>
  )
}

//main div
const MainDiv = styled.div`
    height: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    background: #fcfcfc; 

    @media screen and (max-width: 1200px)
    {
        height: 2400px; 
    }

    @media screen and (max-width: 1000px)
    {
        height: 2800px; 
    }
`
//title/desc for values
const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 3.4rem;
    display: flex;
    position: relative;
    top: 1rem;
    margin-left: 15rem;


    @media screen and (max-width: 1000px) {
        margin-left: 5rem;
    }

`
const Description = styled.div`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    position: relative;
    top: 3rem;
    margin-left: 15.5rem;
    width: 70%;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
        margin-left: 5.5rem;
    }
    
`

//valuesDiv
const ValuesDiv = styled.div`
    width: 350px;
    height: 300px;
    background-image: url(${temporary});
    border-radius: 20px;
`

const ValuesTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    position: relative;
    top: 16rem;
    left: 1.5rem;
    font-size: 1.3rem;
`

//styling for values and impact
const Goaldiv = styled.div`
    max-width: 1150px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 15rem;     
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
    font-size: 1.2rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 270px;
    top: 3rem;
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
    height: 300px;
    padding: 50px; 
    position: relative;
    top: 7rem;
 
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
`

const GoaltitleImpact = styled(CountUp)`
    color: black;
    font-size: 4rem;
    position: absolute;
    text-align: center;
    justify-content: center;
    font-family: 'Lato', sans-serif;
`

const GoalSubtitleImpact = styled.h3`
    color: ${colors.primaryTeal};
    font-size: 2rem;
    line-height: 1.5em;
    position: relative;
    text-align: center;
    width: 250px;
    top: 6rem;
    font-family: 'Lato', sans-serif;
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