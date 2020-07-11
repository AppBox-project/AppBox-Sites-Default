import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <p>This is the homepage.</p>
      <h1>Test posts</h1>
    </Layout>
  )
}
