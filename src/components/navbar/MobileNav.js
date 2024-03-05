import React from 'react'
import Image from 'next/image'

function MobileNav() {
  return (
    <div className="w-full fixed top-0 bg-white flex py-3 px-8 justify-between">
    <div className="flex w-4/12 justify-around items-center">
    <Image src="./menu.svg" width={24} height={24} alt="logo"/>
        <Image src="./logoQR.svg" width={108} height={43} alt="logo"/>
    </div>
    <div className="flex w-5/12 justify-around items-center">
        <Image className="cursor-pointer" src="./search-normal.svg" width={24} height={24} alt="logo"/>
        <Image className="cursor-pointer" src="./notification.svg" width={24} height={24} alt="logo"/>
        <Image className="cursor-pointer" src="./prof.svg" width={40} height={40} alt="logo"/>
      
    </div>
    </div>
  )
}

export default MobileNav
