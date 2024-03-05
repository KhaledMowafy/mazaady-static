import React from 'react'

function Button({children, className='px-8 py-2'}) {
  return (
        <button className={`bg-gradient-to-r from-pink to-yellow rounded-xl ${className} text-white text-sm w-full`}>
            {children}
        </button>
  )
}

export default Button
