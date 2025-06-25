import React from 'react'
import Heading from '../common/Heading'
import CommonCard from '../common/CommonCard'

import image1 from "@/public/corporatetraining/trainingprogramme/trainig1.png"
import image2 from "@/public/corporatetraining/trainingprogramme/trainig2.png"
import image3 from "@/public/corporatetraining/trainingprogramme/trainig3.png"
import image4 from "@/public/corporatetraining/trainingprogramme/trainig4.png"

const TrainingProgramme = () => {
    return (
        <section className='py-8 md:py-24'>
            <Heading cn="pb-5 md:pb-10 p-10 md:p-0" text="Our Corporate Training Programs Include" />
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                <CommonCard variant='corporate' src={image1} point1=' Master embedded C/C++ and RTOS concepts' point2='Debug complex hardware/software interactions' point3='Debug complex hardware/software interactions' heading='Embedded Systems Core Training' subheading='Key Focus: Foundations to Advanced Firmware Skills' />
                <CommonCard variant='corporate' src={image2} point1='Implement secure boot and OTA update mechanisms' point2='Mitigate side-channel attacks and vulnerabilities' point3='Achieve industry certifications (e.g., IEC 62443)' heading='Secure Embedded Firmware Development' subheading='Key Focus: Threat Modeling, Fuzz Testing, Compliance' />
                <CommonCard variant='corporate' src={image3} point1='Design fail-safe systems for automotive/medical devices' point2='Navigate functional safety certification processes' point3='Apply MISRA/CERT coding standards' heading='Safety-Critical Firmware Engineering' subheading='Key Focus: ISO 26262, DO-178C, IEC 62304 Readiness' />
                <CommonCard variant='corporate' src={image4} point1='Accelerate product lifecycle from prototype to production' point2='Implement robust IP protection strategies' point3='Optimize firmware for mass production testing' heading='Embedded Innovation Leadership' subheading='Key Focus: IP Protection, Manufacturing Readiness' />
            </div>
        </section>
    )
}

export default TrainingProgramme
