import Banner from '@/components/corporatetraining/Banner'
import CorporateCommonCard from '@/components/corporatetraining/CorporateCommonCard'
import TrainingProgramme from '@/components/corporatetraining/TrainingProgramme'
import React from 'react'

import businessoutcome from "@/public/corporatetraining/businessoutcome.png"
import engchallenge from "@/public/corporatetraining/engchallenge.png"
import SubscribeCard from '@/components/common/SubscribeCard'
const page = () => {
    return (
        <>
            <Banner />
            <CorporateCommonCard img={engchallenge} varient='engineeringChallange' heading="The Engineering Challenges Companies Face Today." subheading='We help organizations solve these challenges through elite technical training' />
            <TrainingProgramme />
            <CorporateCommonCard img={businessoutcome} varient='businessOutcome' heading='The Business Outcomes We Help Engineering Teams Achieve' subheading='Training is an investment in speed, quality, and security. We train engineers to  deliver.' />
            <SubscribeCard varient='corporatePilot' heading='Pilot Our Training With a Small Team Before Scaling' subheading='We offer flexible pilot programs to help you experience our training quality firsthand. Small teams (up to 5 engineers) can access customized programs before scaling department-wide.' />
        </>
    )
}

export default page