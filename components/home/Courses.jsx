import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import CourseCard from '../common/CourseCard'

import course1 from "@/public/home/courses/course1.jpeg";
import course2 from "@/public/home/courses/course2.jpeg";
import course3 from "@/public/home/courses/course3.jpeg";
import Button from '../common/Button';

const Courses = () => {
    return (
        <div className='bg-tertiary px-5 py-10 md:py-24'>
            <div className='container space-y-6'>
                <Heading text="Our Courses" />
                <SubHeading cn="px-0 md:px-56 pb-10" text="Learn to design and program embedded systems with practical, real-world applications. Build expertise in hardware-software integration for cutting-edge technology!" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <CourseCard
                        varient='home'
                        image={course1}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        varient='home'
                        image={course2}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        varient='home'
                        image={course3}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        varient='home'
                        image={course1}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                </div>
                <div className='text-center'>
                    <Button link='/courses' text="View All Courses" />
                </div>
            </div>
        </div>
    )
}

export default Courses
