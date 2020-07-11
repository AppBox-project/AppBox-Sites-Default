import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Divider } from "@material-ui/core"

const Page = ({ data }) => {
  const page = data.publisherpages.data
  const body = JSON.parse(page.body)
  return (
    <Layout
      title="Test"
      hero={page.image.local?.childImageSharp?.fluid}
      pageTitle={page.title}
    >
      {body.layout.map((layoutItem, index) => {
        const block = body.blocks[layoutItem.id]
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: block.content }} />
            {body.layout[index + 1] && <Divider style={{ marginBottom: 15 }} />}
          </>
        )
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
