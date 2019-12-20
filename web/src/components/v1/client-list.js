import React from "react"

import styles from "./client-list.module.css"

const clientList = ({ work }) => {
  return (
    <>
      <h2 className={styles.title}>Work Archive</h2>
      <p className={styles.desc}>
        Projects completed independently or with past employers.
      </p>
      <div className={styles.list}>
        {work &&
          work.map(w => {
            return (
              <div key={w._id} className={styles.item}>
                <h3 className={styles.name}>
                  {w.siteUrl && (w.linkOut && w.linkOut === true) && (
                    <a href={w.siteUrl} target="_blank" rel="noopener">
                      {w.title}
                    </a>
                  )}

                  {!w.linkOut && w.title}
                </h3>
                {w.projectNote && (
                  <p className={styles.info}>{w.projectNote}</p>
                )}
              </div>
            )
          })}
      </div>
    </>
  )
}

export default clientList
