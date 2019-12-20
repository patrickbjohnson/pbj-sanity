import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientList from '../components/client-list'

const Posts = (props) => {
  const {
    posts
  } = props.pageContext
  return (
    <Layout>
      <SEO title='Posts' />
      <ClientList list={posts} type={'clients'} />
    </Layout>
)}

export default Posts
