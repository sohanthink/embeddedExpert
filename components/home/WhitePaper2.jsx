import React from 'react'
import CommonCard from '../common/CommonCard'
import Heading from '../common/Heading'

const WhitePaper2 = () => {
    return (
        <section className='bg-[#F3F7FB] py-8 md:py-24'>
            <Heading cn="pb-10" text="Real-World Expertise. Strategic Insights. Engineering Excellence" />
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <CommonCard varient='paper' />
                <CommonCard varient='paper' />
                <CommonCard varient='paper' />
            </div>
        </section>
    )
}

export default WhitePaper2