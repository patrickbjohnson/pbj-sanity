import React from "react"
import Img from "gatsby-image"

import styles from "./hero.module.css"

const Hero = props => {
  console.log(props)
  const { title } = props

  return (
    <section className={styles.block}>
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
      <div
        className={styles.media}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1572173216260-0140a5f416e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  )
}

export default Hero
