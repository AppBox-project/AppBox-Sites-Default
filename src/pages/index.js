import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <p>This is the homepage.</p>
      <h1>{data.allPosts.totalCount} posts</h1>
      {data.allPosts.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <Link to={`/posts/${node.data.slug}`}>
              <h3>{node.data.name}</h3>
            </Link>
            <p>{node.data.slug}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allPosts {
      totalCount
      edges {
        node {
          id
          data {
            name
            slug
            post
          }
        }
      }
    }
  }
`
