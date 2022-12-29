import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/AboutUsComponents/heroIndex"
import Timeline from "../components/AboutUsComponents/timeline"
import {SlideData} from "../components/AboutUsComponents/timelineData"
import Purposes from "../components/AboutUsComponents/purposes"

const Programs = () => (
  <Layout>
    <Seo title="About Us" />
    <HeroSection />
    <Timeline slides = {SlideData}/>
    <Purposes />
  </Layout>
)


export default Programs