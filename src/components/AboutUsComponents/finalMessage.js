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
            <div className = 'buttonAbout'>Learn More</div>             
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

    @media screen and (max-width: 800px){
        height: 350px;
    }

    @media screen and (max-width: 480px){
        height: 420px;
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
    width: 50%;

    @media screen and (max-width: 800px){
        width: 70%;
        margin-left: 4rem;
        top: 2rem;
        
    }

    @media screen and (max-width: 480px){
        margin-left: 3rem;
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
    left: 0.5rem;
    width: 50%;


    @media screen and (max-width: 800px){
        width: 60%;
        margin-left: 4rem;
        top: 2rem;
        
    }

    @media screen and (max-width: 480px){
        margin-left: 3rem;
    }
   
   
`


//button styling
const JoinButtonContainer = styled(Link)`
    font-family: "Lato", sans-serif;
    font-weight: 700;
    position: relative; 
    height: 50px;
    width: 250px;
    left: 90rem;
    top: 2rem;

    @media screen and (max-width: 1700px){
        left: 70rem;
    }

    @media screen and (max-width: 1400px){
        left: 55rem;
    }

    @media screen and (max-width: 1200px){\
       left: 9rem;
       top: 8rem;
    }

    @media screen and (max-width: 800px){
        left: 4rem;
        top: 4rem;
    }

    @media screen and (max-width: 480px){
        left: 3rem;
    }

`



export default FinalMessage