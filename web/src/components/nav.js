import React from 'react'
import { Link } from 'gatsby'

import styles from './nav.module.css'

const navItems = [
  {
    name: 'Articles',
    slug: '#',
  },
  {
    name: 'Notes',
    slug: '#',
  },
  {
    name: 'Info',
    slug: '#',
  },
  {
    name: 'Contact',
    slug: '#',
  }
]

const Nav = () => {
  return (
    <section className={styles.block}>
      {navItems.map((item, i) => <Link className={styles.link} to={item.slug}>{item.name}</Link>)}
    </section>
  )
}

export default Nav