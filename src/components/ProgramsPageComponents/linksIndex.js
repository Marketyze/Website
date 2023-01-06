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
                        <InternButtonContainer to = '/'>
                            <div class="btnPrograms btn-threePrograms">
                                <span>Sign Up</span>
                            </div>
                        </InternButtonContainer>
                </ValuesDiv>               
            </GoalOutline>

            <GoalOutline>
                <ValuesDiv>
                    <ValuesTitle>Youth Empowerment</ValuesTitle>
                    <InternButtonContainer to = '/'>
                    <div class="btnPrograms btn-threePrograms">
                        <span>Sign Up</span>
                    </div>
                    </InternButtonContainer>
                </ValuesDiv>                                
            </GoalOutline>
        </Goaldiv>

    </MainDiv>

  )
}

//valuesDiv
const ValuesDiv = styled.div`
    width: 550px;
    height: 500px;
    background-image: url(${temporary});
    border-radius: 20px;
`

const ValuesTitle = styled.h1`
    font-family: 'UsualExtraBold', sans-serif;
    position: relative;
    left: 1.5rem;
    font-size: 1.5rem;
    top: 22rem;
`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    line-height: 1.05em;
    position: relative;
    width: 30%;
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
    width: 50%;
    left: 27rem;
    

    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const MainDiv = styled.div`
    height: 750px;
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
    grid-column-gap: 1rem;
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
    height: 50px;
    width: 250px;
    top: 23rem;
    left: 1.5rem;
`

export default Internships