import React from 'react'
import Image from 'next/image';

import lessonImg from "@/public/home/courses/lesson.svg";
import clock from "@/public/home/courses/clock.svg";
import Link from 'next/link';
import CommonButton from './Button';
import { GoArrowUpRight } from 'react-icons/go';

const CourseCard = ({ image, alt, category, title, lesson, time, link }) => {
    return (
        <Link href={link}>
            <div className={`contrast-100 hover:contrast-125 overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl ease-linear duration-200 transition-all`}>
                <div className='relative'>
                    <div><Image src={image} alt={alt} width={300} height={250} className='object-cover h-48 w-full rounded-xl' /></div>
                </div>
                <div className='p-5 space-y-5'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-primary text-sm capitalize font-medium px-4 py-2 rounded-full bg-[#2B4DFF24] inline'>{category}</h4>
                        <span className='font-bold text-primary'>74$</span>
                    </div>
                    <div className='flex gap-4 items-center px-2'>
                        <div className='flex gap-3 items-center justify-center text-black-900 text-base'>
                            <Image src={lessonImg} alt='lesson icon' className='object-cover' />
                            {lesson} Lessons
                        </div>
                        <div>| |</div>
                        <div className='flex gap-3 items-center justify-center text-black-900 text-base'>
                            <Image src={clock} alt='clock icon' className='object-cover' />
                            {time} Hours
                        </div>
                    </div>
                    <h2 className='capitalize font-semibold text-base md:text-xl text-black'>{title}</h2>
                    <h3 className='font-light text-black-900'>Essential skills for entry-level engineers, students.</h3>
                    <div className='border-b border-black-300/30'></div>
                    <Link href='#' className='text-primary text-sm cursor-pointer font-bold capitalize flex gap-2 justify-center items-center text-center'>View Course Details <GoArrowUpRight /></Link>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard