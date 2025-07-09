import React from 'react'
import Banner from '@/components/corporatetraining/Banner'

import innovator from "@/public/innovators/innovator.png"


const page = () => {
    return (
        <>
            <Banner variant='innovators' heading='Lead the Future of Embedded Systems. Build, Certify, Manufacture, and Protect  Innovation.' subheading='The Embedded Innovators Hub is a private training and mentorship program for  engineers ready to move beyond firmware and lead full-scale embedded product  development — from architecture to patents.' btnText='Apply for Enrollmen' btnLink='#' img={innovator} />
        </>
    )
}

export default page