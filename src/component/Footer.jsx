import React from 'react'

const Footer = () => {

  const styleFooter = {
      width: "100%"
      
  }

  return (
    <div style={styleFooter} >
      <h3>We are currently open!</h3> {new Date().toLocaleDateString()}.
      {/* <h3>We are currently open!</h3> {new Date().toLocaleDateString()}. */}
    </div>
  )
}

export default Footer
