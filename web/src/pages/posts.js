import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from '../components/post-list'

const Posts = (props) => {
  const {
    posts
  } = props.pageContext
  
  return (
    <Layout>
      <SEO title='Posts' />
      <PostList list={posts} />
    </Layout>
)}

export default Posts
