import React, {useState, useEffect} from 'react'
import { EventItems } from './dropdownItems'
import {Link} from "gatsby"
import './Dropdown.css'
import styled from 'styled-components'

function EventsDropDown() {
    //click functions for the mobile dropdown
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //scroll effect for the dropdown Navbar
    const [scroll, setScroll] = useState(false)

    // function to apply the dropdown Navbar change effect
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    //add the scroll effect with dropdown Navbar
    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {EventItems.map((item, index) => {
                return (
                    <DropLi active = {scroll} key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </DropLi>
                );
            })}    
            </ul>
        </>
    )
}

export default EventsDropDown

const DropLi = styled.li` 
    transition: ${({active}) => active ? "0.3s all ease" : "0.4s all ease"};
    background: ${({active}) => active ? "#fcfcfc" : "linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"};
    cursor: pointer;
`