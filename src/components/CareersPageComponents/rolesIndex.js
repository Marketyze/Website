import React from 'react'
import styled from "styled-components"
import {colors} from '../globals/colors.js'


const Careers = () => {
  return (
    <MainDiv>
        <Title>Positions</Title> 

         {/*Finance Department*/}
         <SectionDiv>
            <Goaldiv>
                <GoalOutline>
                    <Description>Finance Department</Description>
                    <Goaltitle>Director, Fundraising (DF)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>

            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate, Sponsorships (ASP)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>

            <Goaldiv>
                <GoalOutline>
                    <Goaltitle>Associate, Fundraising (AFR)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>
        </SectionDiv>

         {/*Marketing Department*/}
         <SectionDiv>
            <Goaldiv>
                <GoalOutline>
                    <Description>Marketing Department</Description>
                    <Goaltitle>Associatem Promotions (AP)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>
        </SectionDiv>

        {/*Technology Department*/}
         <SectionDiv>
            <Goaldiv>
                <GoalOutline>
                    <Description>Technology Department</Description>
                    <Goaltitle>UX/UI Designer (UD)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>             
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>
        </SectionDiv>

        {/*Logistics Department*/}
        <SectionDiv>
            <Goaldiv>
                <GoalOutline>
                    <Description>Logistics Department</Description>
                    <Goaltitle>Associate, Logistics (AL)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>             
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>
        </SectionDiv>


        {/*Corporate Relations Department*/}
        <SectionDiv>
            <Goaldiv>
                <GoalOutline>
                    <Description>Corporate Relations Department</Description>
                    <Goaltitle>Associate, Corporate Relations (ACR)</Goaltitle>
                    <GoalSubtitle>Remote</GoalSubtitle>
                </GoalOutline>

                <GoalOutline>
                    <Goaltitle>
                        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSfwgif8ObEPE4ii0RP4gByUbEfpUG5r_p57KdwWMKb-_ZVD0w/viewform' className = 'buttonCareers'  target="_blank">Apply</a>             
                    </Goaltitle>
                </GoalOutline>
            </Goaldiv>
        </SectionDiv>

    </MainDiv>
  )
}
const MainDiv = styled.div`
    height: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: 'transparent'; 
    margin-bottom: 0;
    font-family: 'Lato', sans-serif;

    @media screen and (max-width: 1000px)
    {
        height: 1260px; 
    }
    @media screen and (max-width: 768px)
    {
        height: 1350px; 
    }
    @media screen and (max-width: 480px)
    {
        /* height: 900px;  */
    }
`

const SectionDiv = styled.div`
    display: flex;
    jiustify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 5rem;
    margin-left: 15rem;

`

const Title = styled.h1`
    color: ${colors.primaryTeal};
    font-size: 3.4rem;
    display: flex;
    width: 30%;
    position: relative;
    left: 25rem;
    font-weight: 900;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Goaltitle = styled.h1`
    color: ${colors.primaryTeal};
    font-size: 1.5rem;
    position: absolute;
    margin-top: 9rem;
    justify-content: center;
`

const GoalSubtitle = styled.h3`
    color: black;
    font-size: 1rem;
    position: absolute;
    width: 250px;
    margin-top: 11.5rem;
    @media screen and (max-width: 1000px)
    {
        width: 50%;
    }
    @media screen and (max-width: 650px)
    {
        width: 70%;
    }
    @media screen and (max-width: 450px)
    {
        width: 80%;
    }
`

const Description = styled.p`
    color: ${colors.black};
    font-size: 2rem;
    display: flex;
    margin-top: 4rem;
    position: relative;
    right: 4.5rem;
    font-weight: 900;
    

    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const Goaldiv = styled.div`
    max-width: 1150px; 
    height: 100px;
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
    @media screen and (max-width: 1150px)
    {
        grid-column-gap: 3rem;
    }
    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px){
        margin-top: 1rem;
        position: relative;
        top: 5%;
    }   
`

const GoalOutline = styled.div`
    border-style: transparent;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    height: 300px;
    width: 500px;
    @media screen and (max-width: 1150px)
    {
        width: 250px;
    }
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
`



export default Careers