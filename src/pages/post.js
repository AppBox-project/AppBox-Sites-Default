import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  return (
    <Layout>
      <SEO title='test' />
      <h1>Test</h1>
    </Layout>
  )
}


export default Post
