import React from 'react'

function Text({children, className}) {
  return (
   <p className={`text-sm text-grayish ${className}`}>
    {children}
   </p>
  )
}

export default Text
