import React from 'react'
import Banner from '@/components/corporatetraining/Banner'

import innovator from "@/public/innovators/innovator.png"
import whyinnovators from "@/public/innovators/whyinnovators.png"
import CorporateCommonCard from '@/components/corporatetraining/CorporateCommonCard'


const page = () => {
    return (
        <>
            <Banner variant='innovators' heading='Lead the Future of Embedded Systems. Build, Certify, Manufacture, and Protect  Innovation.' subheading='The Embedded Innovators Hub is a private training and mentorship program for  engineers ready to move beyond firmware and lead full-scale embedded product  development — from architecture to patents.' btnText='Apply for Enrollmen' btnLink='#' img={innovator} />

            <CorporateCommonCard img={whyinnovators} varient='innovators' heading='What Is the Embedded Innovators Hub?' subheading='This is a rigorous, high-impact experience for embedded professionals ready to  expand their scope into product leadership. The program combines embedded  mastery, certification strategy, manufacturing readiness, and intellectual property  protection — the four pillars required to launch and defend real embedded  innovations in the global market.' />
        </>
    )
}

export default page