import React from 'react'

function Links({children, className}) {
  return (
    <p className={`text-lg ${className}`}>
    {children}
   </p>
  )
}

export default Links
