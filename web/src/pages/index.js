import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Nav from '../components/nav'
import SEO from "../components/seo"
import Hero from '../components/hero'
import FeaturedProjects from '../components/featured-section'
import ContentCardSlider from '../components/content-card-slider'
import ClientList from '../components/client-list'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero 
      title='Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius.'
    />
    <FeaturedProjects />
    <ContentCardSlider />
    <ClientList />
    <Footer />
  </Layout>
)

export default IndexPage
