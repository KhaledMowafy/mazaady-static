import React from 'react'

function Button({children, className}) {
  return (
        <button className="bg-gradient-to-r from-pink to-yellow rounded-xl px-8 py-3 text-white text-sm w-full">
            {children}
        </button>
  )
}

export default Button
