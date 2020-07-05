import { Link } from "gatsby"
import React from "react"
import { Typography } from "@material-ui/core"
import styles from "./header.module.css"

const Header = ({ siteTitle, color, menu }) => {
  return (
    <div className={styles.root}>
      <Link to="/" className={styles.headerTitle}>
        <Typography variant="h6">{siteTitle}</Typography>
      </Link>
      {menu.map(menuItem => {
        return (
          <Link
            to={menuItem.to}
            key={menuItem.to}
            className={styles.headerButton}
          >
            <Typography>{menuItem.label}</Typography>
          </Link>
        )
      })}
    </div>
  )
}

export default Header