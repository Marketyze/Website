import * as React from "react"
import Faq from "../../components/EventsComponents/NewestEventComponents/faq"
import HeroSection from '../../components/EventsComponents/NewestEventComponents/HeroSection'
import Learn from "../../components/EventsComponents/NewestEventComponents/learn"
import ParagraphSection from "../../components/EventsComponents/NewestEventComponents/paragraph"
import SignUpEvent from "../../components/EventsComponents/NewestEventComponents/signUp"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

//REMINDER! change seo for different events
const Programs = () => (
  <Layout>
    <Seo title="PITCH IT (Financial Innovation Competition)"/>
    <HeroSection/>
    <ParagraphSection/>
    <Learn/>
    <Faq/>
    <SignUpEvent/>
  </Layout>

)


export default Programs

