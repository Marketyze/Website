import * as React from "react"
import HeroSection from "../components/EventsComponents/heroSection"
import NewestEvent from "../components/EventsComponents/newestEvent"
import ParagraphSection from "../components/EventsComponents/paragraphIndex"
//import PrevEvents from "../components/EventsComponents/prevEvents"
import Sponsors from "../components/EventsComponents/sponsorsIndex"


import Layout from "../components/layout"
import Seo from "../components/seo"

//add previous events later
const MainEvents = () => (
  <Layout>
    <Seo title="Events"/>
    <HeroSection/>
    <ParagraphSection/>
    <Sponsors/>
    <NewestEvent/>
  </Layout>
)


export default MainEvents