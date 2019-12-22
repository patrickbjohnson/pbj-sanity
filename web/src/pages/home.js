import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/v1/container"
import Hero from "../components/v1/home-hero"
import Posts from "../components/v1/post-list"
import ClientList from "../components/v1/client-list"

import seoData from "../data/seo"

const IndexPage = props => {
  const { pageContext } = props

  return (
    <Layout>
      <SEO {...seoData} />
      <Container>
        <Hero title="Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius." />
        <ClientList work={pageContext.work} />
        <Posts posts={pageContext.posts} />
      </Container>
    </Layout>
  )
}

export default IndexPage
