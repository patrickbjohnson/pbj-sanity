import React, { useState } from "react"
import styles from "./hero.module.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <section className={styles.block}>
            <figure className={styles.figure}>
              <Img fluid={data.file.childImageSharp.fluid} />
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
      }}
    ></StaticQuery>
  )
}

export default Hero
