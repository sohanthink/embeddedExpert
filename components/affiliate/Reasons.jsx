import React from 'react'
import { ExpertCard } from '../home/Expert'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'

import reasons1 from "@/public/affiliate/reasons/reasons1.png"
import reasons2 from "@/public/affiliate/reasons/reasons2.png"
import reasons3 from "@/public/affiliate/reasons/reasons3.png"

const Reasons = () => {
    return (
        <div className='container space-y-6 px-5 md:px-0 pb-10 md:pb-24'>
            <Heading text="Top 3 Reasons to Partner with EmbeddedExpertIO" />
            <SubHeading text="Experience unmatched expertise in embedded systems, tailored training, and cutting-edge solutions. Empower your team with skills for the technology of tomorrow!" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-5 md:py-10'>
                <ExpertCard btntext="Register" btnsrc="/courses" cn="bg-tertiary" src={reasons1} title="Lucrative Commission Structure" desc="Earn an industry-leading commission of 30%-40% on all our courses and learning paths. Focus on driving sales through your unique referral link while we handle product creation and customer service, allowing you to maximize your income potential" />
                <ExpertCard btntext="Register" btnsrc="/courses" cn="bg-tertiary" src={reasons2} title="Diverse Product Range" desc="Promote a variety of embedded systems courses for all skill levels, from beginner to advanced. This flexibility enables you to cater to a broad audience, ensuring value for your followers and higher earning opportunities for you." />
                <ExpertCard btntext="Register" btnsrc="/courses" cn="bg-tertiary" src={reasons3} title="Dedicated Affiliate Support" desc="Access a committed support team offering marketing materials, regular training, and ongoing resources. Our goal is to empower your affiliate efforts and help you achieve success every step of the way." />
            </div>
        </div>
    )
}

export default Reasons