import React from 'react'

function Button({children, className}) {
  return (
        <button className="bg-gradient-to-r from-pink to-yellow rounded-2xl px-8 py-2 text-white text-sm">
            {children}
        </button>
  )
}

export default Button
