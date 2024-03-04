import React from 'react'
import Image from 'next/image'
import HThree from '../atoms/HThree'
import Text from '../atoms/Text'
import InfoCard from '../atoms/InfoCard'
import Button from '../atoms/Button'

function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl h-auto px-8 py-8">
        <div className="flex w-full flex-col justify-start mb-3">
        <Image src='/profile-img.svg' alt="profile image" width={100} height={100}/>
        </div>
        <HThree>Hala Ahmed</HThree>
        <Text>I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.</Text>
        <div className="w-full flex justify-between mt-8 mb-8">
            <div className="w-4/12 pr-3">
            <InfoCard img='/profile.svg' Bnumber={5} text='Following'/>
            </div>
            <div className="w-4/12 pl-1 pr-1">
            <InfoCard img='/profile.svg' Bnumber={20} text='Followers'/>
            </div>
            <div className="w-4/12 pl-3">
            <InfoCard img='/profile.svg' Bnumber={4.2} Snumber={15} text='Rating'/>
            </div>
        </div>
        <Button>Follow</Button>
    </div>
  )
}

export default ProfileCard
