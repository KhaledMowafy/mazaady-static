import React from 'react'
import Image from 'next/image'

function InfoCard({img, Bnumber, Snumber='', text}) {
  return (
    <div className="p-3 bg-yellowish flex px-8 items-center justify-around rounded-2xl w-full ">
        <Image src={img} alt={`${text}`} width={24} height={24}/>
        <div className="flex flex-col justify-center items-start ml-3">
            <div className="flex w-full items-end justify-between">
                <p className="text-sm font-bold">{Bnumber}</p>
                {Snumber!==''? (
                   <p className="text-gray text-xs">({Snumber})</p>
                ):''}
            </div>
            <p className="text-dark-yellow text-sm">{text}</p>
        </div>        
    </div>
  )
}

export default InfoCard
