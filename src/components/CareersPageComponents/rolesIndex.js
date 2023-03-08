import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'


const Careers = () => {
  return (
    <MainDiv>
        <Title>Positions</Title> 
        
        <WholeDiv>
         {/*Finance Department*/}
         <SectionDiv>
            <Description>Finance Department</Description>
            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Director, Fundraising (DF)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>
            </Goaldiv>

            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate, Sponsorships (ASP)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>
                
                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>
            </Goaldiv>

            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate, Fundraising (AFR)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>
                
                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>
            </Goaldiv>

        </SectionDiv>

         {/*Marketing Department*/}
         <SectionDiv style = {{marginTop: "10rem"}}>
            <Description>Marketing Department</Description>
            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate Promotions (AP)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>


            </Goaldiv>
        </SectionDiv>

        {/*Technology Department*/}
         <SectionDiv style = {{marginTop: "10rem"}}>
            <Description>Technology Department</Description>
            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>UX/UI Designer (UD)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>             
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>

            </Goaldiv>
        </SectionDiv>

        {/*Logistics Department*/}
        <SectionDiv style = {{marginTop: "10rem"}}>
            <Description>Logistics Department</Description>
            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate, Logistics (AL)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>             
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>


            </Goaldiv>
        </SectionDiv>


        {/*Corporate Relations Department*/}
        <SectionDiv style = {{marginTop: "10rem"}}>
            <Description style ={{fontSize: "2.8rem"}}>Corporate Relations Department</Description>
            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate, Corporate Relations (ACR)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>
                
                <MobileFix>
                <GoalOutlineButton>
                    <GoaltitleButton>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank" rel="noreferrer">Apply</a>             
                    </GoaltitleButton>
                </GoalOutlineButton>
                </MobileFix>

            </Goaldiv>
        </SectionDiv>
        </WholeDiv>

    </MainDiv>
  )
}
const MainDiv = styled.div`
    height: 3050px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.white};
    font-family: 'Lato', sans-serif;


    @media screen and (max-width: 1000px)
    {
        height: 1850px; 
    }
   
`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-size: 4.5rem;
    display: flex;
    position: relative;
    font-weight: 900;
    width: 1500px;

    @media screen and (max-width: 1700px) { 
        left: 3rem;
    }

    @media screen and (max-width: 480px) {
        left: 2.2rem;
    }
  
`

const WholeDiv = styled.div`
    height: 2750px;
    width: 1500px;
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
    background: ${colors.primaryTeal};
    border-radius: 30px;
   
`


const SectionDiv = styled.div`
    display: flex;
    jiustify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 5rem;
    width: 1300px;


    @media screen and (max-width: 1700px) {
        margin-left: 6rem;
    }

    @media screen and (max-width: 480px) {
        width: 200px;
    }

`

const Goaltitle = styled.h1`
    color: white;
    font-size: 2.5rem;
    justify-content: center;
    margin-left: 1rem;



    @media screen and (max-width: 1000px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`

const GoalSubtitle = styled.h3`
    color: black;
    font-size: 1.8rem;
    width: 250px;
    margin-left: 1rem;

`

const Description = styled.p`
    color: white;
    font-size: 3rem;
    display: flex;
    position: relative;
    font-weight: 900;
    width: 750px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background: ${colors.darkTeal};
    border-radius: 30px;

    @media screen and (max-width: 1000px) {
        right: 2rem;
        font-size: 1.7rem;
    }   

    @media screen and (max-width: 480px) {
        width: 300px;
    }   
    
    
   
`

const Goaldiv = styled.div`
    width: 1400px; 
    height: 100px;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 14rem;
    margin-top: 6rem;
    position: relative;


    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        width: 200px;
    }
 
`

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 0.5rem;
    height: 300px;
    width: 700px;

    @media screen and (max-width: 1000px) {
        position: relative;
        right: 3rem;
        width: 350px;
    }

    @media screen and (max-width: 480px) {
        width: 320px;
    }


`

const GoalOutlineButton = styled.div`
    border-style: transparent;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    height: 300px;
    width: 100px;
    
`


const GoaltitleButton = styled.h1`
    font-size: 1.5rem;
    position: absolute;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        font-size: 1.3rem;
    }
`
const MobileFix = styled.div`
    @media screen and (max-width: 1000px) {
        position: relative;
        bottom: 13rem;
        right: 3.2rem;
    }
`


export default Careers