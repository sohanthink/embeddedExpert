import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import Image from 'next/image'

import image1 from "@/public/home/category/1.svg"
import image2 from "@/public/home/category/2.svg"
import image3 from "@/public/home/category/3.svg"
import image4 from "@/public/home/category/4.svg"

const Category = ({ src, title }) => {
    return (
        <div className='container px-5 md:px-20 pb-10 md:pb-24 space-y-6'>
            <Heading text=" Our Top Categories" />
            <SubHeading text="You will receive a certificate of completion after completing each course and passing courses that require a pass mark." />

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
                <CategoryCard src={image1} title="Assembly Programming" />
                <CategoryCard src={image2} title="Cloud Connectivity" />
                <CategoryCard src={image3} title="wireless programming" />
                <CategoryCard src={image4} title="RTOS Programming" />
            </div>
        </div>
    )
}

export default Category

export const CategoryCard = ({ src, title }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-7 p-5 md:p-10 shadow-[0px_0px_44px_0px_rgba(0,0,0,0.08)] rounded-lg hover:shadow-[0px_0px_10px_2px_rgba(0,_255,_255,_0.7)] transition-all duration-300 ease-linear'>
            <Image src={src} alt='category_icon' />
            <h5 className='font-semibold text-sm md:text-xl capitalize text-black text-center'>{title}</h5>
        </div>
    )
}