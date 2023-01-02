import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'
import temporary from '../../images/family.jpg'

const Internships = () => {
  return (
    <MainDiv>
        <Title>Internships</Title> 
        <Description>At Marketyze, we offer two internships</Description>
        <Goaldiv>
            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>               
                <InternButtonContainer to = '/aboutUs'>
                        <Button>
                            Join Now
                       </Button>
                </InternButtonContainer>
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                </ValuesDiv>                                <InternButtonContainer to = '/aboutUs'>
                        <Button>
                            Join Now
                       </Button>
                </InternButtonContainer>
            </GoalOutline>

        </Goaldiv>
    </MainDiv>
  )
}

//valuesDiv
const ValuesDiv = styled.div`
    width: 450px;
    height: 450px;
    background-image: url(${temporary});
    border-radius: 20px;
`

const ValuesTitle = styled.h1`
    font-family: 'UsualExtraBold', sans-serif;
    position: relative;
    top: 20rem;
    left: 1.5rem;
    font-size: 1.5rem;
`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    line-height: 1.05em;
    position: relative;
    left: 27rem;
    display: block;
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
    position: relative;
    left: 27rem;
    
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const MainDiv = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: 'transparent'; 

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
    grid-template-columns: 1fr 1fr;
    align-items: center; 
    grid-column-gap: 15rem;
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

//button styling 
const InternButtonContainer = styled(Link)`
    position: relative; 
    height: 40px;
    width: 180px;
    justify-self: center;
    margin: auto;
    top: 1rem;
    border: 1px solid;
    border-radius: 5px; 
    border-color: white;
    border-width: 1px;
    display: block;
    text-decoration: none;
    z-index: 5;

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
color: black;
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



export default Internships