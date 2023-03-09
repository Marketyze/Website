import React, {useState} from 'react'
import dataSlider  from './timelineData'
import './timeline.css'
import styled from 'styled-components'
import Arrow from './button'
import { StaticImage } from 'gatsby-plugin-image'
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
                        <>
                        <div key={slide.id} className = {slideIndex === 1 ? "slide active-anim" : "slide"}>
                            <StaticImage className = 'size' placeholder="eager" quality = {100} imgStyle = {{borderRadius: '25px'}}
                            formats={["auto", "webp", "avif"]} alt = "Marketyze_Story" src='../../images/img1.png'/>                            
                        </div>

                        <div key={slide.id} className = {slideIndex === 2 ? "slide active-anim" : "slide"}>
                            <StaticImage className = 'size' placeholder="eager" quality = {100} imgStyle = {{borderRadius: '25px'}}
                            formats={["auto", "webp", "avif"]} alt = "Marketyze_Story" src='../../images/img2.png'/>                            
                        </div>

                        <div key={slide.id} className = {slideIndex === 3 ? "slide active-anim" : "slide"}>
                            <StaticImage className = 'size' placeholder="eager" quality = {100} imgStyle = {{borderRadius: '25px'}}
                            formats={["auto", "webp", "avif"]} alt = "Marketyze_Story" src='../../images/img3.png'/>                            
                        </div>

                        <div key={slide.id} className = {slideIndex === 4 ? "slide active-anim" : "slide"}>
                            <StaticImage className = 'size' placeholder="eager" quality = {100} imgStyle = {{borderRadius: '25px'}}
                            formats={["auto", "webp", "avif"]} alt = "Marketyze_Story" src='../../images/img4.png'/>                            
                        </div>
                        </>      
                    )
                })}
                <Arrow moveSlide={nextSlide} direction = {"next"}/>
                <Arrow moveSlide={prevSlide} direction = {"prev"}/>

                <div className="container-dots">
                    {Array.from({length: 4}).map((item, index) => (
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
    height: 975px;
    background: #F8FCFF; 



    @media screen and (max-width: 900px) {
        height: 600px;
    }

    @media screen and (max-width: 480px) {
        height: 500px;
    }
`

const TimelineTitle = styled.h1`
    font-size: 4.5rem;
    color: ${colors.primaryTeal};
    font-weight: 900;
    width: 1480px;
    position: relative;
    top: 8rem;
    margin: 0px auto 0;



    @media screen and (max-width: 1700px) {
        width: 60%;
        left: 2rem;
    }

    @media screen and (max-width: 480px) {
        width: 80%;
    }

`

const TimelineDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    position: relative;
    left: 0.2rem;
    width: 1480px;
    margin: 10px auto 0;
    top: 8rem;


    position: relative;

    @media screen and (max-width: 1700px) {
        width: 60%;
        left: 2rem;
    }
`

