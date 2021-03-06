import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./nav.module.css"

const navItems = [
  {
    name: "About",
    slug: "/about",
  },
  {
    name: "Articles",
    slug: "/writing",
  },
]

const Nav = () => {
  return (
    <section className={styles.block}>
      <Link to="/" className={cx(styles.link, styles.headline)}>
        Patrick Johnson
      </Link>
      <nav>
        {navItems.map((item, i) => (
          <Link key={i} className={styles.link} to={item.slug}>
            {item.name}
          </Link>
        ))}
      </nav>
    </section>
  )
}

export default Nav
