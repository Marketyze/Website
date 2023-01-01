import React, {useState} from 'react'
import {SlideData} from './timelineData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styled from 'styled-components'
import './timeline.css'

const Timeline = ({ slides }) => {

//state functions
//tracks state
const [current, setCurrent] = useState(0)
//tracks length of the array
const length = slides.length

//basically loops through all index of the slide array and resets back to 0 
const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

//checking if the data is an array or empty 
if(!Array.isArray(slides) || slides.length <= 0) {
    return null; 
}


    return(
        <MasterDiv>
            <Title>Our Story </Title>
        <Section>
            <ArrowLeft onClick = {previousSlide}/>
            <ArrowRight onClick = {nextSlide}/>
            {SlideData.map((item, index) => {
                return (
                    <div className = {index === current ? 'slide active' : 'slide'} key={index}>   
                    {index === current && (<SlideImage src = {item.image} alt = 'image' />)}
                    </div>
                )
            })}
        </Section>
        </MasterDiv>
    )
}

//add one more section below talking about what was learnt as a team and etc. 


export default Timeline

const MasterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`

const Section = styled.div`
    position: relative;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
`

const SlideImage = styled.img`
    width: 800px;
    height: 450px; 
    border-radius: 30px;
`

const ArrowLeft = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 20rem;
    font-size: 3rem;
    color: black;
    z-index: 10; 
    cursor: pointer;
    user-select: none;

    &:hover {
        transform: scale(1.1);
    }
`

const ArrowRight = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 20rem;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    &:hover {
        transform: scale(1.1);
    }
`