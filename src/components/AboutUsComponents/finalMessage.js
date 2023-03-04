import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'
import './animationsAboutUs.css'

const FinalMessage = () => {
  return (
    <MainDiv>
        <SecondaryDiv>
            <Title>Wondering what we do?</Title> 
            <Description>Come check out our newest event!</Description>
            <JoinButtonContainer to = '/subEvents/latestEvent'>
                <div className = 'buttonAbout'>Learn More</div>             
            </JoinButtonContainer>
        </SecondaryDiv>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(0,140,160,1) 10%, rgba(145,215,221,1) 100%, rgba(226,225,238,1) 100%); 

    @media screen and (max-width: 800px){
        height: 350px;
    }

    @media screen and (max-width: 480px){
        height: 420px;
    }
`

const SecondaryDiv = styled.div`
    width: 1400px;
    position: absolute;
    align-items: center;
    margin-bottom: 2rem
`

const Title = styled.h1`
    color: ${colors.white};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 4rem;
    display: block;
    position: relative;
    width: 70%;

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
    font-size: 2rem;
    margin-top: 1rem;
    display: block;
    position: relative;
    margin-left: 0.2rem;
  
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
    top: 2rem;
    position: absolute;
    right: 0;
    top: 4rem;
    text-decoration: none;


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