import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import Button from '../common/Button'

import certificate from '@/public/home/certificate.jpeg'
import Image from 'next/image'

const Certificate = () => {
    return (
        <div className='bg-tertiary'>
            <div className='container py-10 md:py-24 space-y-6 flex flex-col items-center px-5 md:px-0'>
                <Heading text="Prove Your Skills with Certificates of Achievement." />
                <SubHeading text="You will receive a certificate of completion after completing each course and passing courses that require a pass mark." />
                <Image src={certificate} alt="certification image" />
                <Button text="Start Learning" link='/' />
            </div>
        </div>
    )
}

export default Certificate