import React from 'react'
import CommonCard from '@/components/common/CommonCard'
import Heading from '@/components/common/Heading'

import image1 from "@/public/course/learningpathway/learningpathway1.png"
import image2 from "@/public/course/learningpathway/learningpathway2.png"
import image3 from "@/public/course/learningpathway/learningpathway3.png"
import SubHeading from '@/components/common/SubHeading'


const ProfessionalMastery = () => {
    return (
        <section className='py-8 md:py-24'>
            <Heading text="Choose Your Learning Pathway" cn='pb-2 md:pb-5' />
            <SubHeading cn='pb-5 md:pb-10' text='Advanced programs designed to help engineers build robust, scalable systems.' />
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <CommonCard link="#" variant='squarelist' src={image1} point1='Build confidence with hands-on embedded ' point2=' Understand microcontroller architecture' heading='AI-Augmented Embedded Developer Masterclass' subheading='$499' />
                <CommonCard link="#" variant='squarelist' src={image2} point1='Design scalable real-time systems' point2='Optimize firmware performance' heading='Secure Bootloader Development' subheading='$199' />

                <CommonCard link="#" variant='squarelist' src={image3} point1='Lead embedded innovation' point2='IP & certification strategy' heading='RTOS Advanced Programming & Optimization' subheading='$199' />
            </div>
        </section>
    )
}

export default ProfessionalMastery