import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styles from "./layout.module.scss"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"

const Layout = ({ children, hero, title, pageTitle }) => {
  // Query
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

  // UI
  return (
    <>
      {hero && <Img fluid={hero} className={styles.heroImage} />}
      <Header
        siteTitle={siteInfo.name}
        color={siteInfo.color}
        menu={data.site.siteMetadata.menus.main}
      />
      <SEO pageTitle={pageTitle} siteTitle={data.site.siteMetadata.site.name} />
      <Typography variant="h4" component="h1" className={styles.pageTitle}>
        {pageTitle}
      </Typography>
      <div className={styles.container}>{children}</div>
      <Typography className={styles.footer}>{siteInfo.slogan}</Typography>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
}

export default Layout
