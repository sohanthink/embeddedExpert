import AffiliateRegister from '@/components/affiliate/AffiliateRegister'
import Banner from '@/components/affiliate/Banner'
import Reasons from '@/components/affiliate/Reasons'
import SubscribeCard from '@/components/common/SubscribeCard'
import Faq from '@/components/common/Testimonial'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full'>
            <Banner />
            <Reasons />
            <Faq />
            <AffiliateRegister />
            <SubscribeCard />
        </div>
    )
}

export default page