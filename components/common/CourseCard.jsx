import React from 'react'
import Image from 'next/image';

import lessonImg from "@/public/home/courses/lesson.svg";
import clock from "@/public/home/courses/clock.svg";
import Link from 'next/link';

const CourseCard = ({ varient, image, alt, category, title, lesson, time, link }) => {
    return (
        <Link href={link}>
            <div className='rounded-lg overflow-hidden flex-col bg-white shadow-sm'>
                <div className='relative'>
                    <Image src={image} alt={alt} className='object-cover' />
                    {
                        varient == "home" ? '' :
                            <span className='bg-[#EFF1FD] absolute top-5 left-5 px-2 py-1 text-primary capitalize rounded-lg'>{category}</span>
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