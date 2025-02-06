import { FaCircle } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";

export default function About() {

    return (
        <main className="container bg-background mx-auto px-7 md:px-20">
            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-18 lg:grid-cols-2">
                {/* Information */}
                <div className="information flex flex-col gap-7">
                    {/* Profile */}
                    <h1 className="font-primary font-semibold text-white text-5xl lg:text-7xl">
                        A short introduction about <span className="text-accent">me</span>
                    </h1>
                    <button className="animate-bounce bg-transparent flex max-w-80 items-center justify-center px-4 py-1 font-medium tracking-wide text-white capitalize transition ease-linear transform rounded-lg border-2 border-accent hover:shadow-[0px_0px_15px_5px_#55c7e3]">
                        <FaCircle className="animate-pulse w-2 h-2 text-accent" /><span className="mx-2">Interning as a UI/UX Designer</span>
                    </button>
                    {/* Profile */}

                    {/* Description */}
                    <div className="font-secondary text-white text-2xl">
                        <p>
                            Hello! I&apos;m <span className="text-accent">Jovi Rachman</span>, a web developer with a primary focus on front-end development.
                        </p>
                        <p className="mt-4">
                            Despite having a background in Multimedia Vocational School, I have honed my skills in building engaging web interfaces through various projects, internships, and bootcamps.
                        </p>
                        <p className="mt-4">
                            You can visit my projects page to see my full portfolio.
                        </p>
                    </div>
                    {/* Description */}

                    {/* Educations & Experience */}
                    <div className="education-experience">
                        <h2 className="font-secondary font-semibold text-accent text-3xl">
                            Education <span className="text-white">&</span> Experience
                        </h2>
                        <ul className="grid grid-cols-1 gap-6 mt-1 md:grid-cols-2">
                            <li className="font-primary text-white">
                                <h4 className="level font-semibold text-xl">Vocational High School</h4>
                                <h5 className="name font-semibold text-lg">Kanaan Jakarta</h5>
                                <span className="date text-lg">2021 - 2024</span>
                            </li>
                            <li className="font-primary text-white">
                                <h4 className="level font-semibold text-xl">Bootcamp FS Web Developer</h4>
                                <h5 className="name font-semibold text-lg">Purwadhika Jakarta</h5>
                                <span className="date text-lg">3 Months</span>
                            </li>
                            <li className="font-primary text-white">
                                <div className="flex">
                                    <h4 className="level font-semibold text-xl">Internship - Marcomm</h4>
                                    {/* Details about Experience's */}
                                    <label htmlFor="info"><LuInfo className="cursor-pointer ms-1 text-lg hover:text-accent hover:-translate-y-1 transition-transform ease-in-out" /></label>
                                    <input type="checkbox" id="info" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <h3 className="text-2xl font-semibold"><span className="text-accent">More details</span> about this Job</h3>
                                            <div className="divider"></div>
                                            {/* More info */}
                                            <ul className="info-job-details mb-3">
                                                <li className="text-lg font-normal"><span className="font-semibold pe-2">Job Title:</span>Internship</li>
                                                <li className="text-lg font-normal"><span className="font-semibold pe-2">Department:</span>Marketing Communications</li>
                                                <li className="text-lg font-normal"><span className="font-semibold pe-2">Company:</span><a href="https://www.dtp.net.id/" className="hover:text-accent hover:underline">PT. Dwi Tunggal Putra</a></li>
                                            </ul>
                                            <div className="summary-job mb-3">
                                                <h5 className="text-xl font-semibold">Summary:</h5>
                                                <p className="text-lg font-normal py-1">
                                                    Contributed to the development of buanterone.id and area31.id for 5 months.
                                                    Implemented responsive and interactive front-end designs using HTML, CSS, Bootstrap 5, and JavaScript.
                                                </p>
                                            </div>
                                            <div className="responsibilities-job">
                                                <h5 className="text-xl font-semibold">Responsibilities:</h5>
                                                <ul className="list-disc ms-5">
                                                    <li>Assist in developing and maintaining the website</li>
                                                    <li>Assist in fixing existing website issues</li>
                                                    <li>Assist in packing items for events</li>
                                                </ul>

                                            </div>
                                            {/* More info */}
                                            <div className="modal-action">
                                                <label htmlFor="info" className="btn w-full me-auto">Back to Page</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Details about Experience's */}
                                </div>
                                <h5 className="name font-semibold text-lg">PT. Dwi Tunggal Putra</h5>
                                <span className="date text-lg">5 Months | Aug 2023 - Des 2023</span>
                            </li>
                            <li className="font-primary text-white">
                                <div className="flex">
                                    <h4 className="level font-semibold text-xl">Internship - UIUX Designer</h4>
                                    {/* Details about Experience's */}
                                    <label htmlFor="info2"><LuInfo className="cursor-pointer ms-1 text-lg hover:text-accent hover:-translate-y-1 transition-transform ease-in-out" /></label>
                                    <input type="checkbox" id="info2" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <h3 className="text-2xl font-semibold"><span className="text-accent">More details</span> about this Job</h3>
                                            <div className="divider"></div>
                                            {/* More info */}
                                            <ul className="info-job-details mb-3">
                                                <li className="text-lg font-normal"><span className="font-semibold pe-2">Job Title:</span>Internship</li>
                                                <li className="text-lg font-normal"><span className="font-semibold pe-2">Department:</span>UIUX Designer</li>
                                                <li className="text-lg font-normal"><span className="font-semibold pe-2">Company:</span><a href="https://www.linkedin.com/company/fypgroup/posts/?feedView=all" className="hover:text-accent hover:underline">FYP Media</a></li>
                                            </ul>
                                            <div className="summary-job mb-3">
                                                <h5 className="text-xl font-semibold">Summary:</h5>
                                                <p className="text-lg font-normal py-1">
                                                Played a key role in overhauling the website's UI/UX, from initial concept to implementation. 
                                                This involved creating a new design system, producing Lo-Fidelity prototypes, and conducting 
                                                usability testing with methods like SUS and Card Sorting.
                                                </p>
                                            </div>
                                            <div className="responsibilities-job">
                                                <h5 className="text-xl font-semibold">Responsibilities:</h5>
                                                <ul className="list-disc ms-5">
                                                    <li>Assisted in the development of a design system</li>
                                                    <li>Assisted in the creation of lo-fidelity designs</li>
                                                    <li>Assisted in usability testing using the SUS and Card Sorting methods</li>
                                                </ul>

                                            </div>
                                            {/* More info */}
                                            <div className="modal-action">
                                                <label htmlFor="info2" className="btn w-full me-auto">Back to Page</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Details about Experience's */}
                                </div>
                                <h5 className="name font-semibold text-lg">FYP Media</h5>
                                <span className="date text-lg">4 Months | Nov 2024 - Feb 2025</span>
                            </li>
                        </ul>
                    </div>
                    {/* Educations & Experience */}
                </div>
                {/* Information */}

                {/* Image */}
                <figure className="ps-0 lg:ps-48">
                    <Image
                        src="/Profile.JPG"
                        width={1000}
                        height={1000}
                        alt="Profile"
                        className="w-full max-h-full rounded-xl border-2 border-accent object-cover"
                        loading="lazy"
                    />
                </figure>
                {/* Image */}
            </div>
        </main>
    )
}