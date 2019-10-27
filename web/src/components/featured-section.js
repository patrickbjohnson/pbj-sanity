import React from 'react'
import styles from '../components/featured-section.module.css'


const FeaturedProjects = () => {
  return (
    <section className={styles.block}>
      <div className={styles.project}
        style={{
          'backgroundImage': 'url(https://images.unsplash.com/photo-1572177229069-dca5ed8afdb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)'
        }}
      >
        <p>Project Name</p>
      </div>
      <div className={styles.project}
        style={{
          'backgroundImage': 'url(https://images.unsplash.com/photo-1572004894563-5a657de7e580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)'
        }}
      >
        <p>Project Name</p>
      </div>
    </section>
  )
}

export default FeaturedProjects