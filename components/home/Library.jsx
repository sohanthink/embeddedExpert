import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import Image from 'next/image'
import Button from '../common/Button'

import library from '@/public/home/library/library.jpeg'
import image1 from '@/public/home/library/1.svg'
import image2 from '@/public/home/library/2.svg'
import image3 from '@/public/home/library/3.svg'
import image4 from '@/public/home/library/4.svg'

const Library = () => {
    return (
        <section className='container py-10 md:py-24 '>
            <Heading cn="pb-6 px-5 md:px-0" text="The World’s Largest Online Embedded Systems Library" />
            <div className='space-y-6 px-5 md:px-28'>
                <SubHeading text="Learn the most relevant embedded systems development skills for today’s market- from ‘hello world’ to building your own Realtime Operating System (RTOS)." />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={library} alt='Cheap image' />
                    </div>
                    <ul className='flex flex-col gap-5 md:gap-0 md:justify-around py-1 md:py-5'>
                        <li className='flex gap-4 text-lg md:text-3xl font-semibold'>
                            <Image src={image3} alt='icon' />
                            Private forum.
                        </li>
                        <li className='flex gap-4 text-lg md:text-3xl font-semibold'>
                            <Image src={image4} alt='icon' />
                            One-on-one sessions.
                        </li>
                        <li className='flex gap-4 text-lg md:text-3xl font-semibold'>
                            <Image src={image2} alt='icon' />
                            Customized Study Guide.
                        </li>
                        <li className='flex gap-4 text-lg md:text-3xl font-semibold'>
                            <Image src={image1} alt='icon' />
                            Top rated Bare-Metal Courses.
                        </li>
                    </ul>
                </div>
                <div className='text-center '>
                    <Button text="Learn more" link='/' />
                </div>
            </div>
        </section>
    )
}

export default Library