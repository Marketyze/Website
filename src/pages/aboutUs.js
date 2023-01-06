import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/AboutUsComponents/heroIndex"
import Timeline from "../components/AboutUsComponents/timeline"
import Purposes from "../components/AboutUsComponents/purposes"
import FinalMessage from "../components/AboutUsComponents/finalMessage"


//slide show demonstrating story 
//purposes
//wondering what we do? join our events 

const Programs = () => (
  <Layout>
    <Seo title="About Us" />
    <HeroSection />
    <Timeline/>
    <Purposes />
    <FinalMessage/>
  </Layout>
)


export default Programs