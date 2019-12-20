import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"

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

const Footer = () => {
  const date = new Date()

  return (
    <footer className={styles.block}>
      <nav>
        {navItems.map((item, i) => (
          <Link key={i} className={styles.link} to={item.slug}>
            {item.name}
          </Link>
        ))}
      </nav>

      <p>&copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
