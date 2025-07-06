import Banner from '@/components/corporatetraining/Banner'
import CorporateCommonCard from '@/components/corporatetraining/CorporateCommonCard'
import TrainingProgramme from '@/components/corporatetraining/TrainingProgramme'
import React from 'react'

import businessoutcome from "@/public/corporatetraining/businessoutcome.png"
import engchallenge from "@/public/corporatetraining/engchallenge.png"
import SubscribeCard from '@/components/common/SubscribeCard'
import Training from '@/components/home/Training'

import icon1 from "@/public/corporatetraining/leadership/leadershipicon1.png";
import icon2 from "@/public/corporatetraining/leadership/leadershipicon2.png";
import icon3 from "@/public/corporatetraining/leadership/leadershipicon3.png";


const page = () => {
    return (
        <>
            <Banner />
            <CorporateCommonCard img={engchallenge} varient='engineeringChallange' heading="The Engineering Challenges Companies Face Today." subheading='We help organizations solve these challenges through elite technical training' />
            <TrainingProgramme />
            <CorporateCommonCard img={businessoutcome} varient='businessOutcome' heading='The Business Outcomes We Help Engineering Teams Achieve' subheading='Training is an investment in speed, quality, and security. We train engineers to  deliver.' />
            <SubscribeCard varient='corporatePilot' heading='Pilot Our Training With a Small Team Before Scaling' subheading='We offer flexible pilot programs to help you experience our training quality firsthand. Small teams (up to 5 engineers) can access customized programs before scaling department-wide.' />

            <Training
                variant='corporateLeadership'
                heading='Thought Leadership in Embedded Systems'
                title1="Compliance Roadmaps for Embedded Systems"
                description1="Navigating ISO 26262 and IEC 62304 requires aligning firmware architecture with audit trails. Learn how to preempt certification bottlenecks..."
                title2="Risk Mitigation in Embedded Firmware Development"
                description2="From supply chain vulnerabilities to memory corruption attacks, proactive firmware hardening reduces field failures by up to 40%..."
                title3="Secure Firmware Design in IoT-Connected Products"
                description3="Why zero-trust principles fail in resource-constrained devices—and how to implement lightweight attestation instead..."
                icon1={icon1}
                icon2={icon2}
                icon3={icon3}
            />
        </>
    )
}

export default page