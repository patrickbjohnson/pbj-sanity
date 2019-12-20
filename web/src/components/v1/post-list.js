import React from "react"
import { Link } from "gatsby"
import styles from "./client-list.module.css"

const projectList = ({ posts }) => {
  return (
    <>
      <h2>Writing</h2>
      <p>
        Sometimes I write about work, life, cookies or just whatever I find
        intersting.
      </p>
      <div>
        {posts &&
          posts.map(p => {
            return (
              <div key={p._id} className={styles.item}>
                <h3 className={styles.name}>
                  <Link to={`/writing/${p.slug}`}>{p.title}</Link>
                </h3>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default projectList
