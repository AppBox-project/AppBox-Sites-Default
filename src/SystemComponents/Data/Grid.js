import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DataGrid = ({ source }) => {
  let newKey = source.replace("-", "")
  newKey = newKey.charAt(0).toUpperCase() + newKey.slice(1)
  const data = useStaticQuery(graphql`
    query GetData {
      allPublisherposts {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
    }
  `)

  return <div>{source}</div>
}

export default DataGrid
