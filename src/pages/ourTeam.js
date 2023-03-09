import * as React from "react"
import HeroSection from '../components/ourTeam/HeroSection'
import StartingMessage from "../components/ourTeam/startingMessage"
import FinalMessage from "../components/ourTeam/finalMessage"
import Marketing from "../components/ourTeam/marketing"
import Finance from "../components/ourTeam/finance"
import Programs from "../components/ourTeam/programs"
import Technology from "../components/ourTeam/technology"
import Hr from "../components/ourTeam/HR"
import Strategy from "../components/ourTeam/strategy"
import Operations from "../components/ourTeam/operations"

import Layout from "../components/layout"
import Seo from "../components/seo"


const OurTeam = () => (
  <Layout>
    <Seo title="Our Team"/>
    <HeroSection/>
    <StartingMessage/>
    <Technology/>
    <Marketing/>
    <Finance/>
    <Programs/>
    <Hr/>
    <Strategy/>
    <Operations/>
    <FinalMessage/>
  </Layout>
)


export default OurTeam