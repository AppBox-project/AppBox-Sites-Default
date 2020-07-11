/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ lang, meta }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="test"
      titleTemplate={`%s | test`}
      meta={[
        {
          name: `description`,
          content: "test",
        },
        {
          property: `og:title`,
          content: "test",
        },
        {
          property: `og:description`,
          content: "test",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "test",
        },
        {
          name: `twitter:title`,
          content: "test",
        },
        {
          name: `twitter:description`,
          content: "test",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
