import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Page = ({ data }) => {
  return (
    <Layout
      title={data.pages.data.name}
      hero={data.pages.data.image.local.childImageSharp.fluid}
    >
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
        image {
          local {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Page
