import React, {useState, useEffect} from 'react' //state and effect to track state 
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib" //this will change all icons from one given wrapper
import {MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks} from "./navBarElements"
import { StaticImage } from "gatsby-plugin-image"
import EventsDropDown from './dropdownEvents'
import MobileSidebar from './MobileSidebar'
import { SidebarData } from './MobileSidebarData'


// for reference = () => are arrow functions 
const Navbar = () => {
    //click functions for the mobile dropdown
    const [click, setClick] = useState(false)
    //scroll effect for the navbar
    const [scroll, setScroll] = useState(false)
    //function to toggle the click state
    const handleClick = () => setClick(!click)
    
    //dropdown to toggle the dropdown state
    const [dropdown, setDropdown] = useState(false)
   
    //dropdown hover 
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false)
        }
    }


    // function to apply the navbar change effect
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    //add the scroll effect with navbar 
    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
            <IconContext.Provider value = {{color: '#008CA0'}}>
                <Nav active ={scroll} click={click}>

                    <NavbarContainer>
                        <NavLogo to ="/">
                        <StaticImage
                                    src= '../../images/marketyze_logo.png'
                                    loading="eager"
                                    width={55}
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    placeholder="transparent"
                                    style={{ marginRight: `0.5rem` }}
                                />
                             MARKETYZE
                        </NavLogo>

                        <MobileIcon onClick = {handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        
                        <NavMenu click={click}>
                        
                            <NavItem>
                                <NavLinks to="/aboutUs">About Us</NavLinks>
                            </NavItem>

                            <NavItem onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                                <NavLinks to="/mainEvents">Events</NavLinks>
                                {dropdown && <EventsDropDown/>}
                            </NavItem>

                            {/*
                            <NavItem>
                                <NavLinks to="/ourTeam">Our Team</NavLinks>
                            </NavItem>
                            */}

                            {/*
                            <NavItem>
                                <NavLinks to="/programs">Programs</NavLinks>
                            </NavItem>
                            */}
                            
                            <NavItem>
                                <NavLinks to="/career">Career/Contact</NavLinks>
                            </NavItem>
                            {SidebarData.map((item, index) => {
                                return <MobileSidebar item={item} key={index} />
                            })}
                        </NavMenu>

                    </NavbarContainer>


                </Nav>
            </IconContext.Provider>
    )
}

export default Navbar
