import Banner from '@/components/course/Banner'
import React from 'react'
import LearningPathway from './LearningPathway'
import StrategicInnovation from '@/components/course/StrategicInnovation'
import Courses from '@/components/home/Courses'
import SubscribeCard from '@/components/common/SubscribeCard'
import ProfessionalMastery from './ProfessionalMastery'
import Featured from '@/components/course/Featured'

const page = () => {
    return (
        <>
            <Banner />
            <LearningPathway />
            <StrategicInnovation />
            <Courses />
            <Featured />
            <ProfessionalMastery />
            <SubscribeCard />
        </>
    )
}

export default page