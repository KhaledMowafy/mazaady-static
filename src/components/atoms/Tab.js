import React from 'react'

function Tab({children, className='text-gray border-gray'}) {
  return (
      <button className={`px-6 leading-3 text-sm font-normal border-2 rounded-2xl ${className}`}>{children}</button>
  )
}

export default Tab
