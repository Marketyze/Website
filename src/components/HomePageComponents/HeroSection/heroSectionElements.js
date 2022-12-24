import styled from 'styled-components'
import {Link} from "gatsby"
import marketyzeFamily from '../../../images/family.jpg'

const secondary_color = "#91D7DD"

export const HeroContainer = styled.div`
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
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.5);
    margin-top: -80px
`

export const HeroH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 5rem; 
    margin-top: 0px; 

    @media screen and (max-width: 960px) {
        font-size: 70px;
    }

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`

export const HeroP = styled.p`
    margin-top: 8px; 
    color: white; 
    font-size: 1.5rem; 
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`


//button styling
export const HeroButtonContainer = styled(Link)`
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


export const Button = styled(Link)`
font-family: 'Poppins', sans-serif;
color: white;
justify-content: center;
text-align: center;
margin-left: 1.6rem;
position: relative;
top: 0.3rem;
text-decoration: none;

&:hover{
    cursor: pointer;
    color: white;

}

@media screen and (max-width: 480px){
    top: 0.45rem;
}

`