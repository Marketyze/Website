    import React from 'react'
    import styled from 'styled-components'
    import Img from 'gatsby-image'
    import {colors} from '../globals/colors.js'
    import { useStaticQuery, graphql } from 'gatsby'

    const Testimonials = () => {
        const data = useStaticQuery(graphql` 
        query {
            allFile(filter: {name: {in: ["portrait" , "portrait2"]}}) {
              edges {
                node {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }`)

        return (
            <TestimonialsContainer>

                <Description>
                    What people are saying 
                </Description>

                <ContentWrapper>
                    <ColumnOne>

                    <Testimonial>
                        <h3>Steve Watt</h3>
                        <h5>Marketing Director, Seismic LiveSocial</h5>
                        <p>" I've been super impressed with Marketyze since my first experience with them. The members from Marketyze, and the many participants I've met are welcoming, professional, enthusiastic, and highly-engaged at every stage, and they make their sincere appreciation clear when industry professionals step in to lend a hand.
                        These young people are on a great road toward academic and career success. I wish I'd had the opportunity to participate in events like this when I was in high school. </p>
                    </Testimonial>
                    <Testimonial>
                        <h3>Isabelle Gan</h3>
                        <h5>CEO, Marketyze</h5>
                        <p>" I've been super impressed with Marketyze since my first experience with them. The members from Marketyze, and the many participants I've met are welcoming, professional, enthusiastic, and highly-engaged at every stage, and they make their sincere appreciation clear when industry professionals step in to lend a hand.
                        These young people are on a great road toward academic and career success. I wish I'd had the opportunity to participate in events like this when I was in high school. </p>
                    </Testimonial>

                    </ColumnOne>
                    <ColumnTwo>
                    {data.allFile.edges.map((image, key) => ( <Images key={key} fluid = {image.node.childImageSharp.fluid}/>))}
                    
                    </ColumnTwo>
                    
                </ContentWrapper>
            </TestimonialsContainer>
        )
    }

    export default Testimonials

    const TestimonialsContainer = styled.div`
        width: 100%;
        background: linear-gradient(90deg, rgba(0,140,160,1) 10%, rgba(145,215,221,1) 100%, rgba(226,225,238,1) 100%);
        padding: 5rem calc((100vw - 1300px) / 2);
        height: 100%;
    `
    const Description = styled.div`
        padding-left: 2rem;
        margin-bottom: 5rem;
        font-size: clamp(1.5rem, 5vw, 2rem);
        font-weight: bold;
        color: ${colors.black};
        font-family: "Arial", sans-serif; 

    `

    const ContentWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    `
    const ColumnOne = styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr;
    `

    const Testimonial = styled.div`
        padding-top: 1rem;
        padding-right: 2rem;

        h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-style: italic;
        }

        h5 {
            margin-bottom: 1rem;
            font-size: 1.2rem;
            color: black;
        }

        p {
            color: black;
            font-size: 1.2rem;
        }

    `
    const ColumnTwo = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
        grid-gap: 10px;

        @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;
        }

    `

    const Images = styled(Img)`
        border-radius: 10px;
        height: 100%;

    `