import styled from 'styled-components'
import {Link} from "gatsby"

//colors
const main_color = "#008CA0"
const secondary_color = "#91D7DD"

//with styled components, we can pass in props (active classes)
export const Nav = styled.nav`
    background: ${({active}) => active ? "#fcfcfc" : "linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"};
    transition: ${({active}) => active ? "0.3s all ease" : "0.4s all ease"};
    height: 70px;
    display: flex; 
    justify-content: center; 
    position: sticky; 
    top: 0; 
    z-index: 999; 

    @media screen and (max-width: 960px){
        background: ${({click}) => (click ? "#fff" : "transparent")};
        transition: 0.8s all ease; 
    }
`

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 80px;
    width: 100%; 
    max-width: 1000px;
`

export const NavLogo = styled(Link) `
    color: ${main_color};
    justify-self: flex-start;
    cursor: pointer; 
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    font-family: "Arial", sans-serif; 
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
        height: 90vh;
        position: absolute;
        top: ${({click}) => (click ? "100%" : "-1000px")}; 
        opacity: 1; 
        transition: all 0.2 ease; 
        background: #fff; 
    }
`
export const NavLinks = styled(Link)`
    color: ${main_color}; 
    display: flex; 
    align-items: center; 
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: "Arial", sans-serif; 
    font-size: 1.2rem;
    font-weight: bold;


    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem; 
        width: 100%; 
        display: table;
    }

    &:hover {
        color: ${secondary_color};
        transition: all 0.3 ease; 
    }

`

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px) {
        width: 100%; 
    }
`

//mobile styling 
export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0; 
        right: 0;  
        transform: translate(-100%, 60%);
        font-size: 1.8rem; 
        cursor: pointer; 
    }
`  