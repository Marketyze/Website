import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import {StaticImage} from 'gatsby-plugin-image'

const Sponsors = () => {
  return (
    <MainDiv>
        <Title>Past sponsors</Title> 
        <Description>Some of our top sponsors from previous events</Description>

        <Goaldiv>
        
            <GoalOutline>
            <StaticImage
                src= '../../images/nextDoor.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                className = "NextDoor"
                />

            </GoalOutline>


            <GoalOutline>
            <StaticImage
                src= '../../images/creativeGenius.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                className = "CreativeGenius"
                />

            </GoalOutline>

            <GoalOutline>
            <StaticImage
                src= '../../images/sweetsEarth.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                className = "SweetsEarth"                
                />

            </GoalOutline>
        </Goaldiv>

    

    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.white};
    margin-bottom: 0;



    @media screen and (max-width: 1400px)
    {
        height: 1900px;
    }

    @media screen and (max-width: 480px)
    {
        height: 1725px;
    }

`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 4.5rem;
    line-height: 1.05em;
    margin-top: 0;
    display: flex;
    width: 1500px;
    position: relative;



    @media screen and (max-width: 1700px)
    {
        left: 3rem;
        width: 80%;
    }

    @media screen and (max-width: 480px)
    {
        margin-top: 6rem;
        left: 2.3rem;
    }

`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    width: 1500px;
    position: relative;



    @media screen and (max-width: 1700px)
    {
        left: 3rem;
        width: 70%;
    }

    @media screen and (max-width: 480px)
    {
        margin-top: 1rem;
        left: 2.3rem;
    }
    
`

const Goaldiv = styled.div`
    width: 1500px; 
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: center;
    gap: 5rem;
    margin-top: 3rem;

    
    @media screen and (max-width: 1400px)
    {   
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px)
    {   
        padding: 10px;
    }

`

const GoalOutline = styled.div`
    display: flex; 
    position: relative;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 450px;

    &:before {
        background: ${colors.lightTeal};       
        border-radius: 30px;
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.6; 
    }

    @media screen and (max-width: 480px)
    {
        width: 200px;
        height: 300px;
    }
    
`



export default Sponsors



//reference if we want subtitles 
/**    <Goaltitle>Youth Empowerment</Goaltitle>
                <GoalSubtitle>Bringing Esports to schools to allow students a chance to experience an industry growing with potential.</GoalSubtitle> */

/**const Goaltitle = styled.h1`
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
` */