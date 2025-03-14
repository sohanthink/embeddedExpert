import React from 'react'
import Image from 'next/image';

import lessonImg from "@/public/home/courses/lesson.svg";
import clock from "@/public/home/courses/clock.svg";
import Link from 'next/link';

const CourseCard = ({ varient, image, alt, category, title, lesson, time, link }) => {
    return (
        <Link href={link}>
            <div className={`${varient == 'home' ? "border- rounded-lg" : "border border-gray/30 rounded-lg"} ' contrast-100 hover:contrast-125 overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl ease-linear duration-200 transition-all'`}>
                <div className='relative'>
                    <div><Image src={image} alt={alt} width={300} height={250} className='object-cover h-48 w-full' /></div>
                    {
                        varient == "home" ? '' :
                            <span className='bg-[#EFF1FD] absolute top-5 left-5 px-2 py-1 text-primary font-bold capitalize rounded-lg text-sm'>{category}</span>
                    }
                </div>
                <div className='p-5 space-y-2'>
                    {
                        varient == "home" &&
                        <h4 className='text-black-900 text-sm capitalize font-medium'>{category}</h4>
                    }
                    <h2 className='capitalize font-semibold text-base text-black'>{title}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center justify-center text-black-900'>
                            <Image src={lessonImg} alt='lesson icon' className='object-cover' />
                            {lesson} Lessons
                        </div>
                        <div className='flex gap-3 items-center justify-center text-black-900'>
                            <Image src={clock} alt='clock icon' className='object-cover' />
                            {time} Hours
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard