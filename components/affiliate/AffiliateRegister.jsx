import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import { Form } from '../common/Form'

const AffiliateRegister = () => {
    return (
        <div className='container py-10 md:py-24'>
            <div className='flex flex-col md:flex-row gap-10 items-center md:justify-between p-5 md:p-0'>
                <div className='w-full md:w-1/2 space-y-4'>
                    <Heading varient="nopx" cn="text-start" text="Join Our Affiliate Program and Unlock Your Earning Potential Today!" />
                    <SubHeading varient="nopx" cn="text-start" text="Earn commissions promoting our embedded systems courses. Sign up for your Affiliate Dashboard and support materials." />
                    <SubHeading varient="nopx" cn="text-start " text="Click below to start—questions? Contact us at EmbeddedExpert.io." />
                    <span className='text-sm font-bold text-primary-300'>Start Earning Today</span>
                </div>
                <div className='w-full md:w-2/5 p-5 md:p-10 bg-tertiary '>
                    <Form
                        title="Registration Form"
                        initialValues={
                            { name: "", email: "", phone: "", course_type: "intermediate" }
                        }
                        fields={[
                            { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
                            { label: "Email", name: "eame", type: "email", placeholder: "Enter your Email" },
                            { label: "Phone", name: "phone", type: "number", placeholder: "Enter your Phone" },
                            { label: "Category", name: "category", type: "text", placeholder: "Select A Category" }
                        ]}
                        endpoint="/affiliate"
                    />
                </div>
            </div>
        </div>
    )
}

export default AffiliateRegister