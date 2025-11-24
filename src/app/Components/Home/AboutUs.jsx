"use client";

import Image from "next/image";
import React from "react";
import about from '../../../assets/about.jpg'

const AboutUs = () => {
    return (
        <section className="bg-[#f9faf9] py-16 my-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">

                <div
                    className="lg:w-1/2 w-full flex justify-center"
                    data-aos="fade-right"
                    data-aos-duration="1000">

                    <Image
                        src={about}
                        alt=""
                        className="rounded-3xl shadow-lg w-full max-w-md object-cover" />

                </div>

                {/* Text Section */}
                <div
                    className="lg:w-1/2 w-full text-center lg:text-left"
                    data-aos="fade-left"
                    data-aos-duration="1000">

                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                        About Hero Courses
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Hero Courses is your go-to platform for learning web development
                        quickly and effectively. Our crash courses cover HTML, CSS, JavaScript,
                        React, Tailwind, and Next.js, helping you build real projects step by step.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Developers can also share their own courses, while learners explore,
                        enroll, and practice with hands-on projects. Our goal is to make
                        web development learning accessible, practical, and fun for everyone.
                    </p>

                    <a
                        href="/about-us"
                        className="btn border-none btn-primary bg-linear-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
