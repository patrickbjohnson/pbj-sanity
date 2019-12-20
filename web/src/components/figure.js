import React from 'react'
// import Img from 'gatsby-image'

import config from '../../client-config'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(config)
// import {getFluidGatsbyImage} from 'gatsby-source-sanity'
// import clientConfig from '../../client-config'

// import styles from './figure.module.css'

export default (props) => {
  // builder.image(source)
  // if (!node.asset) {
  //   return null
  // }

  // const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 675}, ...clientConfig.sanity)

  return (
    <figure className='image-block'>
      {/* <Img fluid={fluidProps} alt={node.alt} /> */}
      {/* {node.caption && <figcaption>{node.caption}</figcaption>} */}
    </figure>
  )
}
