import styled from 'styled-components'
import {Link} from "gatsby"

//colors
const main_color = "#008CA0"

//with styled components, we can pass in props (active classes)
export const Nav = styled.nav`
    background: ${({active}) => active ? "#fcfcfc" : "linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"};
    transition: ${({active}) => active ? "0.3s all ease" : "0.4s all ease"};
    height: 60px;
    display: flex; 
    justify-content: center; 
    position: sticky; 
    top: 0; 
    z-index: 999; 
    opacity: 0.97;


    @media screen and (max-width: 960px) {
        background: ${({click}) => (click ? "#fcfcfc" : `${({active}) => active ? "#fcfcfc" : "linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"};`)}; 
    }
`

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 60px;
    width: 100%; 
    max-width: 1000px;
`

export const NavLogo = styled(Link) `
    color: ${main_color};
    justify-self: flex-start;
    cursor: pointer; 
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    padding-left: 3rem; 
    font-family: 'Lato', sans-serif;
    font-weight: 700;
`

//drop down menu
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center; 

    @media screen and (max-width: 960px) {
        display: flex; 
        flex-direction: column; 
        width: 100%;
        height: 100vh;
        position: absolute;
        transition: all 0.2s ease;
        top: 60px;
        left: ${({click}) => (click ? "0" : "-100%")}; 
        opacity: 1; 
        background: #fcfcfc; 
    }
`
export const NavLinks = styled(Link)`
    color: ${main_color}; 
    display: flex; 
    align-items: center; 
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    height: 100%;
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');   
    font-family: 'Lato', sans-serif;
    font-weight: 700; 
    font-size: 1rem;

`

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px) {
        display: none;

    }
`

//mobile styling 
export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 960px) {
        display: flex;
        transition: all 0.8 ease; 
        position: absolute;
        right: 0; 
        transform: translate(-100%, 50%);
        font-size: 2rem; 
        cursor: pointer; 
    }
`  