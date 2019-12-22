import React, { useState } from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import styles from "./post-hero.module.css"

const PostHero = ({ image, alt }) => {
  const {
    metadata: {
      palette: { lightMuted },
    },
  } = image

  const fluidProps = getFluidGatsbyImage(
    image._id,
    { maxWidth: 1024 },
    { projectId: "r6yxavok", dataset: "production" }
  )

  return (
    <Img
      fluid={fluidProps}
      backgroundColor={lightMuted.background}
      className={styles.block}
      alt={alt}
    />
  )
}

export default PostHero
