import React from 'react'
import Button from '../atoms/Button';
import Tab from '../atoms/Tab';
import HOne from '../atoms/HOne';
import ProductCard from './ProductCard';
function Wall() {
  return (
    <div className="rounded-2xl bg-white p-5 w-full overflow-y-auto ">
        <div className="w-full flex justify-between">
            <div className="w-3/6 flex justify-between">
            <Tab className="bg-yellowish text-dark-yellow border-dark-yellow">Products</Tab>
            <Tab>Articles</Tab>
            <Tab>Reviews</Tab>
            </div>
            <div className="w-1/6">
                <Button>Add Review</Button>
            </div>
        </div>
        <div className="w-full flex mt-8 flex-col">
            <HOne>Products</HOne>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        <ProductCard image="./product.svg" header='Six-piece clothing set (blouse - pants - hat and ...' text="Starting Price" price="1000"/>
        </div>
    </div>
  )
}

export default Wall
