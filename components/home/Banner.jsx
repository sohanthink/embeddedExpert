import React from 'react'
import Image from 'next/image';

import banner from "@/public/home/banner.png";
import mainbanner from "@/public/home/mainbaner.png";
import bottomShape from "@/public/home/bottomShape.png";
import topShape from "@/public/home/topShape.png";
import CommonButton from '../common/Button';


const shortData = [
    {
        id: 1,
        count: 160,
        text: "+ Countries"
    },
    {
        id: 2,
        count: 100000,
        text: "+ Students"
    },
    {
        id: 3,
        count: 13000,
        text: "+ Reviews"
    },
]

const Banner = () => {
    return (
        <section className='relative top-0 left-0 w-full h-[90vh] md:h-screen p-5 md:p-0'>
            <Image src={topShape} alt="topShape" className='absolute top-0 left-2/4 md:left-1/3 w-28 md:w-96 animate-pulse' />
            <Image src={bottomShape} alt="bottomShape" className='absolute bottom-0 left-0 w-28 md:w-96 -z-10 animate-pulse' />
            <div className='container flex md:flex-row h-full items-center justify-center md:justify-between py-24 md:py-0 z-50'>
                <div className='w-full md:w-[60%] pr-0 md:pr-28 space-y-3 md:space-y-6 text-center md:text-start z-50'>
                    <h1 className='text-black-600 text-2xl md:text-[55px] font-extrabold leading-none capitalize'>The <span className='text-primary stroke-yellow-800'>Ultimate</span> Platform for Embedded Systems Career Development.</h1>
                    <p className='text-base md:text-lg text-black-300'>Learn the most relevant embedded systems development skills for today’s market. from ‘hello world’ to building your own Realtime Operating System (RTOS).</p>
                    <CommonButton text="Explore Courses" link='/courses' />
                    <div className='md:flex gap-4 divide-black-300 divide-x-2 hidden z-0'>
                        {shortData.map((data, index) => (
                            <div key={data.id} className={`flex gap-2 ${index === 0 ? '' : 'pl-5'}`}>
                                <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-300 bg-clip-text text-transparent'>{data.count}</h1>
                                <p className='whitespace-nowrap text-sm text-primary'>{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-[40%] hidden md:block'>
                    <Image src={banner} alt="banner" className='object-cover' width={600} />
                </div>
            </div>
        </section>
    )
}

export default Banner