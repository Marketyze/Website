import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { StaticImage } from 'gatsby-plugin-image'


//ADD COUNT UP NUMBER FOR BACKGROUND 

const MarketyzeEvents = () => {
  return (
    <MainDiv>
        <Title>Ready to Get Ahead of the Competition?</Title> 
        <Description>At Marketyze, we offer plentiful of opportunities for young students to dive right into the business world. From our competitive and intense events, to internships, we will not stop until our goals are reach. </Description>
        
        <Goaldiv>
            <EventsMainDiv>
                <EventsDiv>
                    <EventsInnerDiv>
                        <h1>Events</h1>
                        <p>Learn More <Arrow/></p>
                    </EventsInnerDiv>
                </EventsDiv>
            </EventsMainDiv>

            <OppotunityMainDiv>
                <PositionsDiv>
                    <PositionsInnerDiv>
                        <h1>Careers</h1>
                        <p>Learn More <Arrow/></p>
                    </PositionsInnerDiv>
                </PositionsDiv>

                <InternshipDiv>
                    <InternshipInnerDiv>
                        <h1>Internships</h1>
                        <p>Learn More <Arrow/></p>
                    </InternshipInnerDiv>
                </InternshipDiv>
            </OppotunityMainDiv>
                
        </Goaldiv>

    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F8FCFF; 

    @media screen and (max-width: 1200px)
    {
        height: 1000px; 
    }

    @media screen and (max-width: 500px)
    {
        height: 900px;
    
    }

    @media screen and (max-width: 480px)
    {
        height: 850px;
    }
`

    

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 4rem;
    display: block;
    width: 1450px;
    position: relative;
    z-index: 99;
    margin-top: 4rem;

    @media screen and (max-width: 750px) {
        font-size: 2.4rem;
        padding: 1rem;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 1rem;
    display: block;
    position: relative;
    width: 1450px;
    line-height: 2.5rem;
    
    @media screen and (max-width: 750px) {
        padding: 1rem;
    }

    @media screen and (max-width: 480px){
        font-size: 1.4rem;
    }
`

//events, internships, and more
const Goaldiv = styled.div`
    width: 1500px;
    height: 800px;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-columns-gap: 2rem;
    align-items: center; 
    justify-content: center;
    position: relative;

    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px){
        margin-top: 1rem;
        position: relative;
        top: 10%;
    }   
`

const EventsMainDiv = styled.div`
    width: 750px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EventsDiv = styled.div`
    height: 750px;
    width: 700px;
    background: ${colors.primaryTeal};
    border-radius: 20px;
    position: relative;
    display: flex;
`

const EventsInnerDiv = styled.div`
    height: 100px;
    width: 300px;
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
`

const OppotunityMainDiv = styled.div`
    width: 750px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.8rem;
    position: relative;
    
`

const PositionsDiv = styled.div`
    height: 360px;
    width: 700px;
    background: ${colors.primaryTeal};
    border-radius: 20px;
    display: flex;
    position: relative;



`

const PositionsInnerDiv = styled.div`
    height: 100px;
    width: 300px;
    position: absolute;
    bottom: 0;
    margin-left: 1rem;

`

const InternshipDiv = styled.div`
    height: 360px;
    width: 700px;
    background: ${colors.primaryTeal};
    border-radius: 20px;
    display: flex;
    position: relative;
`

const InternshipInnerDiv = styled.div`
    height: 100px;
    width: 300px;
    position: absolute;
    bottom: 0;
    margin-left: 1rem;

`

//icons
const Arrow = styled(BsFillArrowRightCircleFill)`

`

export default MarketyzeEvents