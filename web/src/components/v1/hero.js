import React from "react"
import Img from "gatsby-image"
import photo from "../../images/hero.jpg"

import styles from "./hero.module.css"

const Hero = props => {
  return (
    <section className={styles.block}>
      <figure className={styles.figure}>
        <img
          className={styles.hero}
          src={photo}
          alt="Photo of Patrick Johnson illustrated by Technodrome1"
        />
        <figcaption className={styles.figcaption}>
          <a
            href="https://technodrome1.tumblr.com/"
            target="_blank"
            rel="noopener"
          >
            Technodrome
          </a>
        </figcaption>
      </figure>
    </section>
  )
}

export default Hero
