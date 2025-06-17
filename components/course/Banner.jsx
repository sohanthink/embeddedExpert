import Image from 'next/image'
import React from 'react'

import banner from '@/public/course/course-banner.png'
import banner1 from '@/public/course/course-banner1.png'
import bannershape from '@/public/course/banner-shape.png'
import CommonButton from '../common/Button'

const Banner = () => {
    return (
        <div className="relative h-screen w-full bg-[#2B4DFF12]">
            <div className="container h-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    <div className="col-span-3 md:col-span-2 h-full overflow-auto flex flex-col justify-center items-start px-4 space-y-4 md:space-y-7 md:pr-36 z-10">
                        <div className='relative'>
                            <h1 className="text-3xl text-white md:text-[55px] font-bold leading-[35px] md:leading-[60px] capitalize md:text-[#282C32] md:pr-24">Courses & Professional Embedded Systems<br /> Training.</h1>
                            <Image
                                src={bannershape}
                                alt="Banner Image"
                                className="object-cover absolute bottom-8 md:bottom-12 left-0 w-[150px] md:w-[250px]"
                            />
                        </div>
                        <p className="text-base md:text-lg md:pr-48 text-white md:text-[#282C32]">Structured learning pathways for engineers at every stage — from foundational skills to innovation leadership.</p>
                        <CommonButton link='#' text="Explore Programs" varient='webinar' />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-full z-0 md:w-1/3">
                        <Image
                            src={banner}
                            alt="Banner Image"
                            fill
                            className="object-cover"
                            sizes="50vw"
                        />
                    </div>
                </div>
            </div>

            <div className='absolute right-[5%] hidden md:block top-1/2 transform -translate-y-1/2 w-[55%] h-[60%]'>
                <Image
                    src={banner1}
                    alt="Banner Image"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 40vw, 30vw"
                />
            </div>

        </div>
    )
}

export default Banner