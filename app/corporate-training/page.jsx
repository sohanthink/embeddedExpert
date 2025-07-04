import Banner from '@/components/corporatetraining/Banner'
import CorporateCommonCard from '@/components/corporatetraining/CorporateCommonCard'
import TrainingProgramme from '@/components/corporatetraining/TrainingProgramme'
import React from 'react'

import businessoutcome from "@/public/corporatetraining/businessoutcome.png"
import engchallenge from "@/public/corporatetraining/engchallenge.png"
const page = () => {
    return (
        <>
            <Banner />
            <CorporateCommonCard img={engchallenge} varient='engineeringChallange' heading="The Engineering Challenges Companies Face Today." subheading='We help organizations solve these challenges through elite technical training' />
            <TrainingProgramme />
            <CorporateCommonCard img={businessoutcome} varient='businessOutcome' heading='The Business Outcomes We Help Engineering Teams Achieve' subheading='Training is an investment in speed, quality, and security. We train engineers to  deliver.' />
        </>
    )
}

export default page