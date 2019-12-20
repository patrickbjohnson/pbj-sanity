import React from "react"
import { Link } from "gatsby"
import styles from "../components/v1/client-list.module.css"
import Layout from "../components/layout"
import Container from "../components/v1/container"
import SEO from "../components/seo"
import PostList from "../components/post-list"

const Posts = props => {
  const { posts } = props.pageContext

  return (
    <Layout>
      <SEO title="Posts" />
      <Container>
        {posts &&
          posts.map(p => {
            return (
              <div key={p._id} className={styles.item}>
                <h3 className={styles.name}>
                  <Link to={`/writing/${p.slug}`}>{p.title}</Link>
                </h3>
              </div>
            )
          })}
      </Container>
    </Layout>
  )
}

export default Posts
