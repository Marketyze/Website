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
                style={{width: `450px`, height: `auto`
                }}
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
                style={{width: `300px`, height: `auto`, position: 'relative', bottom: '4rem',
                }}
                
                />

            </GoalOutline>
        </Goaldiv>

    </MainDiv>
  )
}

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 3.4rem;
    line-height: 1.05em;
    margin-top: 0;
    display: flex;
    width: 50%;
    position: relative;
    left: 26rem;

    @media screen and (max-width: 1700px)
    {
        left: 3rem;
        width: 80%;
    }

`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    width: 50%;
    position: relative;
    left: 26rem;

    @media screen and (max-width: 1700px)
    {
        left: 3rem;
        width: 70%;
    }
    
`

const MainDiv = styled.div`
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: 'transparent';
    margin-bottom: 0;

    @media screen and (max-width: 1400px)
    {
        height: 1900px;
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

    
    @media screen and (max-width: 1400px)
    {   
        grid-template-columns: 1fr; 
    }

`

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;
    max-height: 600px; 
    width: 300px;
    height: 300px;
    padding: 50px; 

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