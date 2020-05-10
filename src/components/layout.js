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
import { Typography } from "@material-ui/core"

const Layout = ({ children, hero, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          color
          menus {
            main {
              label
              to
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {hero ? (
        <Img fluid={hero} className={styles.heroImage} />
      ) : (
        <div style={{ height: 80 }} />
      )}
      <Header
        siteTitle={data.site.siteMetadata.title}
        color={data.site.siteMetadata.color}
        menu={data.site.siteMetadata.menus.main}
      />
      <SEO title={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer className={styles.footer}>
        <Typography style={{ cursor: "default" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://appbox.vicvan.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            VicBox
          </a>
        </Typography>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
}

export default Layout
