import React from 'react'
import Heading from '../common/Heading'
import CommonCard from '../common/CommonCard'

const Growth = () => {
    return (
        <section className='py-8 md:py-24'>
            <Heading cn="pb-5 md:pb-10 p-10 md:p-0" text="Choose Your Embedded Systems Growth Path" />
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <CommonCard />
                <CommonCard />
                <CommonCard />
            </div>
        </section>
    )
}

export default Growth