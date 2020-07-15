import React from "react"
import styles from "./Grid.module.scss"
import { Grid, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

const DataGrid = ({ data }) => {
  return (
    <Grid container>
      {data.map(i => {
        const item = i.node
        return (
          <Grid item xs={12} md={3}>
            <Link
              to={`/${item.siteType}/${item.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.item}>
                <Img fixed={item.image.local.childImageSharp.fixed} />
                <Typography className={styles.itemTitle}>
                  {item.name}
                </Typography>
              </div>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default DataGrid
