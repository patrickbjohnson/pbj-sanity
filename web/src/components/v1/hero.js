import React, { useState } from "react"
import photo from "../../images/hero.jpg"
import cx from "classnames"
import styles from "./hero.module.css"

const Hero = props => {
  const [loaded, setLoaded] = useState(false)
  return (
    <section className={styles.block}>
      <figure className={styles.figure}>
        <img
          onLoad={() => setLoaded(true)}
          className={cx(styles.hero, {
            [styles.loading]: !loaded,
          })}
          src={photo}
          alt="Patrick Johnson illustrated by Technodrome1"
        />
        <figcaption className={styles.figcaption}>
          <a
            href="https://technodrome1.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Technodrome
          </a>
        </figcaption>
      </figure>
    </section>
  )
}

export default Hero
