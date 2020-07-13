import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid } from "@material-ui/core"
import DataGrid from "../SystemComponents/Data/Grid"
import { filter } from "lodash"

const Page = ({ data, pageContext }) => {
  const page = data.publisherpages.data
  const body = JSON.parse(page.body)
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
              {block.type === "data" && (
                <DataGrid
                  data={filter(
                    data.allData.edges,
                    o => o.node.siteType === block.dataType
                  )}
                />
              )}
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query($url: String, $dependencies: [String]) {
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
    allData(filter: { siteType: { in: $dependencies } }) {
      edges {
        node {
          siteType
          name
          content
          slug
          image {
            local {
              childImageSharp {
                fixed(height: 250, width: 350) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Page
