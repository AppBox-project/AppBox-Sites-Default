import { Link } from "gatsby"
import React from "react"
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core"
import styles from "./header.module.css"

const Header = ({ siteTitle, color, menu }) => {
  return (
    <AppBar position="static" className={styles.root}>
      <Toolbar>
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
              {menuItem.label}
            </Link>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

export default Header
