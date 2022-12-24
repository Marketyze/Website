import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {colors} from '../globals/colors.js'


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
                    <h1>Marketyze</h1>
                    <p>Pioneering in providing accessible marketing opportunities to youth</p>
                </FooterDesc>

                <FooterLinkItems>
                    <FooterLinkTitle>Quick Links</FooterLinkTitle>
                    <FooterLink>About</FooterLink>
                    <FooterLink>Events</FooterLink>
                    <FooterLink>Programs</FooterLink>
                </FooterLinkItems>

            </FooterLinksWrapper>
            
            <FooterLinksWrapper>

                <FooterLinkItems>
                    <FooterLink>Careers</FooterLink>
                    <FooterLink>Contact</FooterLink>
                </FooterLinkItems>

            </FooterLinksWrapper>
            
        </FooterContainer>
    )


}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px)/2);
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    background-color: ${colors.primaryTeal};
    color: ${colors.white};
    font-family: "Arial", sans-serif; 
`

const FooterDesc = styled.div`
    padding: 0 2;   

    h1 {
        margin-bottom: 3rem;     
    }

    @media screen and (max-width: 400px){
        padding 1rem; 
    }
`

const FooterLinksWrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr; 
    }
`
const FooterLinkItems = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start;
    padding: 1rem 2rem; 

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