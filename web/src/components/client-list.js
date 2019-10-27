import React from 'react'
import styles from './client-list.module.css'

const list = [
  {
    slug: '/test',
    name: 'Haus Wine',
    year: '2019',
    type: 'Shopify'
  },
  {
    slug: '/test',
    name: 'Peck & Design Associates',
    year: '2018',
    type: 'Redesign, Wordpress'
  },
  {
    slug: '/test',
    name: 'Chapter SF',
    year: '2018',
    type: 'Redesign, Gatsby, Contentful'
  },
  {
    slug: '/test',
    name: 'Intercom',
    year: '2018',
    type: 'Engineering'
  },
  {
    slug: '/test',
    name: 'Great Jones',
    year: '2017',
    type: 'Shopify'
  },
  {
    slug: '/test',
    name: 'Human NYC',
    year: 'ongoing',
    type: 'Shopify, Contentful, Gatsby'
  },
  {
    slug: '/test',
    name: 'Bluecore',
    year: 'ongoing',
    type: 'Wordpress'
  },
  {
    slug: '/test',
    name: 'Clare Paint'
  },
  {
    slug: '/test',
    name: 'Vimeo'
  }
]


const ClientList = () => {
  return (
    <section className={styles.block}>
      {list.map((l, i) => {
        return (
          <div className={styles.item} key={i}>
            <span className={styles.name}>{l.name}</span>
            <span className={styles.info}>
              <span className={styles.small}>{l.year}</span>
              <span className={styles.small}>{l.type}</span>
            </span>
          </div>
        )
      })}
    </section>
  )
}

export default ClientList