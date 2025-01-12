"use client"

import React from 'react'
import { Form } from '../common/Form'
import * as Yup from "yup";
import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';


const contactInitialValues = { name: "", email: "", message: "" };

const contactValidationSchema = Yup.object({
    name: Yup.string().required("Name is required*"),
    email: Yup.string().email("Invalid email").required("Email is required*"),
    message: Yup.string().required("Message is required*"),
});

const contactFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
    { label: "Message", name: "message", type: "textarea", placeholder: "Enter your message" },
];

const ContactUs = () => {
    return (
        <div className='container py-10 md:py-24 px-4 md:px-8 space-y-6'>
            <Heading text="Are you Training A Team? Let's Talk" />
            <SubHeading text="We are ready to setup a custom plan for your organisation" />
            <div className='px-0 md:px-40'>
                <Form
                    initialValues={contactInitialValues}
                    validationSchema={contactValidationSchema}
                    fields={contactFields}
                    endpoint="/api/contact/contact"
                />
            </div>
        </div>
    )
}

export default ContactUs