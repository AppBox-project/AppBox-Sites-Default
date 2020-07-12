import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const DataItem = ({ data }) => {
  const page = data.allData.edges[0].node
  return (
    <Layout
      hero={page.image.local?.childImageSharp?.fluid}
      pageTitle={page.title}
    >
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  )
}

export const query = graphql`
  query DataQuery($id: String) {
    allData(filter: { id: { eq: $id } }) {
      edges {
        node {
          name
          slug
          content
          image {
            local {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default DataItem
