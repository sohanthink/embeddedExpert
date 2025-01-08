import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import Image from 'next/image'

import arrowup from "@/public/home/expert/arrowup.svg"
import levelbar from "@/public/home/expert/levelbar.svg"
import growth from "@/public/home/expert/growth.svg"
import levelup from "@/public/home/expert/levelup.svg"
import Button from '../common/Button'

const Expert = () => {
    return (
        <div className='container space-y-6 px-5 py-10 md:py-24'>
            <Heading text="Suitable For Beginners All The Way Through To Experts" />
            <SubHeading text="EmbeddedExpertIO offers courses for all levels in embedded systems, covering basics to advanced topics like real-time OS, networking, and embedded AI. Their tailored learning paths make it a great choice for beginners and professionals alike." />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <ExpertCard cn="bg-[#FBE2F0]" src={arrowup} title="Skill Progression" desc="Progress from beginner to expert with easy-to-follow steps. Content adapts to your skill level for continuous growth" />
                <ExpertCard cn="bg-[#ECF4FA]" src={levelup} title="Level Up" desc="Advance your skills at every stage. Designed to challenge beginners and experts alike for steady improvement" />
                <ExpertCard cn="bg-tertiary" src={growth} title="Growth Path" desc="A clear path from beginner to expert. Progress with resources that evolve as your skills grow" />
                <ExpertCard cn="bg-[#E1E6FB]" src={levelbar} title="All Levels" desc="Learn at your own pace with content for all skill levels. Whether you're new or experienced, there's always something to learn" />
            </div>

            <div className='text-center'>
                <Button link='/courses' text="Start Learning" />
            </div>
        </div>
    )
}

export default Expert

export const ExpertCard = ({ src, title, desc, cn }) => {
    return (
        <div className={`space-y-4 p-5 rounded-lg ${cn}`}>
            <Image src={src} className='pb-4' alt='exper_icon' />
            <h5 className='text-xl font-semibold'>{title}</h5>
            <p className='text-black-300 text-base'>{desc}</p>
        </div>
    )
}