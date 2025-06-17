import Banner from '@/components/course/Banner'
import React from 'react'
import LearningPathway from './LearningPathway'
import StrategicInnovation from '@/components/course/StrategicInnovation'
import Courses from '@/components/home/Courses'

const page = () => {
    return (
        <>
            <Banner />
            <LearningPathway />
            <StrategicInnovation />
            <Courses />
        </>
    )
}

export default page