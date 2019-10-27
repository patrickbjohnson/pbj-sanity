import React from 'react'
import ContentCard from './content-card'

import styles from './content-card-slider.module.css'

const cards = [
  {
    title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.',
    cta: 'Read More',
    image: 'https://cdn.shopify.com/s/files/1/0079/5692/2420/articles/Haus-d-15-Recipes-HausOnRocks_01-2x.jpg?v=1570046362',
    bgColor: '#e7e3db',
    ctaUrl: '#'
  },
  {
    title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.',
    cta: 'Read More',
    image: 'http://pda.studio.s222058.gridserver.com/wp-content/uploads/2019/03/PDA-Peck-Design-Associates-Branding-Retail-Keep-Shop-08.jpg',
    bgColor: '#ef4158',
    ctaUrl: '#'
  },
  {
    title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.',
    cta: 'Read More',
    ctaUrl: '#',
    image: false,
    bgColor: '#476681',
  }
]

const ContentCardSlider = (props) => {  
  return (
    <section className={styles.block}>
      <h6 className={styles.eyebrow}>
        <span>Featured Work</span>
      </h6>
      <div className={styles.section}>
        {cards.map((card, i) => {
          return (
            <div className={styles.col} key={i}>
              <ContentCard {...card}/>  
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ContentCardSlider