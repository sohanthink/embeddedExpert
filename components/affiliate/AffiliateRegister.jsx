'use client'

import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import { Form } from '../common/Form'
import * as Yup from "yup";

const affiliateValidationSchema = Yup.object({
    name: Yup.string().required("Name is required*"),
    email: Yup.string().email("Invalid email").required("Email is required*"),
    phone: Yup.number().required("Phone Number required*"),
});


const AffiliateRegister = () => {
    return (
        <section className='container py-10 md:py-24'>
            <div className='flex flex-col md:flex-row gap-10 items-center md:justify-between p-5 md:p-0 md:px-10'>
                <div className='w-full md:w-1/2 space-y-4'>
                    <Heading varient="nopx" cn="text-start" text="Join Our Affiliate Program and Unlock Your Earning Potential Today!" />
                    <SubHeading varient="nopx" cn="text-start md:text-base" text="We're excited to welcome you to our Affiliate Program and give you the opportunity to earn a commission by promoting our embedded systems courses. By joining now, you'll gain access to our comprehensive Affiliate Dashboard, marketing materials, and dedicated support team. To join, simply click the button below. Our team will then send you an email with all the information you need to get started, including access to your Affiliate Dashboard. Don't have any questions? Great! If you do, however, we're here to help. Contact us at EmbeddedExpert.io and we'll provide you with the support and resources you need to succeed." />
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
                            { label: "Email", name: "email", type: "email", placeholder: "Enter your Email" },
                            { label: "Phone", name: "phone", type: "number", placeholder: "Enter your Phone" },
                            {
                                label: "CourseType",
                                name: "courseType",
                                type: "select",
                                options: [
                                    { value: "intermediate", label: "Intermediate" },
                                    { value: "wireless_programming", label: "Wireless Programming" },
                                    { value: "stm", label: "STM" }
                                ],
                                placeholder: "Select a Course Type"
                            }
                            ,
                        ]}
                        validationSchema={affiliateValidationSchema}
                        endpoint="/api/affiliate/affiliate"
                        variant="affiliate"
                    />
                </div>
            </div>
        </section>
    )
}

export default AffiliateRegister