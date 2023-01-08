import React from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'



const Arrow = ({direction, moveSlide}) => {
    return (
        <div className = {`btn-slide ${direction}`} onClick = {moveSlide}>
            {direction === "next" ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
        </div>
    )
}

export default Arrow


