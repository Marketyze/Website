import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
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
        <TimelineTitle>OUR STORY</TimelineTitle>
        <TimelineDescription>Come check out our story and see how Marketyze was formed</TimelineDescription>
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
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 800px;
    background-color: white;
    z-index: 0;
`

const TimelineTitle = styled.h1`
    font-size: 3rem;
    margin-top: 5rem;
    color: ${colors.primaryTeal};
    font-weight: 700;
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