import React from "react"

export default ({ node }) => {
  if (!node.code) {
    return null
  }

  return (
    <blockquote className="blockquote">
      <pre>{node.code}</pre>
    </blockquote>
  )
}
