"use client"
import React, {useState} from "react";
import Image from "next/image";
import InfoCard from "../atoms/InfoCard";

function ProductCard({ image, text, price, header}) {

    const [wishlist, setWishlist] = useState(false)

  return (
    <div className="flex w-full mt-8">
      <div className="w-3/12">
        <Image src={`${image}`} width={145} height={127} alt="Product Image" />
      </div>
      <div className="w-8/12">
        <div className="flex w-full flex-col">
          <h1 className="text-lg">{header}</h1>
          <div className="flex">
            <p className="text-lg text-gray">{text}</p>
            <h1 className="text-2xl font-bold ml-3">{price} EGP</h1>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray text-lg">Lot starts in </p>
            <div className="w-3/12">
              <InfoCard text="2 days" textClassName="text-lg font-bold text-dark-yellow"/>
            </div>
            <div className="w-3/12">
              <InfoCard text="10 hours" textClassName="text-lg font-bold text-dark-yellow"/>
            </div>
            <div className="w-3/12">
              <InfoCard text="50 minutes" textClassName="text-lg font-bold text-dark-yellow"/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/12">
        {wishlist?
        <Image className="cursor-pointer" onClick={()=>setWishlist(!wishlist)} src="./filledheart.svg" width={24} height={24} alt="wishlist"/>:
        <Image className="cursor-pointer" onClick={()=>setWishlist(!wishlist)} src="./heart.svg" width={24} height={24} alt="wishlist"/>
        }
        
      </div>
    </div>
  );
}

export default ProductCard;
