import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Nav from '../components/nav'
import SEO from "../components/seo"
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
  },
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
  },
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
  },
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
    <div style={{
      'paddingTop': '10vh'
    }}>
    <ClientList list={clientList} />  
    </div>
    
    <Footer />
  </Layout>
)

export default IndexPage
