import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Page = ({ data }) => {
  const page = data.publisherpages.data
  const body = JSON.parse(page.body)

  return (
    <Layout title="Test" hero={page.image.local.childImageSharp.fluid}>
      <h1>{page.title}</h1>
      {body.layout.map(layoutItem => {
        const block = body.blocks[layoutItem.id]
        return <div dangerouslySetInnerHTML={{ __html: block.content }} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query($url: String) {
    publisherpages(data: { slug: { eq: $url } }) {
      data {
        title
        slug
        body
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
`

export default Page
