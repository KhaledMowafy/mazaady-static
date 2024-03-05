import React from 'react'
import Button from '../atoms/Button';
import Tab from '../atoms/Tab';
import HOne from '../atoms/HOne';
import ProductCard from './ProductCard';
function Wall() {
  return (
    <div className="rounded-2xl bg-white p-5 w-full "  style={{ minHeight: '100vh' }}>
        <div className="w-full flex justify-between">
            <div className="w-full flex justify-between lg:w-3/6 md:w-4/6">
            <div className="w-3/12">
            <Tab className="bg-yellowish text-dark-yellow border-dark-yellow">Products</Tab>
            </div>
            <div className="w-3/12">
            <Tab>Articles</Tab>
            </div>
            <div className="w-3/12">
            <Tab>Reviews</Tab>
            </div>
            </div>
            <div className="w-2/6 flex justify-end absolute top-1/4 right-0 md:static">
                <Button className='px-1 py-2 w-5/6'>Add Review</Button>
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
