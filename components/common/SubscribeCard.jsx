"use client";
import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { IoIosSend } from 'react-icons/io';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import subscribeshaperight from "@/public/home/subscribeshaperight.svg";
import subscribeshapeleft from "@/public/home/subscribeshapeleft.svg";

const SubscribeCard = () => {
    const ContactNotify = () => toast("Subscribed Succesfully!", {
        theme: "dark"
    });

    const ContactNotifyError = () => toast.error("Something Went Wrong!", {
        theme: "dark"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("email");

        if (!email) {
            console.error("Email is required.");
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                ContactNotify();
                console.log("Form submitted with email:", email);
                e.target.reset();
            } else {
                console.log("Form submission failed:", email);
                ContactNotifyError();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section className='mx-5 md:mx-0 my-10 md:my-24'>
            <ToastContainer />
            <div className='py-10 relative md:py-24 container bg-primary p-5 rounded-lg flex flex-col items-center'>
                <Heading cn="text-white mb-4 z-10" text="Get the Latest in Learning" />
                <SubHeading cn="text-white mb-4 z-10" text="Subscribe now to receive the latest course updates, expert tips, and exclusive offers, all designed to help you advance your skills and career." />
                <div className='w-full md:w-1/2 lg:w-1/3 mx-auto my-8 mb-4 z-10'>
                    <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
                        <LabelInputContainer className="flex-grow">
                            <Input className="bg-transparent border border-white text-white placeholder-white placeholder:text-white rounded-full"
                                id="email"
                                placeholder="Enter Your Email"
                                type="email"
                                name="email"
                            />
                        </LabelInputContainer>

                        <button
                            className="hover:bg-secondary bg-white transition-all duration-200 ease-linear flex justify-center gap-2 items-center relative group/btn px-4 text-black-300 hover:text-white rounded-full h-10 font-bold uppercase shadow-md text-sm"
                            type="submit"
                        >
                            Subscribe <IoIosSend />
                            <BottomGradient />
                        </button>
                    </form>
                </div>
                <Image className='absolute left-0 bottom-0 w-20 md:w-40' src={subscribeshapeleft} alt='subscribe_shape' />
                <Image className='absolute right-0 top-0 w-20 md:w-40' src={subscribeshaperight} alt='subscribe_shape' />
            </div>
        </section>
    );
};

export default SubscribeCard;

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);
