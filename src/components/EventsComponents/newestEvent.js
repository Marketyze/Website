import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'
import temporary from '../../images/family.jpg'

const NewestEvent = () => {
  return (
    <MainDiv>
        <Title>Join our Newest event</Title> 
        <Description>This year, we are so excited to start it off with our newest event: PITCH IT</Description>
       
        <Goaldiv>
            <EventsDiv>
                    <EventsTitle>PITCH IT</EventsTitle>
                        <InternButtonContainer to = '/'>
                            <div class="btnEvents btn-threeEvents">
                                <span>Sign Up</span>
                            </div>
                        </InternButtonContainer>
                </EventsDiv>               
        </Goaldiv>
    
    </MainDiv>
  )
}


//Events
const EventsDiv = styled.div`
    width: 1050px;
    height: 500px;
    background-image: url(${temporary});
    border-radius: 30px;
    margin-top: 50px;

    @media screen and (max-width: 1200px)
    {
        width: 700px;
    }

    @media screen and (max-width: 1000px)
    {
        width: 500px;
        height: 500px;
    }

    @media screen and (max-width: 800px)
    {
        width: 400px;
        height: 400px;
    }

`

const EventsTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    position: relative;
    left: 1.5rem;
    font-size: 1.5rem;
    top: 22rem;

    @media screen and (max-width: 800px)
    {
        top: 18rem;
    }
`

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
    left: 27rem;

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
    line-height: 1.05em;
    margin-top: 1rem;
    display: flex;
    width: 50%;    
    position: relative;
    left: 27rem;

    @media screen and (max-width: 1700px)
    {
        left: 3rem;
        width: 70%;
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
   
`

const Goaldiv = styled.div`
    display: grid; 
    grid-template-columns: 1fr;
    align-items: center; 
    grid-column-gap: 15rem;
    padding: 0 50px;     
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 800px)
    {
        width: 400px;
    }

`
 

//button styling 
const InternButtonContainer = styled(Link)`
    position: relative; 
    height: 50px;
    width: 250px;
    top: 23rem;
    left: 1.5rem;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 700;

    @media screen and (max-width: 800px)
    {
        top: 18.5rem;
    }
`

export default NewestEvent