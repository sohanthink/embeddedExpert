import React from 'react'
import SubHeading from '../common/SubHeading'
import Image from 'next/image'

import banner from "@/public/resources/resources.png"
import affiliatebannershape from "@/public/resources/resourcesBanner.png"

const Banner = () => {
    return (
        <section className='w-full bg-tertiary/50 relative'>
            <div className='container rounded-lg flex justify-center items-center z-20'>
                <div className='flex flex-col items-center justify-center px-5 md:px-64 py-20 md:py-44 space-y-6'>
                    <h1 className='text-black text-2xl md:text-5xl font-extrabold leading-normal capitalize text-center'>Improve your firmware   <br /><span className='text-primary'> skills </span> with these guides.</h1>
                    <SubHeading cn="text-center" text="Learn the most relevant embedded systems development skills for today’s market- from ‘hello world’ to building your own Realtime Operating System (RTOS)." />
                    <Image src={banner} alt="banner_image" />
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full -z-10'>
                <Image src={affiliatebannershape} alt='banner shape' className='h-full' />
            </div>
        </section >
    )
}

export default Banner