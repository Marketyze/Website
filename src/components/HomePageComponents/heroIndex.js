import React from 'react'
import styled from 'styled-components'
import {Link} from "gatsby"
import marketyzeFamily from '../../images/family.jpg'
import {colors} from '../globals/colors.js'

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                GET AHEAD OF THE COMPETITION
                <HeroP>
                    Marketyze is committed to preparing the next generation of young adults for the future
                    <HeroButtonContainer to = '/aboutUs'>
                        <Button>
                            Learn More
                       </Button>
                    </HeroButtonContainer>
                </HeroP>
            </HeroH1>

        </HeroContainer>
        
    )
}

export default HeroSection


const HeroContainer = styled.div`
    background-image: url(${marketyzeFamily});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    height: 100vh;
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.76);
    margin-top: -80px
`

const HeroH1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');    
    font-weight: 400;    
    font-family: "Quicksand", sans-serif;
    color: white;
    font-size: 5rem; 
    margin-top: 0px; 
    text-align: center;

    @media screen and (max-width: 960px) {
        font-size: 70px;
    }

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`

const HeroP = styled.p`
    margin-top: 8px; 
    color: white; 
    font-size: 1.5rem; 
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`


//button styling
const HeroButtonContainer = styled(Link)`
    position: relative; 
    height: 40px;
    width: 180px;
    justify-self: center;
    margin: auto;
    top: 1rem;
    border: 1px solid;
    border-radius: 5px; 
    border-color: white;
    border-width: 1px;
    display: block;
    text-decoration: none;
    z-index: 5;

    &:hover{
        background-color: ${colors.lightTeal};
        cursor: pointer;
        transition: 1s ease;
        border-color: ${colors.lightTeal};

    }

    @media screen and (max-width: 480px){
        width: 105px;
    }

`


const Button = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
font-family: 'Quicksand', sans-serif;
color: white;
justify-content: center;
text-align: center;
position: relative;
top: 0.25rem;

&:hover{
    cursor: pointer;
    color: white;

}

@media screen and (max-width: 480px){
    top: 0.45rem;
}

`