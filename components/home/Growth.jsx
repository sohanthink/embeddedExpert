import React from 'react'
import Heading from '../common/Heading'
import CommonCard from '../common/CommonCard'

import image1 from "@/public/course/learningpathway/learningpathway1.png"
import image2 from "@/public/course/learningpathway/learningpathway2.png"
import image3 from "@/public/course/learningpathway/learningpathway3.png"

const Growth = () => {
    return (
        <section className='py-8 md:py-24'>
            <Heading cn="pb-5 md:pb-10 p-10 md:p-0" text="Choose Your Embedded Systems Growth Path" />
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <CommonCard variant='circlelist' src={image1} point1='Build strong E foundamental' point2='Learn RTOS Essential' point3='Build strong E foundamental' heading='Career Foundation' subheading='(Beginners)' />
                <CommonCard variant='circlelist' src={image2} point1='Build strong E foundamental' point2='Learn RTOS Essential' point3='Build strong E foundamental' heading='Career Advancement' subheading='(Experienced Engineers)' />
                <CommonCard variant='circlelist' src={image3} point1='Build strong E foundamental' point2='Learn RTOS Essential' point3='Build strong E foundamental' heading='Strategic Innovation' subheading='(Leaders &  Entrepreneurs)' />
            </div>
        </section>
    )
}

export default Growth
