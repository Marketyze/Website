import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'
import './animationsHome.css'

const JoinNow = () => {
  return (
    <MainDiv>
        <SecondaryDiv>
            <Title>Marketyze is here to give students an opportunity of a lifetime</Title> 
            <Description>Learn more to dream bigger with Marketyze</Description>
            <JoinButtonContainer to = '/mainEvents'>
                <div className = 'buttonHome'>Learn More</div>             
            </JoinButtonContainer>
        </SecondaryDiv>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(0,140,160,1) 10%, rgba(145,215,221,1) 100%, rgba(226,225,238,1) 100%); 

    @media screen and (max-width: 768px) {
        height: 450px;
    }

`

const SecondaryDiv = styled.div`
    width: 1400px;
    position: absolute;
    align-items: center;
    margin-bottom: 6rem;
`

const Title = styled.h1`
    color: ${colors.white};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 3.7rem;
    display: block;
    width: 70%;
    position: relative;

    @media screen and (max-width: 1800px) {
        top: 2rem;
    }

    @media screen and (max-width: 1300px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 1100px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        margin-left: 6rem;
    }

    @media screen and (max-width: 480px) {
        margin-left: 5.5rem;
        font-size: 2rem;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.7rem;
    margin-top: 1rem;
    display: block;
    position: relative;
    
    @media screen and (max-width: 1800px) {
        top: 2rem;
    }

    @media screen and (max-width: 1300px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 1100px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 768px) {
        margin-left: 6rem;
    }

    @media screen and (max-width: 480px) {
        margin-left: 5.6rem;
        font-size: 1rem;
    }
`


//button styling
const JoinButtonContainer = styled(Link)`
    font-family: "Arial", sans-serif; 
    position: relative; 
    height: 50px;
    width: 250px;
    justify-self: center;
    margin: auto;
    position: absolute;
    right: 0;
    top: 12rem;
    text-decoration: none;

    @media screen and (max-width: 1800px){
        bottom: 7rem;
    }

    @media screen and (max-width: 1400px){
        left: 25rem;
        bottom: 5rem;
    }

    @media screen and (max-width: 1200px){
        left: 18rem;
    }

    @media screen and (max-width: 900px){
        left: 15rem;
    }

    @media screen and (max-width: 768px){
        left: 0;
        top: 2rem;
    }

    @media screen and (max-width: 480px){
        left: 1.5rem;
    }

`



export default JoinNow