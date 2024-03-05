import React from 'react'

function Links({children, className='text-gray'}) {
  return (
    <p className={`text-lg  ${className}`}>
    {children}
   </p>
  )
}

export default Links
