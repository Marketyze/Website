import React from 'react'
import styled from "styled-components"
import {colors} from '../../globals/colors.js'
//import { Link } from 'gatsby'
import './newestEvents.css'

const  SignUpEvent = () => {
  return (
    <MainDiv>
        <Title>Sign up for PITCH IT Now!</Title> 
        <Description>Registrations close on January 20, 2023!</Description>
        <JoinButtonContainer>
            <a href = '/' className = 'buttonNewestEvent'>SIGN UP</a>             
        </JoinButtonContainer>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(0,140,160,1) 10%, rgba(145,215,221,1) 100%, rgba(226,225,238,1) 100%); 

    @media screen and (max-width: 1800px) {
        height: 300px;
    }

    @media screen and (max-width: 768px) {
        height: 380px;
    }

    `

const Title = styled.h1`
    color: ${colors.white};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 3.4rem;
    display: block;
    width: 50%;
    position: relative;
    top: 4rem;
    margin-left: 9rem;

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
        margin-left: 4rem;
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
    top: 4rem;

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
        margin-left: 4rem;
        width: 60%; 
    }
    `

//button styling
const JoinButtonContainer = styled.div`
    font-family: "Lato", sans-serif; 
    font-weight: 700;
    position: relative; 
    height: 50px;
    width: 250px;
    justify-self: center;
    margin: auto;
    left: 35rem;
    bottom: 5rem;
    

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
        left: 0;
        top: 0;
    }

    `



export default SignUpEvent