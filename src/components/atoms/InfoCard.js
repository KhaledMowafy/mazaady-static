import React from 'react'
import Image from 'next/image'

function InfoCard({img, Bnumber='', Snumber='', text, textClassName='text-dark-yellow'}) {
  return (
    <div className="p-3 bg-yellowish flex px-5 items-center justify-around rounded-2xl w-full ">
        <Image src={img} alt={`${text}`} width={24} height={24}/>
        <div className="flex flex-col justify-center items-center ml-3 w-full">
            <div className="flex w-full items-end justify-between">
                {Bnumber===''?'':<p className="text-sm font-bold">{Bnumber}</p>}
                {Snumber!==''? (
                   <p className="text-gray text-xs">({Snumber})</p>
                ):''}
            </div>
            <p className={` text-sm ${textClassName}`}>{text}</p>
        </div>        
    </div>
  )
}

export default InfoCard
