import React from 'react'

import styles from './content-card.module.css'

const ContentCard = (props) => {
  const {
    title,
    description,
    cta,
    ctaUrl,
    image,
    bgColor
  } = props
  
  return (
    <div 
      className={styles.block}
      style={{
        'backgroundImage': image ? `url(${image})` : '',
        'backgroundColor': bgColor ? bgColor : '#fff'
      }}
    >
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>  
      </div>
      
      <a className={styles.button} href={ctaUrl}>{cta}</a>
    </div>
  )
}

export default ContentCard