import React from 'react'

function Tab({children, className='text-gray border-gray'}) {
  return (
      <button className={` py-3 leading-3 w-full text-sm font-normal border-2 rounded-2xl lg:px-6 lg:py-3 md:px-3 md:py-3 md:px-3  ${className}`}>{children}</button>
  )
}

export default Tab
