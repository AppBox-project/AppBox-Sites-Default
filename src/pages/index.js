import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <p>This is the homepage.</p>
      <h1>Test posts</h1>

    </Layout>
  )
}
