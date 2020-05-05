import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Post = ({ data }) => {
  return (
    <Layout>
      <h1>{data.posts.data.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.posts.data.post }} />
    </Layout>
  )
}

export const query = graphql`
  query($url: String) {
    posts(data: { slug: { eq: $url } }) {
      data {
        name
        slug
        post
      }
    }
  }
`

export default Post
