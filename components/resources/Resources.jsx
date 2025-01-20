import React from 'react'
import { VerticalPaper } from '../home/WhitePaper'
import image from '@/public/home/library/library.jpeg'

const Resources = () => {
    return (
        <section className='bg-gradient-to-b from-indigo-300 to-blue-800'>
            <div className='container p-5 md:p-0 py-10 md:py-24'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className="md:col-span-2">
                        <VerticalPaper cn="bg-white" varient="resources" title='skills for becoming an embedded champion.' desc="As you delve deeper into the world of Embedded Software Development, you are likely to have.." src={image} download="/" online="/" />
                    </div>
                    <VerticalPaper cn="bg-white" varient="resources" title='skills for becoming an embedded champion.' desc="As you delve deeper into the world of Embedded Software Development, you are likely to have.." src={image} download="/" online="/" />
                    <VerticalPaper cn="bg-white" varient="resources" title='skills for becoming an embedded champion.' desc="As you delve deeper into the world of Embedded Software Development, you are likely to have.." src={image} download="/" online="/" />
                    <VerticalPaper cn="bg-white" varient="resources" title='skills for becoming an embedded champion.' desc="As you delve deeper into the world of Embedded Software Development, you are likely to have.." src={image} download="/" online="/" />
                    <VerticalPaper cn="bg-white" varient="resources" title='skills for becoming an embedded champion.' desc="As you delve deeper into the world of Embedded Software Development, you are likely to have.." src={image} download="/" online="/" />
                    <div className='md:col-span-3'>
                        <VerticalPaper cn="bg-white" varient="resources" title='skills for becoming an embedded champion.' desc="As you delve deeper into the world of Embedded Software Development, you are likely to have.." src={image} download="/" online="/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources