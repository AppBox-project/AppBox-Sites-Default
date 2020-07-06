/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styles from "./layout.module.css"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"

const Layout = ({ children, hero, title }) => {
  const data = useStaticQuery(graphql`
    query SiteInformationQuery {
      site {
        siteMetadata {
          site {
            name
            email
            phone
            slogan
          }
          menus {
            main {
              title
              page
              to
            }
          }
        }
      }
    }
  `)
  const siteInfo = data.site.siteMetadata.site
  console.log(hero)

  return (
    <>
      {hero ? (
        <Img fluid={hero} className={styles.heroImage} />
      ) : (
        <div style={{ height: 80 }} />
      )}
      <Header
        siteTitle={siteInfo.name}
        color={siteInfo.color}
        menu={data.site.siteMetadata.menus.main}
      />
      <SEO title={title} />

      <Container style={{ marginTop: 64 }}>{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
}

export default Layout
