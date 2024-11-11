"use client"

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Contactform() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as "");
    if (state.succeeded) {
        return (
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h3 className="text-6xl font-bold text-white mb-3">I will be in touch shortly.</h3>
                        <p className="text-2xl font-semibold text-white mb-5">Thank you for your interest in our web development services.</p>
                        <Link href="/" className="text-lg font-semibold font-secondary text-white border-accent border-2 rounded-lg px-5 py-1 transition-all ease-linear hover:shadow-[0px_0px_4px_6px_#1d566d]">Back to Home</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="form py-12 md:py-52 mx-auto">
            <h1 className="text-5xl font-secondary font-bold text-white text-center border-b-2 border-b-accent max-w-3xl pb-3 mx-auto">I&apos;am Always Happy to <span className="text-accent">Connect</span></h1>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto md:gap-5 font-primary py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <input type="text" id="fullname" name="fullname" placeholder="Full Name" className="input input-bordered bg-transparent w-full" />
                    <ValidationError prefix="Fullname" field="fullname" errors={state.errors} />
                    <input type="text" id="email" name="email" placeholder="Email" className="input input-bordered bg-transparent w-full" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <input type="text" id="subject" name="subject" placeholder="Subject" className="input input-bordered bg-transparent w-full mt-3" />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                <textarea id="message" name="message" placeholder="Leave your message here" className="textarea textarea-bordered textarea-md bg-transparent w-full mt-3" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" disabled={state.submitting} className="btn btn-sm text-lg text-white bg-transparent border-accent border-2 hover:bg-accent transition-all ease-in mt-2 w-full md:w-fit md:px-12">Connect</button>
            </form>
        </section>
    )
}