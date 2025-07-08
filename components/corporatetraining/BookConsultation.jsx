'use client'
import React from "react";
import CommonButton from '../common/Button'
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/TextArea";
import { cn } from "@/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bookConsulationShape from "@/public/corporatetraining/bookConsulationShape.png";
import Image from "next/image";

const BookConsultation = () => {
    const initialValues = {
        name: "",
        company: "",
        teamSize: "",
        goals: ""
    };

    const handleSubmit = async (values, { resetForm }) => {
        const notifySuccess = () => toast.success("Inquiry sent successfully!", { theme: "dark" });
        const notifyError = () => toast.error("Something went wrong. Please try again.", { theme: "dark" });

        try {
            // Demo submission - replace with actual API call later
            console.log("Form submitted:", values);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
            notifySuccess();
            resetForm();
        } catch (error) {
            console.error("Error submitting form:", error);
            notifyError();
        }
    };

    return (
        <section className='bg-primary p-5 md:p-0'>
            <div className='container py-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between'>
                <div className="md:w-[60%] relative">
                    <h1 className="text-center md:text-start text-2xl text-white md:text-[55px] font-bold leading-none capitalize pb-2 md:pb-6">
                        Let's Build Your Engineering Team's Competitive Edge
                    </h1>
                    <CommonButton
                        cn='bg-white text-primary hover:text-white hover:bg-transparent transition-all duration-300 ease-linear'
                        link='#'
                        varient='webinar'
                        text='Book Your Free Consultation Today'
                    />
                    <Image
                        src={bookConsulationShape}
                        alt="Book Consultation Shape"
                        className="md:absolute top-28 right-10"
                    />
                </div>
                <div className="md:w-[35%] w-full bg-white p-6 rounded-lg shadow-lg">
                    <ToastContainer />
                    <h3 className="font-bold text-2xl md:text-[28px] text-center text-gray-800 pb-6">
                        EmbeddedExpertIO's corporate inquiry
                    </h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <FormikForm className="space-y-3">
                                <LabelInputContainer>
                                    <Field
                                        as={Input}
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="input"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm font-semibold" />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Field
                                        as={Input}
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="input"
                                    />
                                    <ErrorMessage name="company" component="div" className="text-red-500 text-sm font-semibold" />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Field
                                        as={Input}
                                        id="teamSize"
                                        name="teamSize"
                                        type="text"
                                        placeholder="Enter your team size"
                                        className="input"
                                    />
                                    <ErrorMessage name="company" component="div" className="text-red-500 text-sm font-semibold" />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Field
                                        as={Input}
                                        id="goals"
                                        name="goals"
                                        placeholder="Describe your team's goals"
                                        className="input"
                                        rows={4}
                                    />
                                    <ErrorMessage name="goals" component="div" className="text-red-500 text-sm font-semibold" />
                                </LabelInputContainer>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-primary-dark transition-colors"
                                >
                                    {isSubmitting ? "Submitting..." : "Inquiry Now"}
                                </button>
                            </FormikForm>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);

export default BookConsultation;