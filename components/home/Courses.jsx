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
        <section className='px-5 py-10 md:py-24'>
            <div className='container space-y-6'>
                <Heading text="Foundations Pathway — Build Your Embedded Systems Core" />
                <SubHeading cn="px-0 md:px-56 pb-10" text="Essential skills for entry-level engineers, students, and career switchers." />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                    <CourseCard
                        image={course1}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        image={course2}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        image={course3}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        image={course1}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
                        image={course1}
                        alt='course1_image'
                        category="Imtermediate"
                        title="Bluetooth Low Energy (BLE) From Ground Up"
                        lesson='32'
                        time='10'
                        link='/'
                    />
                    <CourseCard
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
                    <Button link='/courses' text="View All Foundation Courses" />
                </div>
            </div>
        </section>
    )
}

export default Courses
