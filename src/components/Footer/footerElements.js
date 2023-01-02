import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {colors} from '../globals/colors.js'
import {StaticImage} from 'gatsby-plugin-image'

/**
 * 
 *  © {new Date().getFullYear()} &middot; Built with
          {` `}
 */


const Footer = () => {
    return(
        <FooterContainer>

            <FooterLinksWrapper>
                <FooterDesc>

                    <NavLogo to ="/">
                        <StaticImage
                                    src= '../../images/White_logo.png'
                                    loading="eager"
                                    width={65}
                                    quality={100}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    placeholder="transparent"
                                    style={{ marginRight: `0.5rem` }}
                                />
                             MARKETYZE
                    </NavLogo>

                    <p>Pioneering in providing accessible marketing opportunities to youth</p>
                </FooterDesc>

                <FooterLinkItems>
                    <FooterLinkTitle>General</FooterLinkTitle>
                    <FooterLink>About Us</FooterLink>
                    <FooterLink>Our Team</FooterLink>
                </FooterLinkItems>


                <FooterLinkItems>
                    <FooterLinkTitle>Events</FooterLinkTitle>
                    <FooterLink>PITCH IT</FooterLink>
                </FooterLinkItems>


                <FooterLinkItems>
                    <FooterLinkTitle>More</FooterLinkTitle>
                    <FooterLink>Programs</FooterLink>
                    <FooterLink>Career/Contact</FooterLink>
                </FooterLinkItems>

            </FooterLinksWrapper>
            
        </FooterContainer>
    )


}

export default Footer

const NavLogo = styled(Link) `
    color: white;
    justify-self: flex-start;
    cursor: pointer; 
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    font-family: "Arial", sans-serif; 
`

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px)/2);
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    background-color: ${colors.darkTeal};
    color: ${colors.white};
    font-family: "Arial", sans-serif; 
`

const FooterDesc = styled.div`
    padding: 0 2;   

    p {
        margin-top: 3rem;     
    }

    @media screen and (max-width: 400px){
        padding 1rem; 
    }
`

const FooterLinksWrapper = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10rem;

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr 1fr; 
    }
`
const FooterLinkItems = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start;

    @media screen and (max-width: 400px){
        padding: 1rem; 
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px; 
    margin-bottom: 16px
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem; 
    font-size: 14px; 


    &:hover {
        color: ${colors.lightTeal};
        transition: 0.3s ease-out; 
        cursor: pointer;
    }
`