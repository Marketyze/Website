import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/ProgramsPageComponents/heroIndex"
import ParagraphSection from "../components/ProgramsPageComponents/paragraphIndex"
import Internships from "../components/ProgramsPageComponents/linksIndex"

const Programs = () => (
  <Layout>
    <Seo title="Programs" />
    <HeroSection/>
    <ParagraphSection/>
    <Internships/>
  </Layout>
)


export default Programs
