import React from 'react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'



const Arrow = ({direction, moveSlide}) => {
    return (
        <div className = {`btn-slide ${direction}`} onKeyDown = {moveSlide} onClick = {moveSlide}>
            {direction === "next" ? <MdKeyboardArrowRight/> : <MdKeyboardArrowLeft />}
        </div>
    )
}

export default Arrow


