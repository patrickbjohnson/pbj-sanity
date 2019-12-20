import React from "react"

const Container = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: 750,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "100px 1em",
      }}
    >
      {children}
    </div>
  )
}

export default Container
