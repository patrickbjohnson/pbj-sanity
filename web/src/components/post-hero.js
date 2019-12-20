import React from 'react'

const PostHero = ({image, alt}) => {
  return (
    <div className='post-hero'>
      <img src={image} alt={alt} />
    </div>
  )
}

export default PostHero