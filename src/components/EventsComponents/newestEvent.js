import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const NewestEvent = () => {
  return (
    <MainDiv>
        <Title>Check out our latest event</Title> 
       
        <Goaldiv>
            <EventsDiv>

                <EventDescriptionDiv>
                    <EventDescription>
                        We believe that students deserve to have the chance to further their interest in business. Our mission is to create innovative virtual challenges, workshops, and events for youth to prepare them in pursuing a path in the business field, especially in marketing.
                    </EventDescription>

                    <EventDescription>
                        That is why we strive to create the best opportunities by creating innovative and fun events so partipants can learn and grow.
                    </EventDescription>
                </EventDescriptionDiv>


                <ImageDiv>
                    <StaticImage
                            src= '../../images/pitchIt.png'
                            alt="pitch"
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            className = "pitch"
                            imgStyle = {{borderRadius: '15px'}}
                            quality = {100}
                        />  
                            {/*<InternButtonContainer to = '/subEvents/latestEvent'>
                                <Button>
                                    Learn More
                                </Button>
                            </InternButtonContainer>*/}
                </ImageDiv>

                </EventsDiv>               
        </Goaldiv>
    
    </MainDiv>
  )
}


const MainDiv = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${colors.white}; 
    margin-bottom: 0;
   
`

const EventsDiv = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: row;
    gap: 2rem;

`

const EventDescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px; 
    width: 700px;
    margin-left: 2.2rem;
    background: ${colors.darkTeal};
    border-radius: 15px;

 
`

const EventDescription = styled.p`
    width: 600px;
    color: white; 
    position: relative;
    font-size: 2rem; 
    margin-top: 2rem;
    display: flex;
    font-weight: 400;
`

const ImageDiv = styled.div`
    display: flex;
`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 4.5rem;
    line-height: 1.05em;
    display: flex;
    width: 1500px;
    position: relative;

    @media screen and (max-width: 1700px)
    {
        left: 3rem;
        width: 80%;
    }

    @media screen and (max-width: 480px){
        left: 2.3rem;
    }

 
`

const Goaldiv = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 700px;
    border-radius: 30px;
    margin-top: 3rem;
    background: ${colors.primaryTeal};



    @media screen and (max-width: 800px)
    {
        width: 400px;
    }
    
    @media screen and (max-width: 480px){
        grid-column-gap: 0;
        width: 360px;
        height: 325px;
    }

`
 

//button styling 
const InternButtonContainer = styled(Link)`
    position: relative; 
    height: 45px;
    width: 200px;
    top: 23rem;
    text-decoration: none;
    left: 1rem;



    @media screen and (max-width: 800px)
    {
        top: 14.5rem;
    }
`

const Button = styled.div`
    font-family: 'Lato', sans-serif;
    position: relative;
    height: 45px;
    width: 170px;
    background: ${colors.darkTeal};
    border-radius: 20px;
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    outline: none;

    
    &:hover {
        transition: all 0.4s ease-in-out;
        background: ${colors.primaryTeal};
        color: ${colors.black};
    }

`

export default NewestEvent