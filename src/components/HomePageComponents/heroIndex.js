import React from 'react'
import styled from 'styled-components'
import {Link} from "gatsby"
import marketyzeFamily from '../../images/family.jpg'

const secondary_color = "#91D7DD"

const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                GET AHEAD OF THE COMPETITION
                <HeroP>
                    Marketyze is committed to preparing the next generation of young adults for the future
                    <HeroButtonContainer>
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
    font-family: 'Poppins', sans-serif;
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
    z-index: 5;

    &:hover{
        background-color: ${secondary_color};
        cursor: pointer;
        transition: 1s ease;
        border-color: ${secondary_color};

    }

    @media screen and (max-width: 480px){
        width: 105px;
    }

`


const Button = styled(Link)`
font-family: 'Poppins', sans-serif;
color: white;
justify-content: center;
text-align: center;
position: relative;
text-decoration: none;

&:hover{
    cursor: pointer;
    color: white;

}

@media screen and (max-width: 480px){
    top: 0.45rem;
}

`