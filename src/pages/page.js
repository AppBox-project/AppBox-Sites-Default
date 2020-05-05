import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Page = ({ data }) => {
  return (
    <Layout>
      <h1>{data.pages.data.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.pages.data.body }} />
    </Layout>
  )
}

export const query = graphql`
  query($url: String) {
    pages(data: { slug: { eq: $url } }) {
      data {
        name
        slug
        body
      }
    }
  }
`

export default Page
