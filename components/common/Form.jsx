"use client";
import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/TextArea";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Form({
    title = "Send Us A Message",
    initialValues,
    validationSchema,
    fields,
    endpoint,
    variant,
}) {
    const handleSubmit = async (values, { resetForm }) => {

        const ContactNotify = () => toast("Message Sent successfully!", {
            theme: "dark"
        });

        const ContactNotifyError = () => toast.error("Something Went Wrong!", {
            theme: "dark"
        });

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                ContactNotify();
                resetForm();
            } else {
                ContactNotifyError();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="w-full rounded-none md:rounded-2xl">
            <ToastContainer />
            <h3 className="font-bold text-2xl md:text-4xl text-black-300 pb-7">
                {title}
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <FormikForm className="space-y-6">
                        {fields.map((field) => (
                            field.type !== "select" && (
                                <LabelInputContainer key={field.name}>
                                    {/* <Label htmlFor={field.name}>{field.label}</Label> */}
                                    <Field
                                        as={field.type === "textarea" ? Textarea : Input}
                                        id={field.name}
                                        name={field.name}
                                        type={field.type || "text"}
                                        placeholder={field.placeholder}
                                        className="input"
                                    />
                                    <ErrorMessage
                                        name={field.name}
                                        component="div"
                                        className="text-red-500 text-sm font-semibold"
                                    />
                                </LabelInputContainer>
                            )
                        ))}
                        {fields.map((field) => (
                            field.type === "select" && (
                                <LabelInputContainer key={field.name}>
                                    <Field as="select" id={field.name} name={field.name} className="input py-2 px-2 text-sm rounded-lg bg-transparent shadow-input">
                                        <option value="" label={field.placeholder} />
                                        {field.options.map((option) => (
                                            <option key={option.value} value={option.value} label={option.label} />
                                        ))}
                                    </Field>
                                </LabelInputContainer>
                            )
                        ))}
                        {(variant === "affiliate") && (
                            <div className="flex items-center space-x-2">
                                <Field
                                    type="checkbox"
                                    id="agree"
                                    name="agree"
                                    className="checkbox"
                                />
                                <Label htmlFor="agree">I agree to the terms and conditions</Label>
                                <ErrorMessage
                                    name="agree"
                                    component="div"
                                    className="text-red-500 text-sm font-semibold"
                                />
                            </div>
                        )}
                        <button
                            className="bg-primary hover:bg-secondary transition-all duration-200 ease-linear flex justify-center gap-2 items-center relative group/btn w-full text-white rounded-full h-10 font-bold uppercase shadow-md"
                            type="submit"
                        >
                            Submit <IoIosSend />
                            <BottomGradient />
                        </button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);
