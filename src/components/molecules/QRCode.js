import React from 'react'
import HThree from '../atoms/HThree'
import Image from 'next/image'
import InfoCard from '../atoms/InfoCard'
import Text from '../atoms/Text'
function QRCode() {
  return (
    <div className="flex flex-col justify-start bg-white rounded-2xl h-auto px-7 py-8 mt-8">
        <div className="flex justify-between">
            <HThree>QR Code</HThree>
            <div className="flex w-2/6 justify-between mb-3">
                <Image src='./eye.svg' width={24} height={24} alt="view"/>
                <Image src='./eye.svg' width={24} height={24} alt="view"/>
                <Image src='./eye.svg' width={24} height={24} alt="view"/>
            </div>
        </div>
        <InfoCard img='./document.svg' text='Download the QR code or share it with your friends.' textClassName='text-black'/>
        <div className="w-full p-5 bg-gradient-to-r from-pink to-yellow rounded-xl mt-3">
            <div className="bg-white p-3 flex flex-col justify-between items-center rounded-2xl">
                <Image src='./logoQR.svg' width={152} height={48} alt="logo"/>
                <HThree>Hala Ahmed</HThree>
                <Image src='/QR.png' width={135} height={135} alt="logo"/>
                <Text>Follow Us on Mazaady</Text>
            </div>
        </div>
    </div>
  )
}

export default QRCode
