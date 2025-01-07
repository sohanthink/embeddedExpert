import React from 'react'
import Image from 'next/image';

import course1 from "@/public/home/courses/course1.jpeg";
import lesson from "@/public/home/courses/lesson.svg";
import clock from "@/public/home/courses/clock.svg";
import Link from 'next/link';

const CourseCard = ({ varient }) => {
    return (
        <Link href="/course">
            <div className='rounded-lg overflow-hidden flex-col bg-white shadow-sm'>
                <div className='relative'>
                    <Image src={course1} alt='course Image' className='object-cover' />
                    {
                        varient == "home" ? '' :
                            <span className='bg-[#EFF1FD] absolute top-5 left-5 px-2 py-1 text-primary capitalize rounded-lg'>intermediate</span>
                    }
                </div>
                <div className='p-5 space-y-2'>
                    {
                        varient == "home" &&
                        <h4 className='text-black-900 text-sm capitalize font-medium'>Cloud computing</h4>
                    }
                    <h2 className='capitalize font-semibold text-base text-black'>Master the Core Protocol of the Internet of Things...</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center justify-center text-black-900'>
                            <Image src={lesson} alt='lesson icon' className='object-cover' />
                            32 Lessons
                        </div>
                        <div className='flex gap-3 items-center justify-center text-black-900'>
                            <Image src={clock} alt='clock icon' className='object-cover' />
                            3.4 Hours
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard