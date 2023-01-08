import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {colors} from '../globals/colors.js'
import {StaticImage} from 'gatsby-plugin-image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

/**
 * 
 *  © {new Date().getFullYear()} &middot; Built with
          {` `}
 */


const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>General</FooterLinkTitle>
                            <FooterLink to='/aboutUs'>About Us</FooterLink>
                            {/*<FooterLink to='/'>Our Team</FooterLink>*/}
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Events</FooterLinkTitle>
                            <FooterLink to='/mainEvents'>Overview</FooterLink>
                            <FooterLink to='/subEvents/latestEvent'>PITCH IT</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>More</FooterLinkTitle>
                            <FooterLink to='/programs'>Programs</FooterLink>
                            <FooterLink to='/career'>Career/Contact</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
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
                        </SocialLogo>
                        <WebsiteRights>Marketyze © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/marketyzeca/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>

                            <SocialIconLink href='https://www.instagram.com/marketyze.ca/?hl=en' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>

                            <SocialIconLink href='https://ca.linkedin.com/company/marketyzeca' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )


}

export default Footer

//general footer
const FooterContainer = styled.div`
    font-family: 'UsualExtraBold', sans-serif;
    background-color: ${colors.darkTeal};
`

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: ${colors.lightTeal};
        transition: 0.3s ease-out;
    }
`
//social media footer

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`