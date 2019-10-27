import React from 'react'
import { Link } from 'gatsby'
import styles from './client-list.module.css'

const ClientList = (props) => {
  const {
    list,
    viewMore
  } = props
  return (
    <section className={styles.block}>
      {list && list.map((l, i) => {
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
      {viewMore &&
        <Link
          className={styles.link}
          to='/clients'>
            See All Clients
        </Link>
      }
    </section>
  )
}

export default ClientList