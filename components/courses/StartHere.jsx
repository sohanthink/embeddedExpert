import React from 'react'

import Heading from '@/components/common/Heading'
import SubHeading from '@/components/common/SubHeading'
import CourseCard from '../common/CourseCard'

import lessonImg from "@/public/home/mainbaner.png";

const StartHere = () => {
    return (
        <div className='container clear-start mt-5 py-10 md:py-24 p-5 md:p-0'>
            <Heading varient="nopx" cn="text-start" text="Start Here" />
            <SubHeading varient="nopx" cn="text-start my-5" text="Experience unmatched expertise in embedded systems, tailored training, and cutting-edge. Experience unmatched expertise in embedded systems, tailored training, and cutting-edge. Experience unmatched expertise in embedded systems, tailored training, and cutting-edge. Experience unmatched expertise in embedded systems, tailored training, and cutting-edge." />
            <div className='grid grid-cols-1 gap-6 md:grid-cols-5'>
                <CourseCard image={lessonImg} alt="course banner" category="Start Here" title="Bluetooth Low Energy (BLE) From Ground Up" lesson="32" time="30" link="/" />
                <CourseCard image={lessonImg} alt="course banner" category="Start Here" title="Bluetooth Low Energy (BLE) From Ground Up" lesson="32" time="30" link="/" />
                <CourseCard image={lessonImg} alt="course banner" category="Start Here" title="Bluetooth Low Energy (BLE) From Ground Up" lesson="32" time="30" link="/" />
                <CourseCard image={lessonImg} alt="course banner" category="Start Here" title="Bluetooth Low Energy (BLE) From Ground Up" lesson="32" time="30" link="/" />
                <CourseCard image={lessonImg} alt="course banner" category="Start Here" title="Bluetooth Low Energy (BLE) From Ground Up" lesson="32" time="30" link="/" />
                <CourseCard image={lessonImg} alt="course banner" category="Start Here" title="Bluetooth Low Energy (BLE) From Ground Up" lesson="32" time="30" link="/" />
            </div>
        </div>
    )
}

export default StartHere