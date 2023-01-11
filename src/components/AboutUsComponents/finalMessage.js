import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'
import './animationsAboutUs.css'

const FinalMessage = () => {
  return (
    <MainDiv>
        <Title>Wondering what we do?</Title> 
        <Description>Come check out our newest event!</Description>
        <JoinButtonContainer to = '/subEvents/latestEvent'>
            <a className = 'buttonAbout'>Learn More</a>             
        </JoinButtonContainer>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(0,140,160,1) 10%, rgba(145,215,221,1) 100%, rgba(226,225,238,1) 100%); 

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

const Title = styled.h1`
    color: ${colors.white};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 3.4rem;
    display: block;
    position: relative;
    top: 7rem;
    margin-left: 9rem;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
    display: block;
    position: relative;
    margin-left: 9rem;
    top: 7rem;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`


//button styling
const JoinButtonContainer = styled(Link)`
    font-family: "Lato", sans-serif;
    font-weight: 700;
    position: relative; 
    height: 50px;
    width: 250px;
    justify-self: center;
    margin: auto;
    left: 35rem;
    bottom: 1rem;

    @media screen and (max-width: 480px){
        width: 105px;
    }

`



export default FinalMessage