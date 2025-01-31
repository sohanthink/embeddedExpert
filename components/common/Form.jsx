"use client";
import React, { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/TextArea";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Form({
    title = "Send Us A Message",
    initialValues,
    validationSchema,
    fields,
    endpoint,
    variant,
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        const notifySuccess = () =>
            toast.success("Message sent successfully!", { theme: "dark" });
        const notifyError = () =>
            toast.error("Something went wrong. Please try again.", { theme: "dark" });

        setIsSubmitting(true); // Start loading

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                notifySuccess();
                resetForm();
            } else {
                notifyError();
            }

        } catch (error) {
            console.error("Error submitting form:", error);
            notifyError();
        } finally {
            setIsSubmitting(false); // Stop loading
        }
    };

    return (
        <div className="w-full rounded-lg bg-white shadow-md p-8">
            <ToastContainer />
            <h3 className="font-bold text-2xl md:text-4xl text-gray-800 pb-6">
                {title}
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <FormikForm className="space-y-6">
                        {fields.map((field) =>
                            field.type !== "select" ? (
                                <LabelInputContainer key={field.name}>
                                    <Label htmlFor={field.name}>{field.label}</Label>
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
                            ) : (
                                <LabelInputContainer key={field.name}>
                                    <Label htmlFor={field.name}>{field.label}</Label>
                                    <Field
                                        as="select"
                                        id={field.name}
                                        name={field.name}
                                        className="input py-2 px-3 text-sm rounded-lg bg-transparent shadow-input"
                                    >
                                        <option value="" label={field.placeholder} />
                                        {field.options.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                label={option.label}
                                            />
                                        ))}
                                    </Field>
                                </LabelInputContainer>
                            )
                        )}
                        {variant === "affiliate" && (
                            <div className="flex items-center space-x-2">
                                <Field
                                    type="checkbox"
                                    id="agree"
                                    name="agree"
                                    className="checkbox"
                                />
                                <Label htmlFor="agree">
                                    I agree to the terms and conditions
                                </Label>
                                <ErrorMessage
                                    name="agree"
                                    component="div"
                                    className="text-red-500 text-sm font-semibold"
                                />
                            </div>
                        )}
                        <button
                            className={cn(
                                "flex justify-center items-center gap-2 w-full text-white rounded-full h-12 font-bold uppercase shadow-md transition-all duration-200 ease-linear",
                                isSubmitting
                                    ? "bg-secondary"
                                    : "bg-primary hover:bg-secondary"
                            )}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit <IoIosSend />
                                </>
                            )}
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
        <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);
