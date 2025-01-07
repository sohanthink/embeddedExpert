import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import CourseCard from '../common/CourseCard'

const Courses = () => {
    return (
        <div className='bg-tertiary py-24'>
            <div className='container space-y-6'>
                <Heading text="Our Courses" />
                <SubHeading cn="px-56" text="Learn to design and program embedded systems with practical, real-world applications. Build expertise in hardware-software integration for cutting-edge technology!" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <CourseCard varient='home' />
                    <CourseCard varient='home' />
                    <CourseCard varient='home' />
                    <CourseCard varient='home' />
                </div>
            </div>
        </div>
    )
}

export default Courses