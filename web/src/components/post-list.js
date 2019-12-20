import React from 'react'
import { Link } from 'gatsby'
import styles from './client-list.module.css'
import { format } from 'date-fns'

const PostList = (props) => {
  const {
    list,
    viewMore
  } = props

  return (
    <section className={styles.block}>
      {list && list.map((l, i) => {
        return (
          <Link className={styles.item} key={i} to={`/posts/${l.slug}`}>
            <span className={styles.name}>{l.title}</span>
            <span className={styles.info}>
              <span className={styles.small}>{l.publishedAt && format(new Date(l.publishedAt), 'LLLL d, y')}</span>
            </span>
          </Link>
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

export default PostList