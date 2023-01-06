import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import {StaticImage} from 'gatsby-plugin-image'

const Sponsors = () => {
  return (
    <MainDiv>
        <Title>Past Sponsors</Title> 
        <Description>Below are some of our past sponsors for our events</Description>

        <Goaldiv>
            <GoalOutline>
            <StaticImage
                src= '../../images/maker.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `700px`, height: `auto`}}
                />

            </GoalOutline>

            <GoalOutline>
            <StaticImage
                src= '../../images/pizzaVille.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `400px`, height: `auto`}}
                />

            </GoalOutline>

            <GoalOutline>
            <StaticImage
                src= '../../images/nextDoor.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `300px`, height: `auto`}}
                />

            </GoalOutline>
        </Goaldiv>

        <Goaldiv>
            <GoalOutline>
            <StaticImage
                src= '../../images/alphaTrim.png'
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                placeholder="transparent"
                style={{width: `200px`, height: `auto`}}
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
                style={{width: `300px`, height: `auto`, position: 'relative', bottom: '7rem'}}
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
                style={{width: `300px`, height: `auto`, position: 'relative', bottom: '4rem'}}
                />

            </GoalOutline>
        </Goaldiv>

    </MainDiv>
  )
}

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    line-height: 1.05em;
    margin-top: 0;
    display: flex;
    width: 50%;
    position: relative;
    left: 27rem;

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
    width: 50%;
    position: relative;
    left: 27rem;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const MainDiv = styled.div`
    height: 800px;
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
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 8rem;
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