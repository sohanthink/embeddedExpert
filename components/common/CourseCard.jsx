import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

import lessonImg from "@/public/home/courses/lesson.svg";
import clock from "@/public/home/courses/clock.svg";

const CourseCard = ({
    image,
    alt,
    category = "Best Selling",
    title,
    lesson = "N/A",
    time = "N/A",
    link = "#",
    price = "74$",
    description = "Essential skills for entry-level engineers, students."
}) => {
    return (
        <Link href={link} className="block group">
            <div className="contrast-100 group-hover:contrast-125 overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl ease-linear duration-200 transition-all rounded-xl">
                <div className='relative overflow-hidden'>
                    <Image
                        src={image}
                        alt={alt || title}
                        width={300}
                        height={250}
                        className='object-cover h-48 w-full rounded-t-xl group-hover:scale-105 transition-transform duration-300'
                        priority={false}
                        loading="lazy"
                    />
                </div>
                <div className='p-5 space-y-4'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-primary text-sm capitalize font-medium px-3 py-1.5 rounded-full bg-[#2B4DFF24] inline-block'>
                            {category}
                        </h4>
                        <span className='font-bold text-primary'>{price}</span>
                    </div>

                    <div className='flex gap-4 items-center px-2'>
                        <div className='flex gap-2 items-center justify-center text-black-900 text-sm'>
                            <Image
                                src={lessonImg}
                                alt='lesson icon'
                                className='w-4 h-4 object-contain'
                                width={16}
                                height={16}
                            />
                            <span>{lesson} Lessons</span>
                        </div>
                        <div className="text-gray-300">|</div>
                        <div className='flex gap-2 items-center justify-center text-black-900 text-sm'>
                            <Image
                                src={clock}
                                alt='clock icon'
                                className='w-4 h-4 object-contain'
                                width={16}
                                height={16}
                            />
                            <span>{time} Hours</span>
                        </div>
                    </div>

                    <h2 className='capitalize font-semibold text-base md:text-lg text-black line-clamp-2 group-hover:text-primary transition-colors duration-200'>
                        {title}
                    </h2>

                    <p className='font-light text-black-900 text-sm line-clamp-2'>
                        {description}
                    </p>

                    <div className='border-b border-black-300/30'></div>

                    <div className='text-primary text-sm cursor-pointer font-bold capitalize flex gap-2 justify-center items-center text-center group-hover:gap-3 transition-all duration-200'>
                        <span>View Course Details</span>
                        <GoArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard