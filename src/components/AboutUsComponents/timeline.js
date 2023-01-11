import React, {useState} from 'react'
import dataSlider  from './timelineData'
import './timeline.css'
import styled from 'styled-components'
import Arrow from './button'
import {colors} from '../globals/colors.js'

const Timeline = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
        
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
    <MasterDiv>
        <TimelineTitle>Our Story</TimelineTitle>
        <TimelineDescription>Learn more about our story</TimelineDescription>
        <div className = "container-slider">
            {dataSlider.map((slide, index) => {
                return (
                    <div key={slide.id} className = {slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={require(`../../images/img${index + 1}.jpg`).default}/>                            
                    </div>
                )
            })}
            <Arrow moveSlide={nextSlide} direction = {"next"}/>
            <Arrow moveSlide={prevSlide} direction = {"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

        </div>

    </MasterDiv>
    )
}

export default Timeline

const MasterDiv = styled.div`
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 800px;
    background-color: white;
    z-index: 0;
`

const TimelineTitle = styled.h1`
    font-size: 3.5rem;
    margin-top: 5rem;
    color: ${colors.primaryTeal};
    font-weight: 900;
    width: 50%;
    position: relative;
    left: 27rem;
`

const TimelineDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 5rem;
    width: 50%;
    position: relative;
    left: 27rem;
`

