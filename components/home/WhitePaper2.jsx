import React from 'react'
import CommonCard from '../common/CommonCard'
import Heading from '../common/Heading'

import paper1 from "@/public/home/paper/paper1.png";

const WhitePaper2 = () => {
    return (
        <section className='bg-[#F3F7FB] py-8 md:py-24'>
            <Heading cn="pb-10" text="Real-World Expertise. Strategic Insights. Engineering Excellence" />
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <CommonCard variant='paper' src={paper1} heading='Developing Safety-Critical Embedded C Firmware: A Practical Approach' subheading='Embedded white paper mini-snippets nearby to reinforce expertise.' />
                <CommonCard variant='paper' src={paper1} heading='Embedded Firmware Security in a Connected World' subheading='Embedded white paper mini-snippets nearby to reinforce expertise.' />
                <CommonCard variant='paper' src={paper1} heading='Compliance Roadmaps for ISO 26262, DO-178C, and IEC 62304' subheading='Embedded white paper mini-snippets nearby to reinforce expertise.' />
            </div>
        </section>
    )
}

export default WhitePaper2
