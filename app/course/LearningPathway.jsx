import CommonCard from '@/components/common/CommonCard'
import Heading from '@/components/common/Heading'
import React from 'react'

import image1 from "@/public/course/learningpathway/learningpathway1.png"
import image2 from "@/public/course/learningpathway/learningpathway2.png"
import image3 from "@/public/course/learningpathway/learningpathway3.png"

const LearningPathway = () => {
    return (
        <section className='py-8 md:py-24'>
            <Heading text="Choose Your Learning Pathway" cn='pb-5 md:pb-10' />
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <CommonCard link="#" variant='checklist' src={image1} point1='Build confidence with hands-on embedded ' point2=' Understand microcontroller architecture' point3='Start coding STM32 from scratch' />

                <CommonCard link="#" variant='checklist' src={image2} point1='Design scalable real-time systems' point2='Optimize firmware performance' point3='Gain production-ready skills' />

                <CommonCard link="#" variant='checklist' src={image3} point1='Lead embedded innovation' point2='IP & certification strategy' point3='Innovator-only access' />
            </div>
        </section>
    )
}

export default LearningPathway