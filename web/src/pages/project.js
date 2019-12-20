import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockText from "../components/block-text"
import PostHero from "../components/post-hero"
import { format } from "date-fns"

const SecondPage = props => {
  const { hero, body, title, publishedAt } = props.pageContext.project

  const seo = {
    title: title,
    image: hero,
  }

  console.log(props.pageContext)

  return (
    <Layout>
      <SEO {...seo} />
      {hero && <PostHero image={hero} alt={title} />}
      <h1>{title}</h1>
      {publishedAt && <date>{format(new Date(publishedAt), "LLLL d, y")}</date>}
      <BlockText blocks={body} />
    </Layout>
  )
}

export default SecondPage
