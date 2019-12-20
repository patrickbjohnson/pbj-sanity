import React, { useState } from "react"
import styles from "../components/v1/hero.module.css"
import cx from "classnames"
const PostHero = ({ metadata, image, alt }) => {
  console.log(image)
  const {
    metadata: {
      dimensions,
      palette: { lightMuted },
    },
    url,
  } = image

  console.log(lightMuted.background)

  const [loaded, setLoaded] = useState(false)

  return (
    <div
      style={{
        height: 0,
        paddingBottom: `${(dimensions.height / dimensions.width) * 100}%`,
        backgroundColor: lightMuted.background,
      }}
      className={cx(styles.container, {
        [styles.isLoaded]: loaded,
      })}
    >
      <img
        className={cx(styles.image, {
          [styles.isLoaded]: loaded,
        })}
        onLoad={() => setLoaded(true)}
        src={url}
        alt={alt}
      />
    </div>
  )
}

export default PostHero
