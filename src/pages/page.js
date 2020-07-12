import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid } from "@material-ui/core"
import DataGrid from "../SystemComponents/Data/Grid"

const Page = ({ data, pageContext }) => {
  const page = data.publisherpages.data
  const body = JSON.parse(page.body)
  console.log(pageContext)
  return (
    <Layout
      title="Test"
      hero={page.image.local?.childImageSharp?.fluid}
      pageTitle={page.title}
    >
      <Grid container>
        {body.layout.map((layoutItem, index) => {
          const block = body.blocks[layoutItem.id]
          return (
            <Grid
              item
              xs={block.xs}
              sm={block.sm}
              md={block.md}
              lg={block.lg}
              xl={block.xl}
              key={index}
            >
              {(block.type === "html" || block.type === "text") && (
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
              )}
              {block.type === "data" && <DataGrid source={block.dataType} />}
            </Grid>
          )
        })}
      </Grid>
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
