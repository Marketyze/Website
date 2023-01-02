import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'

const JoinNow = () => {
  return (
    <MainDiv>
        <Title>So what are you waiting for?</Title> 
        <Description>Marketyze is here to give students an opportunity of a lifetime</Description>
        <JoinButtonContainer>
            <Button>Sign Up</Button>
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
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    display: block;
    position: relative;
    top: 3rem;
    z-index: 99;
    margin-left: 6rem;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 1.5rem;
    margin-top: 1rem;
    display: block;
    position: relative;
    margin-left: 6rem;
    top: 3rem;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`


//button styling
const JoinButtonContainer = styled(Link)`
    position: relative; 
    height: 40px;
    width: 180px;
    justify-self: center;
    margin: auto;
    border: 1px solid;
    border-radius: 5px; 
    border-color: white;
    border-width: 1px;
    display: block;
    text-decoration: none;
    z-index: 5;
    left: 50rem;

    &:hover{
        background-color: ${colors.lightTeal};
        cursor: pointer;
        transition: 1s ease;
        border-color: ${colors.lightTeal};

    }

    @media screen and (max-width: 480px){
        width: 105px;
    }

`


const Button = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
font-family: 'Quicksand', sans-serif;
color: white;
justify-content: center;
text-align: center;
position: relative;
top: 0.25rem;

&:hover{
    cursor: pointer;
    color: white;

}

@media screen and (max-width: 480px){
    top: 0.45rem;
}

`

export default JoinNow