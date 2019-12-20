import React from 'react'

export default ({node}) => {
  if (!node.code) {
    return null
  }

  return (
    <div className='code-block'>
      <pre>
        {node.code}
      </pre>
    </div>
  )
}
