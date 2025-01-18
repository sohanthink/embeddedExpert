'use client'

import React, { useState } from 'react';

import { MdExpandMore } from 'react-icons/md';
import Heading from './Heading';

const AccordionItem = ({ id, title, content, isOpen, toggleAccordion }) => (
    <div className={`accordion py-8 border-b border-solid border-gray-200 ${isOpen ? 'active' : ''}`} id={id}>
        <button
            className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 ${isOpen ? 'font-medium text-indigo-600' : ''}`}
            aria-controls={`${id}-content`}
            onClick={() => toggleAccordion(id)}
        >
            <h5>{title}</h5>
            <MdExpandMore
                className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                size={22}
            />
        </button>
        <div
            id={`${id}-content`}
            className={`accordion-content w-full px-0 overflow-hidden pr-4 ${isOpen ? 'active' : ''}`}
            style={{ maxHeight: isOpen ? '100px' : '0', transition: 'max-height 0.3s ease-in-out' }}
            aria-labelledby={id}
        >
            <p className="text-base font-normal text-gray-600">{content}</p>
        </div>
    </div>
);

const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <section className="p-5 md:p-0 md:py-20 md:px-20 container md:border md:border-gray rounded-lg mb-10 md:mb-24">
            <div className="flex flex-col justify-center items-center gap-x-5 md:gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://pagedone.io/asset/uploads/1696230182.png"
                        alt="FAQ tailwind section"
                        className="w-full rounded-xl object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-xl">
                        <div className="mb-6 lg:mb-16">
                            <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left ml-1">faqs</h6>
                            <Heading varient="nopx" cn="font-bold mb-3 lg:text-left" text="Looking for answers?" />
                        </div>
                        <div className="accordion-group md:px-1" data-accordion="default-accordion">
                            <AccordionItem
                                id="basic-heading-one-with-arrow-always-open"
                                title="How to create an account?"
                                content="To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform."
                                isOpen={openAccordion === 'basic-heading-one-with-arrow-always-open'}
                                toggleAccordion={toggleAccordion}
                            />
                            <AccordionItem
                                id="basic-heading-two-with-arrow-always-open"
                                title="Have any trust issue?"
                                content="Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease."
                                isOpen={openAccordion === 'basic-heading-two-with-arrow-always-open'}
                                toggleAccordion={toggleAccordion}
                            />
                            <AccordionItem
                                id="basic-heading-three-with-arrow-always-open"
                                title="How can I reset my password?"
                                content="Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease."
                                isOpen={openAccordion === 'basic-heading-three-with-arrow-always-open'}
                                toggleAccordion={toggleAccordion}
                            />
                            <AccordionItem
                                id="basic-heading-four-with-arrow-always-open"
                                title="What is the payment process?"
                                content="Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease."
                                isOpen={openAccordion === 'basic-heading-four-with-arrow-always-open'}
                                toggleAccordion={toggleAccordion}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
