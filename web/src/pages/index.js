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

const clientList = [
  {
    slug: '/test',
    name: 'Haus Wine',
    year: '2019',
    type: 'Shopify'
  },
  {
    slug: '/test',
    name: 'Peck & Design Associates',
    year: '2018',
    type: 'Redesign, Wordpress'
  },
  {
    slug: '/test',
    name: 'Chapter SF',
    year: '2018',
    type: 'Redesign, Gatsby, Contentful'
  },
  {
    slug: '/test',
    name: 'Intercom',
    year: '2018',
    type: 'Engineering'
  },
  {
    slug: '/test',
    name: 'Great Jones',
    year: '2017',
    type: 'Shopify'
  },
  {
    slug: '/test',
    name: 'Human NYC',
    year: 'ongoing',
    type: 'Shopify, Contentful, Gatsby'
  },
  {
    slug: '/test',
    name: 'Bluecore',
    year: 'ongoing',
    type: 'Wordpress'
  },
  {
    slug: '/test',
    name: 'Clare Paint'
  },
  {
    slug: '/test',
    name: 'Vimeo'
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero 
      title='Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius.'
    />
    <FeaturedProjects />
    <ContentCardSlider />
    <ClientList list={clientList} viewMore={true}/>
    <Footer />
  </Layout>
)

export default IndexPage
