import * as React from "react"
import ContactUs from "../components/CareersPageComponents/contactIndex"
import HeroSection from "../components/CareersPageComponents/heroIndex"
import ParagraphSection from "../components/CareersPageComponents/paragraphIndex"
import Careers from "../components/CareersPageComponents/rolesIndex"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Programs = () => (
  <Layout>
    <Seo title="Career"/>
    <HeroSection/>
    <ParagraphSection/>
    <Careers/>
    <ContactUs/>
  </Layout>
)


export default Programs

