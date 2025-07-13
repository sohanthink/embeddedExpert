import React from 'react'
import Banner from '@/components/corporatetraining/Banner'

import innovator from "@/public/innovators/innovator2.png"
import whyinnovators from "@/public/innovators/whyinnovators.png"
import CorporateCommonCard from '@/components/corporatetraining/CorporateCommonCard'
import Pillars from '@/components/innovators/Pillars'
import InnovatorsHub from '@/components/innovators/InnovatorsHub'
import Outcome from '@/components/innovators/Outcome'
import Testimonial2 from '@/components/home/Testimonial2'


import innovator2 from "@/public/innovators/innovator/innovator.png"
import SubscribeCard from '@/components/common/SubscribeCard'
import Apply from '@/components/innovators/Apply'




const page = () => {
    return (
        <>
            <Banner variant='innovators' heading='Lead the Future of Embedded Systems. Build, Certify, Manufacture, and Protect  Innovation.' subheading='The Embedded Innovators Hub is a private training and mentorship program for  engineers ready to move beyond firmware and lead full-scale embedded product  development — from architecture to patents.' btnText='Apply for Enrollmen' btnLink='#' img={innovator} />

            <CorporateCommonCard img={whyinnovators} varient='innovators' heading='What Is the Embedded Innovators Hub?' subheading='This is a rigorous, high-impact experience for embedded professionals ready to  expand their scope into product leadership. The program combines embedded  mastery, certification strategy, manufacturing readiness, and intellectual property  protection — the four pillars required to launch and defend real embedded  innovations in the global market.' />
            <Pillars />
            <InnovatorsHub />
            <Outcome />
            <Testimonial2 />

            <CorporateCommonCard img={innovator2} varient='innovator' heading='Program Designed by a Practicing Embedded Innovator' />

            <Apply />

            <SubscribeCard varient='innovator' heading='Build the Next Generation of Embedded Innovation — With Expert Mentorship.' />

        </>
    )
}

export default page