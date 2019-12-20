import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockText from "../components/block-text"
import PostHero from "../components/post-hero"
import { format } from "date-fns"
import Container from "../components/v1/container"
import styles from "./post.module.css"
import seoData from "../data/seo"

const Post = props => {
  console.log(props)
  const { hero, body, title, publishedAt, exceprt } = props.pageContext.post

  const seo = {
    title: title,
    image: hero,
    description: exceprt,
    meta: [
      {
        name: "og:image",
        content: hero || seoData.image,
      },
    ],
  }
  return (
    <Layout>
      <SEO {...seo} />
      <Container>
        {hero && <PostHero image={hero} alt={title} />}
        <div className={styles.meta}>
          <h1 className={styles.title}>{title}</h1>
          {publishedAt && (
            <time>{format(new Date(publishedAt), "LLLL d, y")}</time>
          )}
        </div>
        <BlockText className={styles.body} blocks={body} />
      </Container>
    </Layout>
  )
}

export default Post
